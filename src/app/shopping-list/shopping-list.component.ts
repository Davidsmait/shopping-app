import { Component, OnInit } from '@angular/core';

import  { Ingredient } from "../shared/ingredient.module";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.obtainIngredients()
    this.shoppingListService.ingredientAdded
      .subscribe
        ((ingredientsEmitter:Ingredient[]) =>{
          this.ingredients = ingredientsEmitter
        }
      )
  }

}
