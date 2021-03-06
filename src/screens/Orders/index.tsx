import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";

import { useAuth } from "@hooks/auth";

import { OrderCard, OrderProps } from "@components/OrderCard";
import { Separator } from "@components/ItemSeparetor/styles";

import { COLLECTION } from "../../constants";

import { Container, Header, Title } from "./styles";

export function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<OrderProps[]>([]);

  function handlePizzaDelivery(id: string) {
    Alert.alert("Pedido", "Confirma que a pizza foi entregue?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          firestore().collection(COLLECTION.ORDERS).doc(id).update({
            status: "Entregue",
          });
        },
      },
    ]);
  }

  useEffect(() => {
    const subscribe = firestore()
      .collection(COLLECTION.ORDERS)
      .where("waiter_id", "==", user?.id)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as OrderProps[];

        setOrders(data);
      });
    //função de limpeza, propria documentacao recomenda
    return () => subscribe();
  }, []);

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
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <OrderCard
            index={index}
            data={item}
            disabled={item.status === "Entregue"}
            onPress={() => handlePizzaDelivery(item.id)}
          />
        )}
      />
    </Container>
  );
}
