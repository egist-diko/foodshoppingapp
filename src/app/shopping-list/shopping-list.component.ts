import {  Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  ingredients: Ingredients[];
  editPressed=false;
  sub1: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.reloadData();
    this.sub1=this.shoppingListService.ingredientListner
    .subscribe((ingredients: Ingredients[])=>{
      this.ingredients=ingredients;
      this.reloadData();
    }
    )
  }

  onClicked(ingredient: Ingredients){
    this.shoppingListService.clickIngredient(ingredient);
  }

  onEdit(){
    if(this.editPressed===false){
      this.editPressed=true;
    }else{
      this.editPressed=false;
    }
  }
  reloadData(){
    this.ingredients=this.shoppingListService.getIngredients();
  }

  onSaved(index: number,form: NgForm){
      const value = form.value;
      const newIngredient = new Ingredients(value.name,value.amount);
      this.shoppingListService.updateIngredient(index,newIngredient);
      this.editPressed=false;  
  }

  ngOnDestroy(){
    this.sub1.unsubscribe();
    
  }

}
