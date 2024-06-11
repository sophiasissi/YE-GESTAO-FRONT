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

  useEffect(() => {
    verify()
  }, [])

  return (    
    <View>
      <Logo source={Logon} />
      <CardContainer>
        {cards.map((card, index) => (
          <Link
            href={`multiscreen/${card.route}`}
            key={index}
            style={styles.card}
          >
            <TxtCard>{card.title}</TxtCard>
          </Link>
  ))}
      </CardContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#739489',
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 350,
    height: 60,
  },
});