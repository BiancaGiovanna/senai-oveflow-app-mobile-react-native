import React, { useState, useEffect } from "react";
import { Container, ToolBar, TextToolBar } from "./styles";
import { StatusBar, FlatList } from "react-native";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../services/api";
function Home() {
  StatusBar.setBackgroundColor(colors.primary);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [totalQuestion, setTotalQuestions] = useState(0);
  const [page, setPage] = useState(1);

  const loadQuestions = async (reload) => {
    // se ja estiver buscando não busca de novo
    if (isLoadingFeed) return;
    //se tiver no fim não busca de novo
    if (totalQuestion > 0 && totalQuestion == questions.length) return;
    setIsLoadingFeed(true);
    const response = await api.get("/feed", {
      params: { page },
    });

    setPage(page + 1);

    setTotalQuestions(response.headers["x-total-count"]);
    setQuestions([...questions, ...response.data]);
    setIsLoadingFeed(false);
  };

  useEffect(() => {
    loadQuestions();
  }, []);
  return (
    <Container>
      <ToolBar>
        <TextToolBar>SENAI OVERFLOW</TextToolBar>
      </ToolBar>
      <FlatList>
        data={questions}
        style={{ width: "100%" }}
        keyExtractor={(question) => String(question.id)}
        renderItem=
        {({ item: question }) => <CardQuestion question={question} />}
      </FlatList>
    </Container>
  );
}
export default Home;
