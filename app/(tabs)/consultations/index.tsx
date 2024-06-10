import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './styles';
import { FontAwesome6 } from "@expo/vector-icons";
import { ConsultationCard } from '@/components/ConsultationCard';
import { useFocusEffect, useRouter } from 'expo-router';
import { ConsultationRepositoryHttp } from '@/api/repository/consultationRepositoryHttp';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthRepositoryHttp } from '@/api/repository/authRepositoryHttp';

export default function Consultations() {
    const router = useRouter();
    const consultationRepository = new ConsultationRepositoryHttp();
    const authRepository = new AuthRepositoryHttp();

    const [data, setData] = useState([]);

    async function verify() {
        await authRepository.verify().then((res) => {
          if(res.status != 200) {
            AsyncStorage.removeItem('token')
            router.navigate("")
          }
        })
      }