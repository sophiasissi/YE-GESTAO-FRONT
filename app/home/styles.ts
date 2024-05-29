import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const Logo = styled.Image`
  width: 70%;
  height: 25%;
  bottom: 30%;
`
export const Button = styled.TouchableOpacity`
    border-radius: 8px;
    background-color: #000;
    padding: 10px;
    width: 80%;
    align-self: center;
    margin-top: 25px;
`
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`