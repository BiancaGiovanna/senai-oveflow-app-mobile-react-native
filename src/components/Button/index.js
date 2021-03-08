import React from "react";
import { Container } from "./styles";

function Button({ text, handlePress, ...rest }) {
  return (
    <Container onPress={handlePress} {...rest}>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;
