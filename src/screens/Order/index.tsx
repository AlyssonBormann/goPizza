import React, { useState } from "react";
import { Platform } from "react-native";

import { ButtonBack } from "@components/ButtonBack";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { RadioButton } from "@components/RadioButton";
import { PIZZA_TYPES } from "../../utils";

import {
  Container,
  ContentScroll,
  Header,
  Photo,
  Sizes,
  Form,
  Title,
  Label,
  FormRow,
  InputGroup,
  Price,
} from "./styles";

export function Order() {
  const [size, setSize] = useState("");
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ContentScroll>
        <Header>
          <ButtonBack style={{ marginBottom: 108 }} onPress={() => {}} />
        </Header>
        <Photo source={{ uri: "https://github.com/AlyssonBormann.png" }} />
        <Form>
          <Title>Nome da pizza</Title>
          <Label>Selecione um tamanho</Label>

          <Sizes>
            {PIZZA_TYPES.PIZZA_TYPES.map((item) => (
              <RadioButton
                key={item.id}
                title={item.name}
                selected={size === item.id}
                onPress={() => setSize(item.id)}
              />
            ))}
          </Sizes>
          <FormRow>
            <InputGroup>
              <Label>Número da mesa</Label>
              <Input keyboardType="numeric" />
            </InputGroup>
            <InputGroup>
              <Label>Quantidade</Label>
              <Input keyboardType="numeric" />
            </InputGroup>
          </FormRow>
          <Price>Valor de R$ 00,00</Price>
          <Button title="Confirmar Pedido" />
        </Form>
      </ContentScroll>
    </Container>
  );
}
