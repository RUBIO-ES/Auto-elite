import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  InputBase
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {

  const [open, setOpen] = useState(false);

  // Usa los datos reales de contexto:
  const { favorites } = useFavorites();
  const { cart } = useCart();

  const menuItems = [
    { text: "Inicio", icon: <HomeIcon />, path: "/" },
    { text: "Vehículos", icon: <StoreIcon />, path: "/vehicles" },
    { text: "Ofertas", icon: <LocalOfferIcon />, path: "/offers" },
    { text: "Compras", icon: <ShoppingBagIcon />, path: "/orders" },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#0e0609" }}>

      <Toolbar>

        {/* MENU HAMBURGUESA */}
        <IconButton
          color="inherit"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        >
          <MenuIcon />
        </IconButton>

        {/* LOGO */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <TwoWheelerIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            AutoElite
          </Typography>
        </Box>

        {/* BUSCADOR */}
        <Paper
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            px: 2,
            py: 0.5,
            width: 250,
            borderRadius: 5
          }}
        >
          <SearchIcon sx={{ mr: 1, color: "gray" }} />
          <InputBase placeholder="Buscar motos..." sx={{ flex: 1 }} />
        </Paper>

        {/* MENU ESCRITORIO */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 3, gap: 1 }}>

          <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon />}>
            Inicio
          </Button>

          <Button component={Link} to="/vehicles" color="inherit" startIcon={<StoreIcon />}>
            Vehículos
          </Button>

          <Button component={Link} to="/offers" color="inherit" startIcon={<LocalOfferIcon />}>
            Ofertas
          </Button>

        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* FAVORITOS */}
        <IconButton component={Link} to="/favorites" color="inherit">
          <Badge badgeContent={favorites.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>

        {/* CARRITO */}
        <IconButton component={Link} to="/orders" color="inherit">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

      </Toolbar>

      {/* DRAWER MOVIL */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250 }}>

          <Typography
            variant="h6"
            sx={{
              p: 2,
              fontWeight: "bold",
              borderBottom: "1px solid #eee"
            }}
          >
            AutoElite
          </Typography>

          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>

                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >

                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />

                </ListItemButton>

              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>

    </AppBar>
  );
}

export default Navbar;