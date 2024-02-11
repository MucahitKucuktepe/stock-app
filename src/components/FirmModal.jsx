import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField, Tooltip } from "@mui/material";
import { object, string } from "yup";
import { Form, Formik } from "formik";
import useStock from "../service/useStock";
import { getFirmsSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export default function FirmModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const { createFirm, getFirms } = useStock();

  const createFirmSchema = object({
    name: string().required("Lütfen Firma Adini Griniz!"),
    phone: string().required("Telefon girişi zorunludur"),
    address: string().required("Adres girişi zorunludur."),
    image: string().required("Photo Url giriniz"),
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            address: "",
            image: "",
          }}
          validationSchema={createFirmSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            createFirm(values);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ handleChange, values, touched, errors, handleBlur }) => (
            <Form>
              <Box sx={style}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "5px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      objectFit: "contain",
                      maxWidth: "10px",
                      textAlign: "right",
                      color:"red"
                    }}
                    onClick={handleClose}
                  >
                    <HighlightOffIcon />
                  </Button>
                </div>
                <TextField
                  label="name"
                  name="name"
                  id="name"
                  type="text"
                  variant="outlined"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={errors.name}
                />

                <TextField
                  label="phone"
                  name="phone"
                  id="phone"
                  type="text"
                  variant="outlined"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={errors.phone}
                />
                <TextField
                  label="address"
                  name="address"
                  id="address"
                  type="text"
                  variant="outlined"
                  value={values.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.address && Boolean(errors.address)}
                  helperText={errors.address}
                />

                <TextField
                  label="image"
                  name="image"
                  id="image"
                  type="url"
                  variant="outlined"
                  value={values.image}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.image && Boolean(errors.image)}
                  helperText={errors.image}
                />
                <Button type="submit" variant="contained" size="large" style={{background:"green"}}>
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
