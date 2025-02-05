import { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { RecipeForm, recipeStore } from './store/RecipeStore';
import { UserContext } from './UserReducer';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { array, string } from 'yup';


const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    // ingredients: yup.array().of(yup.string()).min(1,'Ingredients are required'),//.required,
    // ingredients:yup.array( yup.string().required(),).min(1),
    ingredients: array()
        .of(string().required('Ingredient is required'))
        .required('Ingredients list is required')
        .min(1, 'At least one ingredient is required'),
    instructions: yup.string().required('Instructions are required'),
    image: yup.string().url('Invalid image URL').nullable(),
});


const AddRecipeForm = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm<RecipeForm>({
        resolver: yupResolver(schema),
    });


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [state] = useContext(UserContext);

    const onSubmit = (data: RecipeForm) => {
        console.log(data);
        setIsSubmitting(true);
        recipeStore.addRecipe(data, state.id);
        setIsSubmitting(false);
    };
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [currentIngredient, setCurrentIngredient] = useState('');

    const handleAddIngredient = () => {
        setIngredients([...ingredients, currentIngredient]);
        console.log("currentIngredient", currentIngredient);
        console.log("ingredients", ingredients);
        setCurrentIngredient('');
    };
    const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentIngredient(e.target.value);
    };

    function remove(index: number) {
        setIngredients([...ingredients.slice(0,index)]);
    }

    function append(arg0: {}) {
        throw new Error('Function not implemented.');
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Add Recipe
            </Typography>

            <TextField
                label="Title"
                variant="outlined"
                {...register('title')}
                error={!!errors.title}
                helperText={errors.title?.message}
                sx={{ marginBottom: '16px' }}
            />
            <TextField
                label="Description"
                variant="outlined"
                {...register('description')}
                error={!!errors.description}
                helperText={errors.description?.message}
                sx={{ marginBottom: '16px' }}
            />
            {/* <Box sx={{ marginBottom: '16px',position: 'relative' }}>
                <TextField
                    label={`Ingredient`}
                    variant="outlined"
                    value={currentIngredient}
                    onChange={handleIngredientChange}
                    
                    error={!!errors.ingredients}
                    helperText={errors.ingredients?.message}
                    sx={{ marginBottom: '8px' }}
                />
               <div></div>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleAddIngredient}
                    title='Add Ingredient'
                    // sx={{ position: 'absolute', bottom: -10, right: 0 ,width:"100%"}}
                ><AddIcon/></Button>
            </Box> */}
            <Box>
                {ingredients.map((item, index) => (
                    <div key={index} style={{position:"relative"}}>
                        <TextField
                         label="Ingredient"
                         variant="outlined"
                         error={!!errors.ingredients}
                         helperText={errors.ingredients?.message}
                         sx={{ marginBottom: '16px' }}
                        {...register(`ingredients.${index}`)}
                        />
                        <Button type="button" onClick={() => remove(index)} sx={{position:"absolute",top:0, right:0,margin:"auto"}}><DeleteIcon /></Button>
                    </div>
                ))}
                <Button type="button" onClick={() => append({})}><AddIcon/>Add </Button>
                {errors.ingredients && <span>{errors.ingredients.message}</span>}
            </Box>

            <TextField
                label="Instructions"
                variant="outlined"
                {...register('instructions')}
                error={!!errors.instructions}
                helperText={errors.instructions?.message}
                sx={{ marginBottom: '16px' }}
                multiline
            />
            <TextField
                label="Image URL"
                variant="outlined"
                {...register('image')}
                error={!!errors.image}
                helperText={errors.image?.message}
                sx={{ marginBottom: '16px' }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                disabled={isSubmitting}
                sx={{ marginTop: '16px' }}
            >
                Add Recipe
            </Button>
        </Box>
    );
};

export default AddRecipeForm;

