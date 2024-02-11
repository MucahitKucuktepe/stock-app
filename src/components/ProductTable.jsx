import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem,GridToolbar } from "@mui/x-data-grid";
import Products from "../pages/Products";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStock from "../service/useStock";
import { useSelector } from "react-redux";



export default function ProductTable() {
  const getRowId = (row) => row._id;
  const { deleteStock } = useStock();
  const {products}=useSelector(state=>state.stock)
  console.log(products)
  const columns = [
    { field: "_id", headerName: "#", flex: 2, headerAlign: "center" },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      headerAlign: "center",
      valueGetter: (params) => {
        return params.row.categoryId.name;
      },
      align:"center"
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      headerAlign: "center",
      valueGetter: (params) => params.row.brandId.name,
      align:"center"
    },
    
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align:"center"
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align:"center"
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("products",params.id)}
          label="Delete"
        />,
      ],
      align:"center"
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
