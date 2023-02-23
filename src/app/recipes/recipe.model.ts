import {Ingredient} from "../shared/ingredient.module";

export class Recipe {
  //especificar accesor

  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {

  }
}

