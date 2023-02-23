import {Ingredient} from "../shared/ingredient.module";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient('Uvas', 20),
    new Ingredient('Watermelon', 1)
  ]


  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientAdded.next(this.ingredients.slice())
  }

  onUpdateIngredient(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = updatedIngredient;
    this.ingredientAdded.next(this.ingredients.slice())
  }

  onDeleteIngredient(index: number){
    this.ingredients.splice(index,1)
    this.ingredientAdded.next(this.ingredients.slice())
  }

  obtainIngredients() {
    return this.ingredients.slice()
  }

  obtainIngredient(index: number) {
    return this.ingredients[index];
  }

}
