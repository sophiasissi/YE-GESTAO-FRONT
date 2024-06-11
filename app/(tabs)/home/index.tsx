import { Link, useRouter } from "expo-router";
import { View, CardContainer, Logo, TxtCard } from "./styles";
import Logon from "../../../assets/images/logo_escuro.png";
import { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AuthRepositoryHttp } from "@/api/repository/authRepositoryHttp";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Home() {
  const router = useRouter();
  const authRepository = new AuthRepositoryHttp();

  async function verify() {
    await authRepository.verify().then((res) => {
      if(res.status != 200) {
        AsyncStorage.removeItem('token')
        router.navigate("")
      }
    })
  }

  const cards = [
    { title: 'Pressão', route: 'pressure' },
    { title: 'Glicemia', route: 'glucose' },
    { title: 'IMC', route: 'imc' },
  ];