import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

export class ShoppingListService{

    ingredientListner = new Subject<Ingredients[]>();

    selectedIngredients: Ingredients[] =[];
    
    private ingredients: Ingredients[] = [
        new Ingredients('Apple',5),
        new Ingredients('Orange',10)    
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index: number){
        return this.ingredients[index];
    }
    clickIngredient(ingredient: Ingredients){
        if(this.selectedIngredients.includes(ingredient)){
             let i = this.selectedIngredients.indexOf(ingredient)
             this.selectedIngredients.splice(i,1);
        }else{
             this.selectedIngredients.push(ingredient);
         }
    }
    updateIngredient(index: number , ingredient: Ingredients){
        this.ingredients[index]=ingredient;
        this.ingredientListner.next(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientListner.next(this.ingredients.slice());
    }

    deleteIngredients(){
        for(let i in this.selectedIngredients){
            if(this.ingredients.includes(this.selectedIngredients[i])){
                let j= this.ingredients.indexOf(this.selectedIngredients[i]);
                this.ingredients.splice(j,1);
            }
        }
        this.ingredientListner.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientListner.next(this.ingredients.slice());
    }


}