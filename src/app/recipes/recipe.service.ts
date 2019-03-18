import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Salad",
      "Tasty Salad",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-E28BB6cRRotXBHjM87qcwyaMg6UGdc_N0J_TBk62jnVmAT07tA",
      [new Ingredient("Salad", 100), new Ingredient("Tomato", 1)]
    ),
    new Recipe(
      "Pizza",
      "Super Chease pizza",
      "https://www.wholesomeyum.com/wp-content/uploads/2018/01/wholesomeyum-stuffed-spaghetti-squash-lasagna-boats-recipe-with-meat-2.jpg",
      [new Ingredient("Bread", 1), new Ingredient("Chease", 100)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
