import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      "This is a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-E28BB6cRRotXBHjM87qcwyaMg6UGdc_N0J_TBk62jnVmAT07tA"
    ),
    new Recipe(
      "Second Recipe",
      "This is a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-E28BB6cRRotXBHjM87qcwyaMg6UGdc_N0J_TBk62jnVmAT07tA"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
