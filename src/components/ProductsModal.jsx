import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStock from "../service/useStock";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";

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

export default function ProductModal({
  setOpen,
  open,
  info,
  setInfo,
  initialState,
}) {
  const {categories, brands}=useSelector(state=>state.stock)
  const { name,categoryId,brandId} = info;
  const { postStock } = useStock();
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
console.log(info)
  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("products", info);
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
            <FormControl fullWidth>
              <InputLabel id="categoryId" >Category</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                value={categoryId || ""}
                label="Category"
                name="categoryId"
                onChange={handleChange}
              >
                {categories.map((item)=>(
                <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                ))}
                
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brandId" >Brand</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                value={brandId || ""}
                label="Brand"
                name="brandId"
                onChange={handleChange}
              >
                {brands.map((item)=>(
                <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                ))}
                
              </Select>
            </FormControl>
            <TextField
              label="Product name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={name}
              onChange={handleChange}
            ></TextField>

          
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{ background: "green" }}
              >
                Add Product
              </Button>
          
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
