import {
    Box, Typography, Button, Container,
    Card, CardMedia,
    Grid2 as Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg">
            {/* כותרת */}
            <Box textAlign="center" my={5}>
                <Typography variant="h2" fontWeight="bold" color="primary">
                    🌍 עולם המתכונים 🍽️
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    מצאי את המתכון המושלם לכל ארוחה!
                </Typography>
            </Box>

            {/* גריד תמונות */}
            <Grid container spacing={3} justifyContent="center">
                {["Blintzes1", "bred", "pasta", "chips", "chicken","cake"].map((img, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}} key={index}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardMedia component="img" height="200" image={`src/assets/images/${img}.jpg`} alt={img.split(".")[0]} />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* כפתור ניווט */}
            <Box textAlign="center" mt={5}>
                <Button variant="contained" color="secondary" size="large" onClick={() => navigate("/recipes")}>
                    גלו מתכונים חדשים
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
