import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent} from "./head/head.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import {FormsModule} from "@angular/forms";
import {BasicHighlightDirective} from "./shared-directives/basic-highlight.directive";
import { BetterHighlightDirective } from './shared-directives/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import {DropdowDirective} from "./shared/dropdow.directive";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeadComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShopingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdowDirective,
    RecipeStartComponent,
    PageNotFoundComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
