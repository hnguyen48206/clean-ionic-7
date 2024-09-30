import { Injectable } from '@angular/core';
import { Recipe } from './recipes.models';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Mashed Potatos',
      imgURL:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/12/Mashed-Potatoes-main.jpg',
      ingrediants: ['Potatoes', 'Garlic', 'Unsalted butter', 'Milk'],
    },
    {
      id: '2',
      title: 'Mashed Potatos',
      imgURL:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/12/Mashed-Potatoes-main.jpg',
      ingrediants: ['Potatoes', 'Garlic', 'Unsalted butter', 'Milk'],
    },
    {
      id: '3',
      title: 'Mashed Potatos',
      imgURL:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/12/Mashed-Potatoes-main.jpg',
      ingrediants: ['Potatoes', 'Garlic', 'Unsalted butter', 'Milk'],
    },
    {
      id: '4',
      title: 'Mashed Potatos',
      imgURL:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/12/Mashed-Potatoes-main.jpg',
      ingrediants: ['Potatoes', 'Garlic', 'Unsalted butter', 'Milk'],
    },
    {
      id: '5',
      title: 'Mashed Potatos',
      imgURL:
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/12/Mashed-Potatoes-main.jpg',
      ingrediants: ['Potatoes', 'Garlic', 'Unsalted butter', 'Milk'],
    },
  ];
  constructor() {}
  getRecipes(id: string = '') {
    if (id == '') return [...this.recipes];
    else return this.recipes.filter((recipe) => recipe.id === id);
  }
}
