import { Grid } from "@mui/material";
import { AreaChart, Card, Title } from "@tremor/react";
import { useSelector } from "react-redux";

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  console.log(sales);
  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr"),
    amount: item.amount,
  }));
  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr"),
    price: item.amount,
  }));

  return (
    <Grid container  mt={3} flexWrap={"wrap"} direction={"row"} spacing={2}>
      <Grid item xs={12} md={6}  >
        <Card>
          <Title>Total Sales (USD)</Title>
          <AreaChart
            className="h-72 mt-4"
            data={salesData}
            index="date"
            categories={["amount"]}
            colors={["indigo"]}
            valueFormatter={valueFormatter}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Title>Total Purchases (USD)</Title>
          <AreaChart
            className="h-72 mt-4"
            data={purchasesData}
            index="date"
            categories={["price"]}
            colors={["cyan"]}
            valueFormatter={valueFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Charts;
