import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-top: 4px;
    justify-content: space-between;
`;

export const Form = styled.View``;

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
`;

export const ViewTextInput = styled.View`
    height: 100%;
    background-color: #dfdfdf;
    padding: 20px;
    width: 50%;
`;

export const ViewInput = styled.View`
    background-color: #739489;
    padding: 16px;
    width: 50%;
`;

export const Button = styled.TouchableOpacity`
    background-color: #739489;
    padding: 20px;
    width: 50%;
`;

export const TextButton = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
`;