import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#fff] items-center justify-center">
      <Text className="text-3xl font-pblack">Hey</Text>

      <StatusBar style="auto" />
      <Link href="/profile" className="bg-blue-400 px-2 py-1 rounded-md mt-10">
        Go auehaueh Profile
      </Link>
    </View>
  );
}
