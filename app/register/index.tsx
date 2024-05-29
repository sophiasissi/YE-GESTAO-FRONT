import React, { useState } from 'react';
import { router } from 'expo-router';
import { Button, ButtonText, Container, Logo, SecondContainer, SecondText, StyledTextInput } from '../register/styles';
import { Text, TouchableOpacity } from "react-native";
import Logon from '../../assets/images/logo_principal.png'

export default function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSignup = () => {
    console.log('Sign up:', formData);
  };

  const fields = [
    { placeholder: 'Nome', key: 'name', secureTextEntry: false, keyboardType: 'default' },
    { placeholder: 'Email', key: 'email', secureTextEntry: false, keyboardType: 'email-address' },
    { placeholder: 'Senha', key: 'password', secureTextEntry: true, keyboardType: 'default' },
    { placeholder: 'Confirmar Senha', key: 'confirmPassword', secureTextEntry: true, keyboardType: 'default' },
    { placeholder: 'Telefone', key: 'phone', secureTextEntry: false, keyboardType: 'phone-pad' },
  ];

  return (
    <Container>
      <Logo source={Logon} />
      {fields.map((field) => (
        <StyledTextInput
          key={field.key}
          placeholder={field.placeholder}
          value={formData[field.key as keyof typeof formData]}
          onChangeText={(text) => handleChange(field.key, text)}
          secureTextEntry={field.secureTextEntry}
        />
      ))}
      <Button onPress={() => router.navigate("")}>
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



