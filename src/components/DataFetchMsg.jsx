import { Alert, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

export const ErrorMsg = () => {
  return (
    <Typography variant="h5" color={"error"}>
      Data can not be fetched
    </Typography>
  );
};
export const NoDataMsg = () => {
  return <Alert severity="error">Gösterilecek veri bulunamadi.</Alert>;
};
export const CardSkeleton=()=>{
  return(
    <Skeleton variant="rectangular" width={300} height={400} />
  )
}
const TableSkeleton = () => {
  return (
    <Stack spacing={2}>
          <Skeleton variant="rectangular" width="100%" height={100} />
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={20} />
      
   
    </Stack>
  );
};

export default TableSkeleton ;
