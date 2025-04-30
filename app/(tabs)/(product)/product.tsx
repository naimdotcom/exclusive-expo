import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProductStore } from "@/store/ProductStore";
import { axiosInstance } from "@/utils/axiosInstance";
import ProductCard from "@/app/components/ProductCard";

const product = () => {
  const fetchProduct = useProductStore((state) => state.fetchProduct);
  const products = useProductStore((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get("/product");
      console.log("products", res.data?.data);
      fetchProduct(res.data?.data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{
            padding: 10,
            paddingBottom: 80,
          }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default product;
