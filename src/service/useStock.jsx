import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart, getPromiseSuccess, getStockSuccess } from "../features/stockSlice";
const useStock = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //! Aşağıdaki fonksiyonu parametsik hale getirerek her yerde yeniden fonksiyon yazmaktan kurtuldum
  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     // const { data } = await axios.post(
  //     //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
  //     //   userInfo
  //     // );
  //     const { data } = await axiosWithToken("/firms/");
  //     dispatch(getFirmsSuccess(data.data));

  //     console.log(data.data);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Firma Listeleme İşlemi başarisiz");
  //     console.log(error);
  //   }
  // };  //!
  const getStocks = async (url) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      toastSuccessNotify(`${url} bilgileri listelendi`);
      dispatch(getStockSuccess({ apiData, url }));

      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgileri çekilemedi`);
      console.log(error);
    }
  };

  const getPromiseStock = async () => {
    dispatch(fetchStart());
    try {
      const [products, purchases, brands, firms] = await Promise.all([
        axiosWithToken("/products/"),
        axiosWithToken("/purchases/"),
        axiosWithToken("/brands/"),
        axiosWithToken("/firms/"),
      ]);
      dispatch(
        getPromiseSuccess([
          products?.data,
          purchases?.data,
          brands?.data,
          firms?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const { data } = await axiosWithToken.post(`/${url}/`, info);

      // getFirms();
      toastSuccessNotify("Yeni Firma Eklendi");
      getStocks(url);
      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yeni Firma Ekleme İşlemi başarisiz");
      console.log(error);
    }
  };
  const putStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const { data } = await axiosWithToken.put(
        `/${url}/${info._id || info.id}`,
        info
      );
      toastSuccessNotify("Firma Güncellendi");
      // getFirms();
      getStocks(url);
      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma Güncelleme İşlemi başarisiz");
      console.log(error);
    }
  };

  const deleteStock = async (url = "firms", id) => {
    console.log(id);
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      await axiosWithToken.delete(`/${url}/${id}/`);
      toastSuccessNotify("Silme işlemi başarili");
      // getFirms();
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma Listeleme İşlemi başarisiz");
      console.log(error);
    }
  };

  return {
    // getFirms,
    getStocks,
    postStock,
    deleteStock,
    putStock,
    getPromiseStock,
  };
};

export default useStock;
