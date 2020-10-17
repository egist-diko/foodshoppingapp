import { Ingredients } from '../shared/ingredients.model';

export class Recipe {
    public name : string;
    public desc : string;
    public imageURL : string;
    public ingredients : Ingredients[];

    constructor(name : string , desc : string , imageURL : string , ingredients : Ingredients[]){
        this.name = name;
        this.desc = desc;
        this.imageURL = imageURL;
        this.ingredients = ingredients;
    }
}