import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type Props = {
  focused: boolean;
  image?: ImageSourcePropType;
  text: string;
  icon?: React.ReactNode;
};

const TabIcon = ({ focused, image, text, icon }: Props) => {
  return (
    <View
      className={`flex flex-col items-center justify-center h-full gap-y-2`}
    >
      {image && <Image source={image} className="w-6 h-6 aspect-square" />}
      {icon && icon}
      <Text
        className={`text-sm text-secondary w-fit px-2 py-0.5 ${
          focused ? "bg-tertiary rounded-full" : ""
        }`}
      >
        {text}
      </Text>
    </View>
  );
};

export default TabIcon;
