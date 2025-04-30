import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const product = () => {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Text>product</Text>
      </View>
    </SafeAreaView>
  );
};

export default product;
