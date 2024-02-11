import * as React from "react";
import { Button, Typography } from "@mui/material";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import ProductsModal from "../components/ProductsModal";
import ProductTable from "../components/ProductTable";
import { useState } from "react";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import PurchasesTable from "../components/PurchasesTable";
import PurchasesModal from "../components/PurchasesModal";

export default function Purchases() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const initialState = {
    firmId: "",
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  };
  const [info, setInfo] = useState({ initialState });
  const { purchases, loading, error } = useSelector((state) => state.stock);
  //? Modal states finish
  console.log(purchases);
  const { getStocks, getPromiseStock } = useStock();
  React.useEffect(() => {
    // getStocks("products");
    // getStocks("categories");
    // getStocks("brands");
    // getStocks("purchases");
    // getStocks("firms");
    getPromiseStock()
  }, []);
  return (
    <div>
      <Typography variant="h4" style={{ color: "red" }} py={"10px"} mb={3}>
        Purchases
      </Typography>
      <Button
        sx={{
          color: "white",
          marginBottom: "2rem",
          "&:hover": {
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            color: "red",
            "& .MuiSvgIcon-root": {
              color: "red",
            },
          },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        NEW PURCHASES
      </Button>
      <PurchasesModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
        initialState={initialState}
      
      />
      {error && <ErrorMsg />}
      {!purchases.length && !error && <NoDataMsg />}
      {loading && <TableSkeleton />}
      {!error && (
        <PurchasesTable
          open={open}
          setOpen={setOpen}
          info={info}
          setInfo={setInfo}
          initialState={initialState}
          handleOpen={handleOpen}
        />
      )}
    </div>
  );
}
