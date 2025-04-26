import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Text>IT's a home page</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
