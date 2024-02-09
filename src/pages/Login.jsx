import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import stockImage from "../assets/Stock-App.png";
import { Container } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button } from "@mui/material";

const Login = () => {
  const submit = (e) => {
    console.log(e);
  };
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
            <Grid item sx={{ width: "90%" }}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                  submit(values);
                  actions.resetForm();
                  actions.setSubmitting(false);
                }}
              >
                {({values, errors, touched, handleChange, handleBlur}) => (
                  <Form>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <TextField
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched?.email && Boolean(errors?.email)}
                        helperText={errors?.email}
                      />
                      <TextField
                        label="password"
                        name="password"
                        id="password"
                        type="password"
                        variant="outlined"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched?.password && Boolean(errors?.password)}
                        helperText={errors?.password}
                      />

                      <Button
                        type="submit"
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
};
export default Login;
