import { View, Text } from "react-native";
import { Container, Input, LabelLogin } from "./styles";

export default function Login() {
    return (
        <Container>
          <LabelLogin>Login</LabelLogin>
          <Input placeholder={`Insira seu email`} />
        </Container>
    );
    }