import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',

      }}>
      <Stack.Screen name="index" options={{
        title: "Home",
        headerShown: false
      }} />
      <Stack.Screen name="home/index" options={{
        title: "",
        headerBackVisible: false,
        headerShown: false
      }} />
      <Stack.Screen name="register/index" options={{
        title: "",
        headerShown: false
      }} />
      <Stack.Screen name="exams/index" options={{
        title: "",
        headerShown: false
      }} />
    </Stack>
  );
}
