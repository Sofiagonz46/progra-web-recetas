import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail-v2',
  imports: [],
  templateUrl: './recipes-detail-v2.html',
  styleUrl: './recipes-detail-v2.css'
})
export class RecipesDetailV2 implements OnInit {

  recipesList = RECIPES_LIST_DATA;

  name: string = '';

  difficulty: string = '';

  filteredRecipes: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      this.name = params['name'] || '';

      this.difficulty = params['difficulty'] || '';

      this.filterRecipes();

    });

  }

  filterRecipes(): void {

    const searchName = this.name.toLowerCase().trim();

    const searchDifficulty = this.difficulty.toLowerCase().trim();

    this.filteredRecipes = this.recipesList.recipes.filter(recipe => {

      const matchesName =
        !searchName ||
        recipe.name.toLowerCase().includes(searchName);

      const matchesDifficulty =
        !searchDifficulty ||
        recipe.difficulty.toLowerCase() === searchDifficulty;

      return matchesName && matchesDifficulty;

    });

  }

}