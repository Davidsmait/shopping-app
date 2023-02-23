import {Component, OnDestroy, OnInit} from '@angular/core';

import  { Ingredient } from "../shared/ingredient.module";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[];
  ingredientAddedSubscription: Subscription

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.obtainIngredients()
    this.ingredientAddedSubscription = this.shoppingListService.ingredientAdded
      .subscribe
        ((ingredientsEmitter:Ingredient[]) =>{
          this.ingredients = ingredientsEmitter
        }
      )
  }

  ngOnDestroy() {
    this.ingredientAddedSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
    console.log(index)
  }

}
