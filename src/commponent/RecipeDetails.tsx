import { Box, Typography, Card, CardMedia, Button, Modal } from '@mui/material';
import { useState } from 'react';
import {Recipe } from './store/RecipeStore';

const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultImage = '../src/commponent/assets/images/default.jpg';
  if (!recipe.image) {
    recipe.image = defaultImage;
  }
  return (
    
    <Box>
      {/* <div>{myRecipe.id}</div> */}
      {/* {console.log(myRecipe)}  */}
      <Typography variant="h2">{recipe.title}</Typography>
      <Card>
        <CardMedia
          component="img"
          image={recipe.image}
          alt={recipe.title}
          onClick={handleImageClick}
        />
        <Box p={2}>
          <Typography variant="body1">{recipe.description}</Typography>
          <Typography variant="body1">Ingredients: {recipe.ingredients.toString()}</Typography>
          <Typography variant="body1">Instructions: {recipe.instructions}</Typography>
        </Box>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default RecipeDetails;