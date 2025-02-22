import { Tabs } from "expo-router";
import  Ioniconsfrom from "@expo/vector-icons/Ionicons"; 


export default function TabLayout() {
  return (
    
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#FFd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#25292e',
      }
    }}>

      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ioniconsfrom name={focused ? 'home-sharp' : 'home-outline'} size={24} color={color} />
          ), 
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{ 
          title: 'About', 
          tabBarIcon: ({ color, focused }) => (
            <Ioniconsfrom name={focused ? 'information-circle-sharp' : 'information-circle-outline'} size={24} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
