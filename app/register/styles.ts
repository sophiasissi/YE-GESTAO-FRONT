import { Button } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
  background-color: #fff;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-bottom: 32px;
`;

export const StyledTextInput = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 12px;
  padding-horizontal: 8px;
  border-radius: 4px;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 12px;
`;