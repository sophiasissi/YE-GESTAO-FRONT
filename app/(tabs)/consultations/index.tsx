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

    async function getConsultations() {
        const response = await consultationRepository.getConsultations();
        // console.log(response.data);
        setData(response.data);
    }

    const jsonList = [
        {
            "id": 1,
            "name": "Clinico Geral",
        },
        {
            "id": 2,
            "name": "Cardiologista",
        },
        {
            "id": 3,
            "name": "Dermatologista",
        },
        {
            "id": 4,
            "name": "Ortopedista",
        },
        {
            "id": 5,
            "name": "Oftalmologista",
        },
        {
            "id": 6,
            "name": "Otorrinolaringologista",
        },
    ]

    useFocusEffect(() => {
        verify();
        getConsultations();
    })
    useEffect(() => {
        verify();
        getConsultations();
    }, [])

    return (
        <Container>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (
                        <ConsultationCard json={item}/>
                    );
                }}
            />
            <View style={{alignItems:'center', marginVertical: 8}}>
                <TouchableOpacity onPress={()=>router.navigate('addConsultation')}>
                    <FontAwesome6 name="circle-plus" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </Container>
    );
}