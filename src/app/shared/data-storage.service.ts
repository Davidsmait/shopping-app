import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map, tap} from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://shopping-app-e162e-default-rtdb.firebaseio.com/recipes/-NPOEqOXKKtleaeAVlAh.json',recipes)
      .subscribe()
  }

  fetchRecipes(){
  return this.http.get<Recipe[]>('https://shopping-app-e162e-default-rtdb.firebaseio.com/recipes/-NPOEqOXKKtleaeAVlAh.json')
    .pipe(
      map(recipes => {
        return recipes.map(recipes => {
          return {
            ...recipes,
            ingredients: recipes.ingredients ? recipes.ingredients : []
          }
        })
      }),
      tap(recipes => {
        //fetchRecipes
        this.recipeService.setRecipes(recipes)
      })
    )

  }




}
