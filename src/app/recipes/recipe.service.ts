import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.module";

export class RecipeService {
 //

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Illustrated_recipes%3B_%27Minted_Pineapple%27%2C_%27Quick_Tomato_Mold%27_Wellcome_L0072307.jpg/1200px-Illustrated_recipes%3B_%27Minted_Pineapple%27%2C_%27Quick_Tomato_Mold%27_Wellcome_L0072307.jpg',
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
}
