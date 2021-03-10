import React, { useState } from "react";
import { Content, Label } from "./styles";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { Alert, StatusBar, TextInput } from "react-native";
import colors from "../../styles/colors";
import Button from "../../components/Button";

function Login({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleEmail = (e) => {
    setLogin({ ...login, email: e });
  };
  const handlePassword = (e) => {
    setLogin({ ...login, password: e });
  };
  const handleSubmit = () => {
    try {
      const response = api.post("/sessions", login);

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };
  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça login</TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-mail</Label>
        <TextInput
          autoCompleteType="email"
          placeholder="Digite o seu e-mail"
          onChange={handleEmail}
        />
        <Label>Senha</Label>
        <TextInput
          autoCompleteType="password"
          placeholderTextColor={colors.lightTransparent}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          placeholderTextColor={colors.lightTransparent}
          onChange={handlePassword}
        />
        {login.email !== "" && login.password !== "" && (
          <Button
            handlePress={handleSubmit}
            text="Entrar"
            disabled={true}
            style={{ width: "96%" }}
          />
        )}
      </Content>
    </Container>
  );
}
export default Login;
