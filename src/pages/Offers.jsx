import { useState, useEffect, useRef, useMemo, useReducer, createContext } from "react";
import { Container, Grid, Card, CardContent, Typography, Button, TextField } from "@mui/material";

/* CONTEXT */
const ThemeContext = createContext();

/* REDUCER */
function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    default:
      return state;
  }
}

function Offers() {

  /* useState */
  const [count, setCount] = useState(0);

  /* useEffect */
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* useRef */
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  /* useMemo */
  const [number, setNumber] = useState(1);

  const result = useMemo(() => {
    return number * 2;
  }, [number]);

  /* useContext */
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  /* useReducer */
  const [state, dispatch] = useReducer(reducer, { on: false });

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>

      <Container
        sx={{
          mt: 6,
          background: dark ? "#1e1e1e" : "#fff0f6",
          color: dark ? "white" : "black",
          minHeight: "100vh",
          p: 4
        }}
      >

        <Grid container spacing={4}>

          {/* useState */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 4,
                backgroundColor: dark ? "#2c2c2c" : "#ffffff",
                color: dark ? "white" : "black"
              }}
            >
              <CardContent>

                <Typography variant="h6">UseState</Typography>

                <Typography variant="h3">{count}</Typography>

                <Button
                  onClick={() => setCount(count - 1)}
                  sx={{ m: 1, bgcolor: "#6010ff", color: "white" }}
                >
                  -1
                </Button>

                <Button
                  onClick={() => setCount(count + 1)}
                  sx={{ m: 1, bgcolor: "#6010ff", color: "white" }}
                >
                  +1
                </Button>

                <Button
                  onClick={() => setCount(count + 10)}
                  sx={{ m: 1, bgcolor: "#6010ff", color: "white" }}
                >
                  +10
                </Button>

                <Button onClick={() => setCount(0)}>
                  RESET
                </Button>

              </CardContent>
            </Card>
          </Grid>

          {/* useEffect */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 4,
                backgroundColor: dark ? "#2c2c2c" : "#ffffff",
                color: dark ? "white" : "black"
              }}
            >
              <CardContent>

                <Typography variant="h6">UseEffect</Typography>

                <Typography variant="h2" sx={{ color: "#6010ff" }}>
                  {seconds}
                </Typography>

                <Typography>segundos</Typography>

              </CardContent>
            </Card>
          </Grid>

          {/* useRef */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 4,
                backgroundColor: dark ? "#2c2c2c" : "#ffffff",
                color: dark ? "white" : "black"
              }}
            >
              <CardContent>

                <Typography variant="h6">UseRef</Typography>

                <TextField
                  inputRef={inputRef}
                  label="Escribe algo"
                  fullWidth
                  sx={{ my: 2 }}
                />

                <Button
                  onClick={focusInput}
                  sx={{ bgcolor: "#6010ff", color: "white" }}
                >
                  VOLVER A ENFOCAR
                </Button>

              </CardContent>
            </Card>
          </Grid>

          {/* useMemo */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 4,
                backgroundColor: dark ? "#2c2c2c" : "#ffffff",
                color: dark ? "white" : "black"
              }}
            >
              <CardContent>

                <Typography variant="h6">UseMemo</Typography>

                <Typography sx={{ my: 2 }}>
                  Resultado: {result}
                </Typography>

                <Button
                  onClick={() => setNumber(number + 1)}
                  sx={{ bgcolor: "#6010ff", color: "white" }}
                >
                  CAMBIAR NÚMERO
                </Button>

              </CardContent>
            </Card>
          </Grid>

          {/* useContext */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 4,
                backgroundColor: dark ? "#2c2c2c" : "#ffffff",
                color: dark ? "white" : "black"
              }}
            >
              <CardContent>

                <Typography variant="h6">useContext</Typography>

                <Typography sx={{ my: 2 }}>
                  {dark ? "Modo Oscuro " : "Modo Claro "}
                </Typography>

                <Button
                  onClick={toggleTheme}
                  sx={{ bgcolor: "#6010ff", color: "white" }}
                >
                  CAMBIAR TEMA
                </Button>

              </CardContent>
            </Card>
          </Grid>

          {/* useReducer */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 4,
                backgroundColor: dark ? "#2c2c2c" : "#ffffff",
                color: dark ? "white" : "black"
              }}
            >
              <CardContent>

                <Typography variant="h6">UseReducer</Typography>

                <Typography sx={{ my: 2 }}>
                  Estado: {state.on ? "Encendido" : "Apagado"}
                </Typography>

                <Button
                  onClick={() => dispatch({ type: "toggle" })}
                  sx={{ bgcolor: "#6010ff", color: "white" }}
                >
                  CAMBIAR
                </Button>

              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Container>

    </ThemeContext.Provider>
  );
}

export default Offers;