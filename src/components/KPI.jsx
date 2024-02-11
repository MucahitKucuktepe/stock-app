import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, deepOrange, deepPurple, pink } from "@mui/material/colors";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";


const KPI = () => {
  const { sales,purchases } = useSelector((state) => state.stock);
  console.log(purchases);
  const totalSales= sales.reduce((acc,item)=>(acc+item.amount),0)
  const totalPurchases= purchases.reduce((acc,item)=>(acc+item.amount),0)

  const kpiData = [
    {
      id: 1,
      title: "Sales",
      amount: `$${totalSales}`,
      icon: <MonetizationOnIcon sx={{ fontSize: "3rem" }} />,
      bgColor: deepPurple[100],
      color: deepPurple[700],
    },
    {
      id: 2,
      title: "Profit",
      amount: `$${totalSales - totalPurchases}`,
      icon: <ShoppingCartIcon sx={{ fontSize: "3rem" }} />,
      bgColor: pink[100],
      color: pink[700],
    },
    {
      id: 3,
      title: "Purchases",
      amount: `$${totalPurchases}`,
      icon: <PaymentsIcon sx={{ fontSize: "3rem" }} />,
      bgColor: amber[100],
      color: amber[700],
    },
  ];
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={"1rem"}
      direction={"row"}
    >
      {kpiData.map((item) => (
        <Paper
          key={item.id}
          elevation={10}
          sx={{
            display: "flex",
            p: 2,
            gap: 6,
            width: "300px",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: item.bgColor,
              color: item.color,
              width: "80px",
              height: "80px",
            }}
          >
            {" "}
            {item.icon}{" "}
          </Avatar>
          <Box>
            <Typography variant="button">{item.title}</Typography>
            <Typography variant="h5">{item.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPI;
