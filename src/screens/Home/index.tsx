import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import firestore from "@react-native-firebase/firestore";

import { useTheme } from "styled-components";

import happyEmoji from "@assets/happy.png";
import { Search } from "@components/Search";
import { ProductCar, ProductProps } from "@components/ProductCar";

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
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");

  function fetchPizzas(value: string) {
    const formattedValue = value.toLowerCase().trim();

    firestore()
      .collection("pizzas")
      .orderBy("name_insensitive")
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setPizzas(data);
      })
      .catch(() =>
        Alert.alert("Consulta", "Não foi possível realizar a consulta.")
      );
  }

  function handleSearch() {
    fetchPizzas(search);
  }

  function handleSearchClear() {
    setSearch("");
    fetchPizzas("");
  }

  useEffect(() => {
    fetchPizzas("");
  }, []);
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
      <Search
        onSearch={handleSearch}
        onClear={handleSearchClear}
        onChangeText={setSearch}
        value={search}
      />
      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemsNumber>
          {pizzas.length} pizza{pizzas.length > 1 && "s"}
        </MenuItemsNumber>
      </MenuHeader>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCar data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24,
        }}
      />
    </Container>
  );
}
