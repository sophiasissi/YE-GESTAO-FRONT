import { useRouter } from "expo-router";
import { View, CardContainer, Logo, TxtCard } from "./styles";
import Logon from "../../../assets/images/logo_escuro.png";
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function Home() {
  const router = useRouter();

  const cards = [
    { title: 'Pressão', route: 'pressure' },
    { title: 'Glicemia', route: 'glucose' },
    { title: 'Peso e Altura', route: 'weight-height' },
    { title: 'IMC', route: 'bmi' },
  ];

  return (    
    <View>
      <Logo source={Logon} />
      <CardContainer>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => router.push(`/form/${card.route}`)}
          >
            <TxtCard>{card.title}</TxtCard>
          </TouchableOpacity>
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