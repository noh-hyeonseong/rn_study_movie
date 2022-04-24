import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { ZAMONG_COLOR, GRAY_COLOR } from "../colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  console.log(isDark);
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? "black" : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? "black" : "white",
        },
        tabBarActiveTintColor: isDark ? ZAMONG_COLOR : ZAMONG_COLOR,
        tabBarInactiveTintColor: isDark ? GRAY_COLOR : GRAY_COLOR,
        headerStyle: {
          backgroundColor: isDark ? "black" : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : GRAY_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "film" : "film-outline"}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="tv" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
