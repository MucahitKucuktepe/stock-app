import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStock from "../service/useStock";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

export default function SalesModal({
  setOpen,
  open,
  info,
  setInfo,
  initialState,
}) {
  const { brands, firms, products } = useSelector((state) => state.stock);
  const { brandId, productId, quantity, price } = info;
  console.log(Boolean(info.brandId));
  const { postStock, putStock } = useStock();
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.amount) {
      putStock("sales", info);
    } else {
      postStock("sales", info);
    }
    setInfo(initialState)
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
              <InputLabel id="brandId">Brand</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                value={brandId?._id || brandId ||""}
                label="Brand"
                name="brandId"
                onChange={handleChange}
              >
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="productId">Product</InputLabel>
              <Select
                labelId="productId"
                id="productId"
                value={productId?._id || productId ||""}
                label="Brand"
                name="productId"
                onChange={handleChange}
              >
                {products.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Quantity*"
              name="quantity"
              id="quantity"
              type="number"
              variant="outlined"
              value={quantity || ""}
              onChange={handleChange}
            ></TextField>
            <TextField
              label="Price*"
              name="price"
              id="price"
              type="number"
              variant="outlined"
              value={price ||""}
              onChange={handleChange}
            ></TextField>
            {info.amount ? (
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{ background: "red" }}
              >
                Edit Sales
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{ background: "green" }}
              >
                Add Sales
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
