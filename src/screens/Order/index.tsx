import React from "react";
import { Platform } from "react-native";

import { ButtonBack } from "@components/ButtonBack";
import { RadioButton } from "@components/RadioButton";

import { Container, Header, Photo, Sizes } from "./styles";

export function Order() {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack style={{ marginBottom: 108 }} onPress={() => {}} />
      </Header>
      <Photo source={{ uri: "https://github.com/AlyssonBormann.png" }} />

      <Sizes>
        <RadioButton title="Pequeno" selected={false} />
      </Sizes>
    </Container>
  );
}
