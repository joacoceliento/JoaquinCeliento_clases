import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Usuarios from '../screens/Usuarios';
import NuevoPost from '../screens/NuevoPost';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Nuevo Post"
        component={NuevoPost}
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="plus" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Usuarios"
        component={Usuarios}
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="users" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeMenu;
