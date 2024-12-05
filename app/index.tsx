import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#fff] items-center justify-center">
      <Text className="text-3xl font-pblack">Index Page</Text>

      <StatusBar style="auto" />

      <Link href="/(tabs)/home">Home</Link>
    </View>
  );
}
