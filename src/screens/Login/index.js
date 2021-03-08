import React from "react";
import { Content, Label } from "./styles";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { StatusBar, TextInput, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import Button from "../../components/Button";

function Login() {
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça login</TextToolBar>
        <Content>
          <Label>E-mail</Label>
          <TextInput
            autoCompleteType="email"
            placeholder="Digite o seu e-mail"
          />
          <Label>Senha</Label>
          <TextInput
            autoCompleteType="password"
            placeholderTextColor={colors.lightTransparent}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            placeholderTextColor={colors.lightTransparent}
          />
          <Button text="Entrar" />
        </Content>
      </ToolBar>
    </Container>
  );
}
export default Login;
