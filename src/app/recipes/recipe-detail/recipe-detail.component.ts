import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeCompEl: Recipe

  recipeCompEl: Recipe
  recipeId: number

  constructor(
    private shoppingList: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) =>{
          this.recipeCompEl = this.recipeService.getRecipeForId(+params['id']);
          this.recipeId = +params['id']
          console.log(this.recipeService.getRecipeForId(+params['id']));
        }
      )
  }

  onAddRecipe(){
    for (let recipeCompElElement of this.recipeCompEl.ingredients) {
      const nameIngredient = recipeCompElElement.name
      const amountIngredient = recipeCompElElement.amount
      const recipeElementIngredient = new Ingredient(nameIngredient, amountIngredient)
      console.log(recipeElementIngredient);
      this.shoppingList.onIngredientAdded(recipeElementIngredient)
    }
  }

  onDeleteRecipe(){
    this.recipeService.deleteService(this.recipeId)
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
