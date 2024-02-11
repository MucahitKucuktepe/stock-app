import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const icons = [
  {
    icon: <SpaceDashboardIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchases",
    icon: <ShoppingCartIcon />,
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <AttachMoneyIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products/",
  },
];

const MenuListItem = () => {
  const navigate = useNavigate();
  return (
    <List>
      {icons.map((item, index) => (
        <ListItem key={index} disablePadding onClick={() => navigate(item.url)}>
          <ListItemButton
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(80, 200, 80, 0.2)",
                color: "red",
                "& .MuiSvgIcon-root": {
                  color: "red",
                },
              },
            }}
          >
            <ListItemIcon style={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText
              // sx={{ color: "white", "&:hover": { color: "red" } }}
              primary={item.title}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItem;
