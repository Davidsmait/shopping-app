import {Ingredient} from "../shared/ingredient.module";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Uvas', 20),
    new Ingredient('Watermelon', 1)
  ]

  ingredientAdded = new EventEmitter<Ingredient[]>();

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientAdded.emit(this.ingredients.slice())
  }

  obtainIngredients() {
    return this.ingredients.slice()
  }

}
