import React from "react";

import { Image, Placeholde, PlaceholdeTitle } from "./styles";

type Props = {
  uri: string | null;
};

export function Photo({ uri }: Props) {
  if (uri) {
    return <Image source={{ uri }} />;
  }

  return (
    <Placeholde>
      <PlaceholdeTitle>Nenhuma foto{"\n"}carregada</PlaceholdeTitle>
    </Placeholde>
  );
}
