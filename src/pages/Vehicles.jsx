import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  IconButton
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useCart } from "../features/context/CartContext";
import { useFavorites } from "../features/context/FavoritesContext";

function Vehicles() {

  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  const [addedProduct, setAddedProduct] = useState(null);

  /* =========================
     DATA VEHÍCULOS
  ========================= */

  const motos = [
    {
      name: "Yamaha R15 V4",
      specs: "155cc • Deportiva • 0 km",
      price: "$18.000.000 COP",
      image: "/img/R15g.jpg",
    },
    {
      name: "KTM Duke 200",
      specs: "200cc • Naked • 0 km",
      price: "$17.500.000 COP",
      image: "/img/duke.png",
    },
    {
      name: "Bajaj Pulsar NS 125",
      specs: "125cc • Urbana • 0 km",
      price: "$8.500.000 COP",
      image: "/img/ns125.png",
    },
  ];

  const carrosEconomicos = [
    {
      name: "Chevrolet Spark GT",
      specs: "Manual • Gasolina • 20.000 km",
      price: "$32.000.000 COP",
      image: "/img/spark.jpg",
    },
    {
      name: "Kia Picanto 2022",
      specs: "Automático • Gasolina • 15.000 km",
      price: "$45.000.000 COP",
      image: "/img/kiap.jpg",
    },
    {
      name: "Toyota Corolla 2024",
      specs: "Automático • Gasolina • 0 km",
      price: "$85.000.000 COP",
      image: "/img/toyotac.png",
    },
  ];

  const gamaMedia = [
    {
      name: "Mazda CX-5 2023",
      specs: "Automático • Híbrido • 10.000 km",
      price: "$110.000.000 COP",
      image: "/img/Mazdac.png",
    },
    {
      name: "Toyota RAV4",
      specs: "Automático • Híbrido • 5.000 km",
      price: "$125.000.000 COP",
      image: "/img/toyotar.png",
    },
  ];

  const altaGama = [
    {
      name: "BMW Serie 3",
      specs: "Automático • Turbo • 0 km",
      price: "$190.000.000 COP",
      image: "/img/bmw3.jpg",
    },
    {
      name: "Mercedes-Benz C200",
      specs: "Automático • Turbo • 0 km",
      price: "$210.000.000 COP",
      image: "/img/mercedesc200.png",
    },
    {
      name: "BMW I8",
      specs: "Híbrido • Turbo • 0 km",
      price: "$210.000.000 COP",
      image: "/img/i8.jpg",
    },
  ];

  /* =========================
     COMPONENTE SECCIÓN
  ========================= */

  const renderSection = (title, vehicles) => (
    <Box sx={{ mt: 8 }}>

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Grid container spacing={4}>

        {vehicles.map((vehicle, index) => {

          const isFavorite = favorites.some(
            (fav) => fav.name === vehicle.name
          );

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>

              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                }}
              >

                {/* FAVORITO */}
                <IconButton
                  onClick={() => toggleFavorite(vehicle)}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "white"
                  }}
                >
                  {isFavorite
                    ? <FavoriteIcon color="error" />
                    : <FavoriteBorderIcon />}
                </IconButton>

                {/* IMAGEN */}
                <CardMedia
                  component="img"
                  height="220"
                  image={vehicle.image}
                />

                {/* CONTENIDO */}
                <CardContent sx={{ flexGrow: 1 }}>

                  <Typography variant="h6">
                    {vehicle.name}
                  </Typography>

                  <Typography color="text.secondary">
                    {vehicle.specs}
                  </Typography>

                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {vehicle.price}
                  </Typography>

                  {/* BOTÓN CARRITO */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => {
                      addToCart(vehicle);
                      setAddedProduct(vehicle.name);
                    }}
                  >
                    Agregar al carrito
                  </Button>

                  {/* BOTÓN COTIZAR */}
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 1 }}
                    onClick={() =>
                      navigate("/quote", { state: { vehicle } })
                    }
                  >
                    Cotizar este vehículo
                  </Button>

                  {addedProduct === vehicle.name && (
                    <Typography
                      color="green"
                      fontSize="14px"
                      sx={{ mt: 1 }}
                    >
                      ✔ Añadido al carrito
                    </Typography>
                  )}

                </CardContent>

              </Card>

            </Grid>
          );
        })}

      </Grid>

    </Box>
  );

  /* =========================
     RENDER PRINCIPAL
  ========================= */

  return (
    <Container sx={{ mt: 6, mb: 10 }}>

      <Typography variant="h4" gutterBottom>
        Nuestro Catálogo
      </Typography>

      {renderSection("🏍️ Motos", motos)}
      {renderSection("🚗 Carros Económicos", carrosEconomicos)}
      {renderSection("🚙 SUVs y Gama Media", gamaMedia)}
      {renderSection("👑 Alta Gama", altaGama)}

    </Container>
  );
}

export default Vehicles;