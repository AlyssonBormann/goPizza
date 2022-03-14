import React from "react";
import { KeyboardAvoidingView, Keyboard, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import brandImg from "@assets/brand.png";
import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from "./styles";

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Content>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input placeholder="Senha" type="secondary" secureTextEntry />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
