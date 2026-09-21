import { Component } from '@angular/core';
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

  constructor(private router: Router) {}

  recipes = new Recipes().recipesList.recipes.map(recipe => ({
    id: recipe.id,
    name: recipe.name,
    difficulty: recipe.difficulty
  }));

  filteredRecipes = this.recipes;

  filterType: string = '';

  searchName: string = '';

  selectedDifficulty: string = '';

  selectFilter(type: string): void {
    this.filterType = type;
  }

  filterRecipes(): void {

    if (this.filterType === 'NAME') {

      const search = this.searchName.toLowerCase().trim();

      if (search === '') {
        this.filteredRecipes = this.recipes;
        return;
      }

      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(search)
      );

    } else if (this.filterType === 'DIFFICULTY') {

      if (this.selectedDifficulty === '') {
        this.filteredRecipes = this.recipes;
        return;
      }

      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.difficulty === this.selectedDifficulty
      );

    } else {

      this.filteredRecipes = this.recipes;

    }
  }

  goToDetails(id: number): void {
    this.router.navigate(['/recipes-detail', id]);
  }
}