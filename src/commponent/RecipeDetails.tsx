import { Box, Typography, Card, CardMedia, Button, Modal } from '@mui/material';
import { useState } from 'react';
import { Recipe } from './store/RecipeStore';
import { CloseOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';


const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  const [open, setOpen] = useState(false);
  const style = {
    backgroundImage: `url(${recipe.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '80vh', // or any other height you want 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
const titleStyle={
  variant: "h5",
   fontWeight: "bold" ,
   color: "primary"
}

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const defaultImage = 'https://photos.google.com/search/_tra_/photo/AF1QipM1Mv5D7JWhxKYcQ3vAqwyQG5tkq0-1SFoEpha8';
  if (!recipe.image) {
    recipe.image = defaultImage;
  }


  return (

    <Box sx={style}  >
      <Typography variant="h4" sx={titleStyle}>{recipe.title}</Typography>
      <Card>
        <Box p={2} onClick={handleImageClick}>
          <Typography variant="body1">{recipe.description}</Typography>
          {recipe.ingredients.length > 0 && <Typography variant="body1" sx={titleStyle}>Ingredients:</Typography>}
          {recipe.ingredients.map((ingredient, index) => (
            <Typography key={index} variant="body2">
              {ingredient}
            </Typography>
          ))}
          <Typography variant="body1" sx={titleStyle}>Instructions:</Typography>
           {recipe.instructions.split("\n").map((instruction, index) => (
            <Typography key={index} variant="body2">
              {instruction}
            </Typography>
          ))}
        </Box>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Button onClick={handleClose} startIcon={<CloseIcon />} sx={{ position: 'absolute', top: 0, right: 0 ,color:"black"}}></Button>
          <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default RecipeDetails;