import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const signup = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>signup</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default signup;
