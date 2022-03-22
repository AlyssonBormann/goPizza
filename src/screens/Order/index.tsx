import React, { useState } from "react";
import { Platform } from "react-native";

import { ButtonBack } from "@components/ButtonBack";
import { RadioButton } from "@components/RadioButton";
import { PIZZA_TYPES } from "../../utils";

import { Container, Header, Photo, Sizes } from "./styles";

export function Order() {
  const [size, setSize] = useState("");
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack style={{ marginBottom: 108 }} onPress={() => {}} />
      </Header>
      <Photo source={{ uri: "https://github.com/AlyssonBormann.png" }} />

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
    </Container>
  );
}
