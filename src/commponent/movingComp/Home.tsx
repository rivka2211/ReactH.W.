import React from "react";
import {
    Box, Typography, Button, Container,
    Grid2 as Grid,
    Card, CardMedia
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
                {["Blintzes1.webp", "bred.webp","pasta.webp","chips.webp","veg.webp"].map((img, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardMedia component="img" height="200" image={`/images/${img}`} alt="מתכון טעים" />
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
