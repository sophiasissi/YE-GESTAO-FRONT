import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#003732',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        statusBarStyle: 'dark',
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
      <Stack.Screen name="addConsultation/index" options={{ 
        title: "Adicionar Consulta",
      }} />
      <Stack.Screen name="detailConsultation/[id]" options={{ 
        title: "Consulta",
      }} />
      <Stack.Screen name="addMedication/index" options={{ 
        title: "Adicionar Medicamento",
      }} />
      <Stack.Screen name="detailMedication/[id]" options={{ 
        title: "Medicamento",
      }} />
      <Stack.Screen name="detailExam/index" options={{ 
        title: "Exame",
      }} />
      <Stack.Screen name="multiscreen/[id]" options={{ 
        title: "",
      }} />
      <Stack.Screen name="(tabs)" options={{ 
        headerShown: false 
      }} />
      <Stack.Screen name="camera/index" options={{
        title: "",
      }} />

    </Stack>
  );
}
