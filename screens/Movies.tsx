import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import { makeImgPath } from "../utils";
import { BlurView } from "expo-blur";

const API_KEY = "9e2efa914fccdc0508bfd19d06894505";
const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;
const BgImg = styled.Image`
  width: 100%;
  height: 100%;
`;
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const Title = styled.Text``;
const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
      )
    ).json();
    setNowPlaying(results);
    setLoading(false);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <Container>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
      >
        {nowPlaying.map((movie) => (
          <View key={movie.id}>
            <BgImg
              //   style={StyleSheet.absoluteFill}
              source={{ uri: makeImgPath(movie.backdrop_path) }}
            />
            <BlurView intensity={100} style={StyleSheet.absoluteFill}>
              <Title>{movie.original_title}</Title>
            </BlurView>
          </View>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
