import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";
const Brands = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [info, setInfo] = useState({
    name: "",
    image: "",
  });
  const { brands } = useSelector((state) => state.stock);
  const { getStocks } = useStock();
  useEffect(() => {
    getStocks("brands");
  }, []);
  console.log(brands);
  return (
    <div>
      <Typography variant="h4" style={{ color: "aqua" }} py={"10px"} mb={3}>
        Brands
      </Typography>
      <Button
        sx={{
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(200, 255, 100, 0.2)",
            color: "red",
            "& .MuiSvgIcon-root": {
              color: "red",
            },
          },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        NEW BRAND
      </Button>
      <BrandModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
        {brands.map((brand) => (
          <BrandCard
            key={brand._id}
            brand={brand}
            setInfo={setInfo}
            handleOpen={handleOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
