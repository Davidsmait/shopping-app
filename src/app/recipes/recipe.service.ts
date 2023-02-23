import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.module";
import {Subject} from "rxjs";

export class RecipeService {
 // git push https://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@github.com/Davidsmait/shopping-app.git master

  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a description',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F01%2Fcucumber-sandwich.jpg',
      [
        new Ingredient('lemon', 3),
        new Ingredient('water', 1),
        new Ingredient('tomato', 2)
        ]),
    new Recipe(
      'Second test Recipe',
      'Second simply description 2',
      'https://img.freepik.com/free-vector/homemade-bread-recipe-concept_52683-39142.jpg?w=2000',
      [
        new Ingredient('bread', 1),
        new Ingredient('oliva', 2),
      ]),
    new Recipe(
      'Third test Recipe',
      'Third test Recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient('tomato', 3),
        new Ingredient('meat', 1)
      ])
  ]

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipeForId(id){
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteService(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
