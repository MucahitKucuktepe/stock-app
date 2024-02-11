import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useStock from "../service/useStock";
import { useDispatch, useSelector } from "react-redux";
// import FirmModal from "../components/FirmModal";
import FirmCard from "../components/FirmCard";
import FirmModalFeatured from "../components/FirmModalFeatured";
import TableSkeleton, {
  CardSkeleton,
  ErrorMsg,
  NoDataMsg,
} from "../components/DataFetchMsg";

const Firms = () => {
  //? Modal states start
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  //? Modal states finish

  const dispatch = useDispatch();
  const { firms, error, loading } = useSelector((state) => state.stock);
  console.log(firms);
  const { getStocks } = useStock();
  useEffect(() => {
    getStocks("firms");
    getStocks("sales");
  }, []);

  return (
    <div>
      <Typography variant="h4" style={{ color: "red" }} py={"10px"} mb={3}>
        Firms
      </Typography>
      <div>
        <Button
          sx={{
            color: "white",
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
          NEW FİRM
        </Button>
        {/* <FirmModal open={open} setOpen={setOpen} /> */}
        <FirmModalFeatured
          open={open}
          setOpen={setOpen}
          info={info}
          setInfo={setInfo}
        />
      </div>

      {error && <ErrorMsg />}
      {!firms.length && !error && <NoDataMsg />}
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-around",
        }}
      >
        {loading && firms.map((item) => (<CardSkeleton key={item._id} />))}
      </div>
      {!error && (
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "space-around",
          }}
        >
          {firms.map((firm) => (
            <FirmCard
              key={firm._id}
              firm={firm}
              open={open}
              setOpen={setOpen}
              info={info}
              setInfo={setInfo}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Firms;
