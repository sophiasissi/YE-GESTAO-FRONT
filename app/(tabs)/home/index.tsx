import { useRouter } from "expo-router";
import { Container, Logo, Button, ButtonText } from "./styles";
import Logon from "../../../assets/images/logo_escuro.png";
import * as React from 'react';


export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Logo source={Logon} />
      
      
    </Container>
  );
}