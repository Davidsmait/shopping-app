import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddInput() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    const ingredientAdded = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.onIngredientAdded(ingredientAdded);

  }
}
