import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data.product;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = fetchData();
    data.then((res) => {
      setProducts(res);
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 px-2">
      <View>
        <Text>Products</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
