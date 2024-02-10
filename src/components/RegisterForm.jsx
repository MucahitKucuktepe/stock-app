import { Box, Button, TextField } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { object, string } from "yup";

export const RegisterSchema = object({
  username: string()
    .max(20, "Kullanici adi 10 karakterden az olmalidir.")
    .required("Kullanici adi zorunludur"),
  firstName: string()
    .max(20, "İsim 20 karakterden az olmalidir.")
    .required("İsim zorunludur"),
  lastName: string()
    .max(20, "Soyisim 30 karakterden az olmalidir.")
    .required("Soyisim zorunludur"),
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

const RegisterForm = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
}) => {
  return (
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
          label="User Name"
          name="username"
          id="username"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched?.username && Boolean(errors?.username)}
          helperText={errors?.username}
        />
        <TextField
          label="First Name"
          name="firstName"
          id="firstName"
          type="text"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched?.firstName && Boolean(errors?.firstName)}
          helperText={errors?.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          id="lastName"
          type="lastName"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched?.lastName && Boolean(errors?.lastName)}
          helperText={errors?.lastName}
        />
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
          Register
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;
