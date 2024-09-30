import { Component, OnInit } from '@angular/core';
import {
  ActionPerformed,
  LocalNotifications,
} from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private alertController: AlertController) {}
  ngOnInit(): void {
    this.localNotiInit().then((res) => {
      console.log(res);
      if (res) this.localNotiClickHandler();
    });
  }

  //----------------------------------------------Local Notifications----------------------------------------
  async localNotiInit() {
    let isPermitted = await LocalNotifications.checkPermissions();
    if (isPermitted.display != 'granted') {
      //ask for permission
      isPermitted = await LocalNotifications.requestPermissions();
      if (isPermitted.display == 'granted') return Promise.resolve(true);
      else return Promise.resolve(false);
    } else return Promise.resolve(true);
  }
  localNotiClickHandler() {
    LocalNotifications.addListener(
      'localNotificationActionPerformed',
      this.handleLocalNotificationAction.bind(this)
    );
  }
  async handleLocalNotificationAction(notificationAction: ActionPerformed) {
    console.log(notificationAction);

    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: notificationAction.notification.largeBody,
      buttons: ['Action'],
    });

    await alert.present();
  }
  newChannelExample() {
    LocalNotifications.createChannel({
      id: 'reminders',
      name: 'Reminders',
      description: 'Notifications for reminders',
      importance: 4, // High importance
      sound: 'reminder_sound.wav',
      vibration: true,
      visibility: 1, // Public
      lights: true,
      lightColor: '#FF0000',
    })
      .then(() => {
        console.log('Channel created');
      })
      .catch((error) => {
        console.error('Error creating channel:', error);
      });
  }

  //-----------------------------------------FireBase Notification-------------------------------------------------
}
