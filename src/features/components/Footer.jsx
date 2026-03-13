import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
  sx={{
    bgcolor: "#111",
    color: "white",
    textAlign: "center",
    p: 3,
    position: "relative",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 1000
  }}
>
      <Typography>
        © 2026 AutoElite Motors - Todos los derechos reservados
      </Typography>
    </Box>
  );
}

export default Footer;