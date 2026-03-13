import { useLocation } from "react-router-dom";

import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

function Quote() {

  const location = useLocation();
  const vehicle = location.state?.vehicle;

  const handleWhatsApp = () => {

    const message = `Hola, quiero cotizar el vehículo: ${vehicle?.name} - Precio: ${vehicle?.price}`;

    const url = `https://wa.me/3126101826?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (

    <Container sx={{ mt: 6, mb: 10 }}>

      <Typography variant="h4" gutterBottom align="center">
        Solicitar Cotización
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 5 }}
      >
        Completa el formulario y nuestro equipo se pondrá en contacto contigo.
      </Typography>

      <Grid container spacing={5}>

        {/* VEHÍCULO SELECCIONADO */}

        {vehicle && (

          <Grid size={{xs:12,md:5}}>

            <Card>

              <CardMedia
                component="img"
                height="250"
                image={vehicle.image}
              />

              <CardContent>

                <Typography variant="h6">
                  {vehicle.name}
                </Typography>

                <Typography color="text.secondary">
                  {vehicle.specs}
                </Typography>

                <Typography variant="h6" sx={{ mt: 1 }}>
                  {vehicle.price}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        )}

        {/* FORMULARIO */}

        <Grid item xs={12} md={vehicle ? 7 : 12}>

          <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3
              }}
            >

              <TextField
                label="Nombre completo"
                required
                fullWidth
              />

              <TextField
                label="Correo electrónico"
                type="email"
                required
                fullWidth
              />

              <TextField
                label="Teléfono"
                required
                fullWidth
              />

              <TextField
                label="Vehículo seleccionado"
                value={vehicle ? vehicle.name : ""}
                fullWidth
                disabled
              />

              <TextField
                label="Mensaje"
                multiline
                rows={4}
                placeholder="Quiero más información sobre este vehículo..."
                fullWidth
              />

              <Button
                variant="contained"
                size="large"
                onClick={handleWhatsApp}
              >
                Enviar cotización por WhatsApp
              </Button>

            </Box>

          </Paper>

        </Grid>

      </Grid>

    </Container>

  );
}

export default Quote;