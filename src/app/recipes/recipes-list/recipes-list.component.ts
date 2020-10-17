import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];
  sub1: Subscription;
  
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {}
   

  ngOnInit(): void {
    this.onReload();
    this.sub1 = this.recipeService.recipeChanges
    .subscribe((recipes: Recipe[])=>{
      this.recipes=recipes;
      this.onReload();
    })
  }
  onReload(){
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(["new"],{relativeTo:this.route});
  }
}
