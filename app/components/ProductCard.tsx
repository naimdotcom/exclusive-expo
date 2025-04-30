import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  return (
    <TouchableOpacity className="bg-white rounded-xl m-2 p-2 w-[48%] shadow-sm">
      <Image
        source={{ uri: product.images[0] }}
        className="w-full h-32 rounded-md"
        resizeMode="contain"
      />
      <Text
        className="mt-2 text-base font-semibold text-black"
        numberOfLines={1}
      >
        {product.name}
      </Text>
      {/* <Text className="mb-1 text-xs text-gray-500">{product.description}</Text> */}
      <Text className="text-sm font-bold text-black">${product.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
