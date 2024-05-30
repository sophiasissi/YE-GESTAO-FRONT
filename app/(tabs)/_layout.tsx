import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#003732' }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="exams/index"
        options={{
          title: 'Exames',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clipboard-edit-outline" size={24} color={color} />,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#003732'
          }
        }}
      />
      <Tabs.Screen
        name="consultations/index"
        options={{
          title: 'Consultas',
          tabBarIcon: ({ color }) => <FontAwesome5 name="notes-medical" size={24} color={color} />,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#003732'
          }
        }}
      />
      <Tabs.Screen
        name="medication/index"
        options={{
          title: 'Medicação',
          tabBarIcon: ({ color }) => <MaterialIcons name="medication" size={30} color={color} />,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#003732'
          }
        }}
      />
    </Tabs>
  );
}