import {Ingredient} from "../shared/ingredient.module";
import {Subject} from "rxjs";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Uvas', 20),
    new Ingredient('Watermelon', 1)
  ]

  ingredientAdded = new Subject<Ingredient[]>();

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientAdded.next(this.ingredients.slice())
  }

  obtainIngredients() {
    return this.ingredients.slice()
  }

}
