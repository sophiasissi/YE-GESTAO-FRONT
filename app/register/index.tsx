import React, { useState } from 'react';
import { router } from 'expo-router';
import { Container  } from '../styles';
import { Logo, StyledButton, StyledTextInput } from './styles';
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
      <StyledButton title="Cadastrar" onPress={handleSignup} />
      <StyledButton title="Já tem uma conta? Faça login" onPress={() => router.navigate('Login')} />
    </Container>
  );
};



