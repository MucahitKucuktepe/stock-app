import * as React from "react";
import { Button, Typography } from "@mui/material";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import ProductsModal from "../components/ProductsModal";
import ProductTable from "../components/ProductTable";
import { useState } from "react";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";

export default function Products() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const initialState = {
    categoryId: "",
    brandId: "",
    name: "",
  };
  const [info, setInfo] = useState({ initialState });
  const { products, loading, error } = useSelector((state) => state.stock);
  //? Modal states finish

  const { getStocks } = useStock();
  React.useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
  }, []);
  return (
    <div>
      <Typography variant="h4" style={{ color: "red" }} py={"10px"} mb={3}>
        Products
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
        NEW PRODUCTS
      </Button>
      <ProductsModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
        initialState={initialState}
      />
      {error && <ErrorMsg />}
      {!products.length && !error && <NoDataMsg />}
      {loading && <TableSkeleton />}
      {!error && <ProductTable />}
    </div>
  );
}
