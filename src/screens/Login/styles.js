import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
export const TextInputLogin = styled.TextInput`
  width: 96%;
  color: ${colors.light};
  margin-bottom: 15px;

  background-color: ${colors.darkGray};
  font-size: 20px;
  border-radius: 4px;
`;
export const Label = styled(TextDefault)`
  width: 96%;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;
