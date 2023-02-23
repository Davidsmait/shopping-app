import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') formRef: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((itemIndex: number)=> {
        this.editedItemIndex = itemIndex
        this.editMode = true;
        this.editedItem = this.shoppingListService.obtainIngredient(itemIndex);
        this.formRef.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        })

      })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmit(formRef: NgForm) {
    const value = formRef.value;
    const ingredientAdded = new Ingredient(value.name, value.amount);

    if (this.editMode){
      this.shoppingListService.onUpdateIngredient(this.editedItemIndex,ingredientAdded)
    }else{
      this.shoppingListService.onIngredientAdded(ingredientAdded);
    }
    this.editMode = false;
    formRef.resetForm()
  }

  onClear(){
    this.formRef.resetForm();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.onDeleteIngredient(this.editedItemIndex);
    this.formRef.resetForm();
    this.editMode = false;
  }
}
