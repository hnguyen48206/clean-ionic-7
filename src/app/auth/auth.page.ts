import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor() {}
  smallbody = 'Test Local Noti';
  largeBody =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  ngOnInit() {}
  fireLocalNoti(option: number = 0) {
    switch (option) {
      case 0:
        //immediate
        LocalNotifications.schedule({
          notifications: [
            {
              title: 'Immediate',
              body: '',
              id: 0,
              largeBody: this.largeBody,
              schedule: {
                allowWhileIdle: true,
              },
              extra: {
                test: true,
              },
            },
          ],
        });
        break;
      case 1:
        //immediate
        LocalNotifications.schedule({
          notifications: [
            {
              title: 'Immediate',
              body: '',
              id: 0,
              largeBody: this.largeBody,
              schedule: {
                allowWhileIdle: true,
                at: new Date(Date.now() + 5000),
              },
              extra: {
                test: true,
              },
            },
          ],
        });
        break;
      default:
        break;
    }
  }
}
