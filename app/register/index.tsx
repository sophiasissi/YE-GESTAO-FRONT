import React, { useState } from 'react';
import { router } from 'expo-router';
import { Button, ButtonText, Container, Logo, SecondContainer, SecondText, StyledTextInput } from '../register/styles';
import { Text, TouchableOpacity } from "react-native";
import Logon from '../../assets/images/logo_principal.png'
import { AuthRepositoryHttp, User } from '@/api/repository/authRepositoryHttp';
import Toast from 'react-native-toast-message';

export default function Register() {
  const authRepository = new AuthRepositoryHttp();

  const [name, setName] = useState<string>('')  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleSignup = () => {
    if(password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao cadastrar!',
        text2: 'As senhas não são iguais!'
      });
      return;
    }

    const json: User = {
      name: name,
      email: email,
      password: password,
      phone: phone
    }
    console.log(json);
    authRepository.cadastro(json).then((res) => {
      if(res.status != 201) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao cadastrar!',
          text2: res.data.message
        });
        alert(res.data.message)
      }else {
        Toast.show({
          type: 'success',
          text1: 'Cadastrado com sucesso!'
        })
        setTimeout(() => {
          router.navigate("")
        }, 3000);
      }
    })
  };

  return (
    <Container>
      <Toast />
      <Logo source={Logon} />
      <StyledTextInput placeholder='Nome' onChangeText={setName} />
      <StyledTextInput placeholder='Email' onChangeText={setEmail} />
      <StyledTextInput placeholder='Telefone' onChangeText={setPhone} keyboardType='phone-pad' maxLength={11}/>
      <StyledTextInput placeholder='Senha' onChangeText={setPassword} secureTextEntry />
      <StyledTextInput placeholder='Confirmar Senha' onChangeText={setConfirmPassword} secureTextEntry />
      <Button onPress={() => handleSignup()}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <SecondContainer>
        <Text style={{color: '#fff'}}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => router.navigate("")}>
          <SecondText>Entrar</SecondText>
        </TouchableOpacity>
      </SecondContainer>
    </Container>
  );
};



