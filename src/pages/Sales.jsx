import * as React from "react";
import { Button, Typography } from "@mui/material";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import { useState } from "react";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import SalesTable from "../components/SalesTable";
import SalesModal from "../components/SalesModal";

export default function Sales() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const initialState = {
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  };
  const [info, setInfo] = useState({ initialState });
  const { purchases, loading, error } = useSelector((state) => state.stock);
  //? Modal states finish
  console.log(purchases);
  const { getStocks } = useStock();
  React.useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
    getStocks("purchases");
    getStocks("firms");
    getStocks("sales");
  }, []);
  return (
    <div>
      <Typography variant="h4" style={{ color: "red" }} py={"10px"} mb={3}>
       Sales
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
        NEW SALE
      </Button>
      <SalesModal
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
        <SalesTable
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
