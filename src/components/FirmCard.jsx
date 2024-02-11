import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStock from "../service/useStock";
import { btnStyle } from "../style/globalStyles";


const FirmCard = ({ firm, setInfo, handleOpen }) => {
  const { deleteStock } = useStock();
  const { name, address, image, phone, _id } = firm;
  return (
    <Card
      key={_id}
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
        // boxShadow:"10px 20px 40px rgba(150, 0, 100, 0.6)'"
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: "contain" }}
        image={image}
        title={name}
      />

      <Typography variant="body2" color="text.secondary">
        {phone}
      </Typography>

      <CardActions sx={{ display: "flex", gap: 4 }}>
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStock("firms", _id)}
        />
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            handleOpen()
            setInfo(firm)
          }}
        />
      </CardActions>
    </Card>
  );
};

export default FirmCard;
