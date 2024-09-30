import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.models';
import { RecipesService } from './recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];
  constructor(
    public recipesServ: RecipesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.recipes = this.recipesServ.getRecipes();
    console.log('GET ALL RECIPES');
  }
  goDetail(id: string) {}
  async deleteRecipe(id: string) {
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: "You'really ok with this?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.recipes = this.recipes.filter((item) => item.id != id);
          },
        },
      ],
    });

    await alert.present();
  }
}
