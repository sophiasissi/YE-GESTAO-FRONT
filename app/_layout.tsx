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
        title: "Home"
      }} />
      <Stack.Screen name="login/index" options={{
        title: "",
        headerBackVisible: false
      }} />
      <Stack.Screen name="register/index" options={{
        title: "Register"
      }} />
    </Stack>
  );
}
