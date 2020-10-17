import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeChanges = new Subject<Recipe[]>();
    
    private recipes: Recipe[] = [new Recipe('Pizza',
    'Proper',
    'https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg',
    [new Ingredients('Brum',1),
    new Ingredients('Djath',10)
    ]),
    new Recipe('PIZZAAAAAA',
    'e mir',
    'https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg',
    [new Ingredients('Brum',1),
    new Ingredients('Djath',10)
    ])];
  
   getRecipes(){
       return this.recipes.slice();
   }

   getRecipe(id: number){
       return this.recipes[id];
   }

   addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
   }

   updateRecipe(id: number, recipe: Recipe){
    this.recipes[id]=recipe;
    this.recipeChanges.next(this.recipes.slice());
   }

   deleteRecipe(id: number){
    this.recipes.splice(id,1);
    this.recipeChanges.next(this.recipes.slice());
   }

}