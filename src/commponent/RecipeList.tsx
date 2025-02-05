import {
  Button,
  Grid2 as Grid,
  Box
} from "@mui/material";
import { initionalRecipe, Recipe, recipeStore } from './store/RecipeStore';
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Typography from '@mui/material/Typography';

const RecipeList = () => {
  // const recipes = recipeStore.getRecipes();
  const [currentRecipe, setCurrentRecipe] = useState<Recipe>(initionalRecipe);

  return (<>
    <Box>
      <Typography variant="h3" fontWeight="bold" color="primary" sx={{margin:"20px"}}>
        🌍 עולם המתכונים 🍽️
      </Typography>
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
  </>);
};

export default RecipeList;