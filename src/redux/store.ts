import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Reducer/CategorySlice";
import ProductSlice from "./Reducer/ProductSlice";
import CartSlice from "./Reducer/CartSlice";
import OrderSlice from "./Reducer/OrderSlice";
import ChuyenMucSlice from "./Reducer/ChuyenMuc";

const store = configureStore({
    reducer: {
        Category: CategorySlice,
        Product: ProductSlice,
        Cart: CartSlice,
        Order: OrderSlice,
        ChuyenMuc:ChuyenMucSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;