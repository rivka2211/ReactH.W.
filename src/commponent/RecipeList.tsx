import {
  Button,
  Grid2 as Grid,
  Box
} from "@mui/material";
import { initionalRecipe, Recipe, recipeStore } from './store/RecipeStore';
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const RecipeList = () => {
  // const recipes = recipeStore.getRecipes();
  const [currentRecipe, setCurrentRecipe] = useState<Recipe>(initionalRecipe);

  return (<>
    <Box>
      <Grid container spacing={2}>
        {recipeStore.getRecipes().map((recipe) => (
          <Grid size={12} key={recipe.id} >
            <Button onClick={() => setCurrentRecipe(recipe)}>
              {recipe.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>

<Box>
<RecipeDetails recipe={currentRecipe} />   
</Box>
  </> );
};

export default RecipeList;