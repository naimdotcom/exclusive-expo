import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-red-600 flex-1">
      <View className="flex-1 bg-blue-600">
        <Text className="text-3xl bg-green-600 py-6 text-white text-center ">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
      <View className="flex-[2] bg-orange-800">
        <Text className="text-3xl bg-green-600 py-6 text-white text-center ">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
    </View>
  );
}
