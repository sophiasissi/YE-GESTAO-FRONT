import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Text>Hello, world!</Text>
      <TouchableOpacity onPress={() => router.navigate("login")}>
        <Text>Go to login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("register")}>
        <Text>Go to registerx</Text>
      </TouchableOpacity>
    </View>
  );
}
