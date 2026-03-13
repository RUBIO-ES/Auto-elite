import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          backgroundImage: "url(/img/R15v4.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Overlay oscuro */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />

        {/* Contenido */}
        <Box sx={{ position: "relative", maxWidth: 800 }}>
          <Typography variant="h2" fontWeight="bold">
            Bienvenido a AutoElite Motors
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            Especialistas en motocicletas y vehículos de alto rendimiento.
          </Typography>

          <Typography sx={{ mb: 4 }}>
            Descubre modelos exclusivos como la Yamaha R15 V4, con tecnología de
            punta, diseño aerodinámico y el mejor desempeño en su categoría.
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/vehicles"
            sx={{ mr: 2 }}
          >
            Ver Catálogo
          </Button>

          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/Quote"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": { borderColor: "#1976d2", color: "#1976d2" },
            }}
          >
            Cotizar Ahora
          </Button>
        </Box>
      </Box>

      {/* SECCIÓN POR QUÉ ELEGIRNOS */}
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          ¿Por qué elegir AutoElite?
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 6 }}>
          Nos enfocamos en brindar calidad, confianza y la mejor experiencia en
          compra de vehículos.
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {[
            {
              title: "🚀 Alto Rendimiento",
              text: "Vehículos con tecnología avanzada, motores potentes y eficiencia superior.",
            },
            {
              title: "💳 Financiamiento Flexible",
              text: "Planes de pago adaptados a tu presupuesto con aprobación rápida.",
            },
            {
              title: "🛡 Garantía y Respaldo",
              text: "Todos nuestros vehículos cuentan con garantía certificada y soporte técnico.",
            },
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  width: "100%",
                  maxWidth: 350,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 2 }}>{item.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SECCIÓN DEL REPOSITORIO */}
      <Container sx={{ mb: 10 }}>
        <Paper
          elevation={4}
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: 4,
            background: "linear-gradient(135deg, #e8e4fc, #bbf1f8)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#143aad" }}>
            Explora el código del proyecto
          </Typography>

          <Typography sx={{ mt: 2, mb: 4 }} color="text.secondary">
            Este proyecto fue desarrollado con <strong>React</strong> y <strong>Material UI</strong> 
            como una plataforma moderna para un <strong>concesionario de autos y motos</strong>. 
            Puedes explorar el código, aprender de su estructura o usarlo como 
            base para tus propios proyectos de ventas y cotizaciones de vehículos.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="https://github.com/RUBIO-ES/Auto-elite"
            target="_blank"
            sx={{
              bgcolor: "#281bd8",
              borderRadius: 3,
              "&:hover": { bgcolor: "#149bad" },
            }}
          >
            Ver repositorio en Github
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default Home;