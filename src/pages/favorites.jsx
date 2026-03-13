import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useFavorites } from "../features/context/FavoritesContext";

function Favorites() {

  const { favorites } = useFavorites();

  return (
    <Container sx={{ mt: 6 }}>

      <Typography variant="h4" gutterBottom>
        ❤️ Vehículos Favoritos
      </Typography>

      {favorites.length === 0 ? (
        <Typography>No tienes favoritos aún.</Typography>
      ) : (

        <Grid container spacing={4}>

          {favorites.map((vehicle, index) => (

            <Grid item xs={12} sm={6} md={4} key={index}>

              <Card>

                <CardMedia
                  component="img"
                  height="200"
                  image={vehicle.image}
                  alt={vehicle.name}
                />

                <CardContent>

                  <Typography variant="h6">
                    {vehicle.name}
                  </Typography>

                  <Typography color="text.secondary">
                    {vehicle.specs}
                  </Typography>

                  <Typography variant="h6">
                    {vehicle.price}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      )}

    </Container>
  );
}

export default Favorites;