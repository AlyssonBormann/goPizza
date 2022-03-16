import React, { useState } from "react";
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { ButtonBack } from "@components/ButtonBack";
import { Button } from "@components/Button";
import { Photo } from "@components/Photo";
import { InputPrice } from "@components/InputPrice";
import { Input } from "@components/Input";

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
  Form,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharacteres,
} from "./styles";

export function Product() {
  const [image, setImage] = useState("");

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonBack />
          <Title>Cadastrar</Title>
          <TouchableOpacity>
            <DeleteLabel>Deletar</DeleteLabel>
          </TouchableOpacity>
        </Header>
        <Upload>
          <Photo uri={image} />
          <PickImageButton
            title="Carregar"
            type="secondary"
            onPress={handlePickerImage}
          />
        </Upload>
        <Form>
          <InputGroup>
            <Label>Nome</Label>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacteres>0 de 60 caracteres</MaxCharacteres>
            </InputGroupHeader>
            <Input multiline={true} maxLength={60} style={{ height: 80 }} />
          </InputGroup>

          <InputGroup>
            <Label>
              <InputPrice size="P" />
              <InputPrice size="M" />
              <InputPrice size="G" />
              <InputPrice size="XGG" />
            </Label>
          </InputGroup>
          <Button title="Cadastrar pizza" />
        </Form>
      </ScrollView>
    </Container>
  );
}
