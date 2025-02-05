import axios from "axios";
import { makeAutoObservable } from "mobx";

export type Recipe = {
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    instructions: string,
    authorId: number,
    image: string|null,
}
 export type RecipeForm = Omit<Recipe, 'id' | 'authorId'>;
export const initionalRecipe: Recipe = {
    id: 0,
    title: 'my recipe',
    description: 'my description',
    ingredients: ["all","of","my","ingredients"],
    instructions: 'my instructions',
    image: '',
    authorId: -1
}
class RecipeStore {
    recipes: Recipe[] = [];

    constructor() {
        makeAutoObservable(this)
    }
    async addRecipe(recipe: RecipeForm, id: number) {
        try {
            const res = await axios.post('http://localhost:3000/api/recipe/' + id + '', recipe);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
        
        // this.recipes.push(recipe);
    }

    getRecipes() {
        try {
            axios.get('http://localhost:3000/api/recipes').then(res => {
                this.recipes = res.data;
            });
        } catch (error) {
            console.error(error);
        }
        return this.recipes
    }

    updateRecipe(recipe: Recipe, id: number) {
        if (recipe.authorId === id) {
            const index = this.recipes.findIndex(r => r.id === recipe.id);
            if (index !== -1) {
                this.recipes[index] = recipe;
            }
        }
    }

}

export const recipeStore = new RecipeStore();