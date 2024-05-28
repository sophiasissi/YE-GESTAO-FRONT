import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button, ButtonText, Container, Input, Logo, SecondContainer, SecondText, Txt } from "./styles";
import Logon from "../assets/images/logo_principal.png";

export default function Index() {
  const router = useRouter();
  return (
    <Container>
      <Logo source={Logon} />
      <Txt>Bem vindo ao seu app de Gestão de Saúde!</Txt>
      <Input placeholder={`Insira seu email`} />
      <Input placeholder={`Insira sua senha`} />
      <Button onPress={() => router.navigate("home")}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <SecondContainer>
        <Text style={{color: '#fff'}}>Ainda não tem cadstro? </Text>
        <TouchableOpacity onPress={() => router.navigate("register")}>
          <SecondText>Faça seu cadastro!</SecondText>
        </TouchableOpacity>
      </SecondContainer>
    </Container>
  );
}
