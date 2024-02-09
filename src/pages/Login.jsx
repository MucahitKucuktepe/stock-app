import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import stockImage from "../assets/Stock-App.png";
import { Container } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";

export default function Login() {
  const loginSchema = object({
    email: string()
      .email("Lütfen geçerli bir email adresi giriniz")
      .required("Email girişi Zorunludur"),
    password: string()
      .required("Şifre Zorunludur")
      .min(8, "Şifre en az 8 karakter içermelidir")
      .max(16, "Şifre en fazla 16 karakter içermelidir")
      .matches(/\d+/, "Şifre en bir rakam içermelidir")
      .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir")
      .matches(/[A-Z]/, "Şifre en az bir küçük harf içermelidir")
      .matches(/[@$!%*?&]/, "Şifre en az bir özel karakter içermelidr"),
  });

  return (
    <Container>
      <Grid
        container
        sx={{
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
    
        }}
      >
        <Grid item xs={12} sm={10} md={6} lg={6} sx={{ order: 1 }}>
          <Grid
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} mb={3}>
              <Typography variant="h3" color="secondary" align="center">
                STOCK APP
              </Typography>
            </Grid>
            <Grid item xs={12} mb={3}>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
            </Grid>
            <Grid item sx={{ width: "90%",}}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, action) => {
                  console.log(values);
                }}
              >
              {()=>(
                <Form>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      flexDirection: "column",
                  
                    
                    }}
                  >
                    <TextField
                      margin="normal"
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, backgroundColor: "blue" }}
                    >
                      Sign In
                    </Button>
                  </Box>
                </Form>
              )}
               
              </Formik>
            </Grid>

            <Grid
              container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={6} lg={6}>
          <Container>
            <img
              src={stockImage}
              alt="img"
              style={{ width: "100%", borderRadius: "20%" }}
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
