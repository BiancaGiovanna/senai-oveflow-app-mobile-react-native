import React from "react";
import {
  Container,
  CardHeader,
  ImageProfile,
  HeaderContent,
  TextPoster,
  TextDate,
  CardBody,
  TextDescription,
  TextTitle,
  ImageQuestion,
  CardFooter,
  ContainerInputAnswer,
  InputAnswer,
  SendIcon,
  ContainerAnswer,
} from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";

function CardAnswer() {
  return (
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por Fulano</TextPoster>
          <TextDate>em 10/10/2010 às 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>Essa é a descrição da resposta</TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}
function CardQuestion({ question }) {
  console.log(question);
  return (
    <Container>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por Fulano</TextPoster>
          <TextDate>em 10/10/2010 às 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>{question.title}</TextTitle>
        <TextDescription>Descrição da questão fica aqui</TextDescription>
        <ImageQuestion source={fotoPerfil} style={{ resizeMode: "contain" }} />
      </CardBody>
      <CardFooter>
        <TextPoster>Seja o primeiro a responder</TextPoster>
        <CardAnswer />
        <CardAnswer />
        <ContainerInputAnswer>
          <InputAnswer
            placeholder="Responda essa pergunta"
            placeholderTextColor={colors.lightTransparent}
          />
          <SendIcon name="paper-plane" />
        </ContainerInputAnswer>
      </CardFooter>
    </Container>
  );
}

export default CardQuestion;
