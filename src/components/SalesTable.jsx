import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Products from "../pages/Products";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
export default function SalesTable({ info, setInfo, handleOpen }) {
  const getRowId = (row) => row._id;
  const { deleteStock } = useStock();
  const { sales } = useSelector((state) => state.stock);
  console.log(sales);
  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
      headerAlign: "center",
      valueGetter: (params) => {
        return ( new Date((params.row.createdAt))).toLocaleDateString();
      },
      align: "center",
    },
   
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      headerAlign: "center",
      valueGetter: (params) => params.row.brandId?.name,
      align: "center",
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1,
      headerAlign: "center",
      valueGetter: (params) => params.row.productId?.name,
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<ModeEditIcon />}
          onClick={() => {
            handleOpen();
            setInfo(params?.row);
          }}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => {
            deleteStock("sales", params.id);
          }}
          label="Delete"
        />,
      ],
      align: "center",
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={sales}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
