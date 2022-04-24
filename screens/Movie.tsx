import { CurrentRenderContext } from "@react-navigation/native";
import {
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
const Movie: React.FC<NativeStackScreenProps<any, "Movie">> = ({
  navigation: { navigate },
}) => (
  <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
    <Text>Movie</Text>
  </Btn>
);

export default Movie;
