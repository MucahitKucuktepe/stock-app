import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStock from "../service/useStock";

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
};

export default function BrandModal({ setOpen, open, info, setInfo }) {
  const { name, image } = info;
  const { postStock, putStock, getStocks } = useStock();
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      image: "",
    });
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("brands", info);
    } else {
      postStock("brands", info);
    }
    getStocks("brands");
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={name}
              onChange={handleChange}
            ></TextField>
            <TextField
              label="image"
              name="image"
              id="image"
              type="url"
              value={image}
              onChange={handleChange}
            ></TextField>
            {info._id ? (
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{ background: "red" }}
              >
                Edit Firm
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{ background: "green" }}
              >
                Submit
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
