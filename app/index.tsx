import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { Button, ButtonText, Container, Input, Logo, SecondContainer, SecondText, Txt } from "../app/styles";
import Logon from "../assets/images/logo_principal.png";
import { AuthRepositoryHttp } from "@/api/repository/authRepositoryHttp";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function Index() {
  const router = useRouter();
  const authRepository = new AuthRepositoryHttp();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function verify() {
    await authRepository.verify().then((res) => {
      if(res.status != 200) {
        AsyncStorage.removeItem('token')
        router.navigate("")
      } else {
        router.navigate("(tabs)/home")
      }
    })
  }

  async function login() {
    await authRepository.login(email, password).then((res) => {
      if(res.status != 200) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao logar!',
          text2: res.data.message
        });
        alert(res.data.message)
      }else {
        Toast.show({
          type: 'success',
          text1: 'Logado com sucesso!',
          text2: 'Seja bem vindo!'
        })
        AsyncStorage.setItem('token', res.data.token)
        // console.log(res.data.token)
        setTimeout(() => {
          router.navigate("(tabs)/home")
        }, 3000);
      }
    })

  }

  useEffect(() => {
    verify()
  }, [])

  return (
    <Container>
      <Toast />
      <Logo source={Logon} resizeMode="contain" />
      <Txt>Bem vindo ao seu app de Gestão de Saúde!</Txt>
      <Input onChangeText={setEmail} placeholder={`Insira seu email`} />
      <Input onChangeText={setPassword} placeholder={`Insira sua senha`} secureTextEntry />
      <Button onPress={() => login()}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <SecondContainer>
        <Text style={{color: '#fff'}}>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => router.navigate("register")}>
          <SecondText>Faça seu cadastro!</SecondText>
        </TouchableOpacity>
      </SecondContainer>
    </Container>
  );
}
