import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{

  @ViewChild('f') form : NgForm;

  constructor(private shoppingListService: ShoppingListService) { }


  onAdded(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredients(value.name,value.amount);
    this.shoppingListService.addIngredient(newIngredient);
    this.form.reset();
  }
  onDeleted(){
    this.shoppingListService.deleteIngredients();
  }
  onCleared(){
    this.form.reset();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(){
   
  }

}
