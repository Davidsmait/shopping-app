import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core'
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

export class HeadComponent {
  collapsed = true

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {}

  onSaveData(){
    this.dataStorageService.storeRecipes()
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }
}
