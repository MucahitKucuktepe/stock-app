import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import stockImage from "../assets/Stock-App.png";
import { Container } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button } from "@mui/material";
import useAuthCalls from "../service/useAuthCalls";
import RegisterForm, { RegisterSchema } from "../components/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  const { login, register } = useAuthCalls();

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
            <Grid
              item
              xs={12}
              mb={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
            </Grid>
            <Grid item sx={{ width: "90%" }}>
              <Formik
                initialValues={{
                  username: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values, actions) => {
                  register(values);
                  actions.resetForm();
                  actions.setSubmitting(false);
                  //? veriler global state e aktarılabilir
                  //? Navigasyon yapılabilir
                  //? toast yapılabilir
                }}
                component={(props) => <RegisterForm {...props} />}
              ></Formik>
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
                <Link to="/" variant="body2">
                  {"Do you have an account?"}
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
export default Register;
