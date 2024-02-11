import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import authReducer from "../features/authSlice";
import stockSlice from "../features/stockSlice";
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storage from 'redux-persist/lib/storage/session'
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock:stockSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store)
export default store;
