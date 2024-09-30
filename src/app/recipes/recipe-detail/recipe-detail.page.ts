import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipes.models';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  param_subscription: Subscription | undefined;
  currentRecipe: Recipe | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeServ: RecipesService
  ) {}

  ngOnInit() {
    this.param_subscription = this.activatedRoute.paramMap.subscribe(
      (paramMap) => {
        if (!paramMap.has('recipeID')) {
          //redirect
          return;
        } else {
          const recipeID = paramMap.get('recipeID');
          this.currentRecipe = this.recipeServ.getRecipes(
            recipeID?.toString()
          )[0];
        }
      }
    );
  }
}
