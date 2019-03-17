import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
