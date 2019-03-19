import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}
  storeRecipes() {
    return this.http.put(
      "https://recipe-a4b60.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }
}
