import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Recipes } from '../recipes/recipes';

@Component({
  selector: 'app-recipes-list',
  imports: [RouterLink, FormsModule],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList {

  recipesList = new Recipes().recipesList;

  filterType = '';

  _name = '';

  _difficulty = '';

  _recipesListFilter = this.recipesList.recipes;

  private readonly router = inject(Router);

  viewDetails(id: number): void {
    this.router.navigate(['recipes-detail', id]);
  }

  filterRecipesList(): void {

    if (this.filterType === 'NAME') {

      this.filterRecipesListByName();

    } else if (this.filterType === 'DIFFICULTY') {

      this.filterRecipesListByDifficulty();

    } else {

      this._recipesListFilter = this.recipesList.recipes;

    }

  }

  filterRecipesListByName(): void {

    this._recipesListFilter = this.recipesList.recipes.filter((x) =>
      x.name.toLowerCase().includes(this._name.toLowerCase())
    );

  }

  filterRecipesListByDifficulty(): void {

    this._recipesListFilter = this.recipesList.recipes.filter((x) =>
      x.difficulty.toLowerCase().includes(this._difficulty.toLowerCase())
    );

  }

  goToDetails(id: number): void {
    this.router.navigate(['/recipes-detail', id]);
  }

}