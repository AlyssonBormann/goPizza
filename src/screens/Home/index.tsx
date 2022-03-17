import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { useTheme } from "styled-components";

import happyEmoji from "@assets/happy.png";
import { Search } from "@components/Search";
import { ProductCar } from "@components/ProductCar";

import {
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
  MenuHeader,
  MenuItemsNumber,
  Title,
} from "./styles";

export function Home() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Olá, Admin meu truta!</GreetingText>
        </Greeting>
        <TouchableOpacity>
          <MaterialIcons name="logout" color={COLORS.TITLE} sizse={24} />
        </TouchableOpacity>
      </Header>
      <Search onSearch={() => {}} onClear={() => {}} />
      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemsNumber>10 pizzas</MenuItemsNumber>
      </MenuHeader>
      <ProductCar
        data={{
          id: "1",
          name: "Pizza",
          description: "Jacarander",
          photo_url: "https://github.com/AlyssonBormann.png",
        }}
      />
      <ProductCar
        data={{
          id: "2",
          name: "Pizza",
          description: "Jacarander",
          photo_url: "https://github.com/AlyssonBormann.png",
        }}
      />
      <ProductCar
        data={{
          id: "3",
          name: "Pizza",
          description: "Jacarander",
          photo_url: "https://github.com/AlyssonBormann.png",
        }}
      />
    </Container>
  );
}
