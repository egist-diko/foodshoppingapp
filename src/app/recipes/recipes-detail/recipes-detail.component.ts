import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() theRecipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((param: Params)=>{
      this.id=+param['id'];
      this.theRecipe=this.recipeService.getRecipe(this.id);
    })
  }

  toShoppingList(){
    // for(let ingredient of this.theRecipe.ingredients){
    //   this.shoppingListService.addIngredient(ingredient);
    // }

    this.shoppingListService.addIngredients(this.theRecipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["../"],{relativeTo:this.route});
  }

  onEditRecipe(){
    this.router.navigate(["edit"],{relativeTo:this.route})
  }



}
