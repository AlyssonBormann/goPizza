import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Image,
  Name,
  Description,
  StatusContainer,
  StatusLabel,
} from "./styles";

type Props = TouchableOpacityProps & {
  index: number;
};

export function OrderCard({ index, ...rest }: Props) {
  return (
    <Container {...rest} index={index}>
      <Image source={{ uri: "https://github.com/AlyssonBormann.png" }} />
      <Name>4 Quessos</Name>
      <Description>Mesa 8 ⚫︎ Qnt: 05</Description>
      <StatusContainer status="Pronto">
        <StatusLabel status="Pronto">Pronto</StatusLabel>
      </StatusContainer>
    </Container>
  );
}
