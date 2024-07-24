import React, { useEffect } from "react";
import { Text,View } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { IProductState } from "@redux/reducer/fetchProductReducer";
import { fetchProductsAction } from "@redux/action/fetchProductAction";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {products} = useSelector<RootState, IProductState>((state) => state.fetchProductSliceReducer)
    const fetchProduct = async () => {
        await dispatch(fetchProductsAction())
    }
    useEffect(() => {
        fetchProduct()
    },[])
    return(
        <View style={styles.container}>
            <Text>{products?.users[0]?.firstName}</Text>
        </View>
    )
}

export default Home