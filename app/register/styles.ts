import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #739489;
`

export const Logo = styled.Image`
  width: 80%;
  height: 25%;
  bottom: 5%;
`;

export const StyledTextInput = styled.TextInput`
  width: 90%;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0 8px;
  margin: 10px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 8px;
    background-color: #fff;
    padding: 10px;
    width: 80%;
    align-self: center;
    margin-top: 25px;
`

export const ButtonText = styled.Text`
  color: #003430;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`

export const SecondContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`

export const SecondText = styled.Text`
  color: #fff;
  font-weight: bold;
`