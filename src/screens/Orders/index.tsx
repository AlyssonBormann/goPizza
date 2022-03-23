import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { OrderCard } from "@components/OrderCard";
import { Separator } from "@components/ItemSeparetor/styles";

import { Container, Header, Title } from "./styles";

export function Orders() {
  return (
    <Container>
      <Header>
        <Title>Pedidos Feitos</Title>
      </Header>
      <FlatList
        ItemSeparatorComponent={() => <Separator />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
        data={["1", "2", "3", "4"]}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => <OrderCard index={index} />}
      />
    </Container>
  );
}
