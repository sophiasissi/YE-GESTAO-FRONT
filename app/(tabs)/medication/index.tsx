import { FlatList, TouchableOpacity, View } from 'react-native';
import { Container } from './styles';
import { FontAwesome6 } from "@expo/vector-icons";
import { MedicationCard } from '@/components/MedicationCard';
import { useFocusEffect, useRouter } from 'expo-router';
import { MedicationRepositoryHttp } from '@/api/repository/medicationRepositoryHttp';
import { useEffect, useState } from 'react';

export default function Medication() {
    const router = useRouter();
    const medicationRepository = new MedicationRepositoryHttp();

    const [jsonList, setJsonList] = useState([]);

    async function getMedications() {
        await medicationRepository.getMedications().then((response) => {
            // console.log(response);
            setJsonList(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    useFocusEffect(() => {
        getMedications();
    })
    useEffect(() => {
        getMedications();
    },[])

    return (
        <Container>
            <FlatList
                data={jsonList}
                renderItem={({item}) => {
                    return (
                        <MedicationCard json={item}/>
                    );
                }}
            />
            <View style={{alignItems:'center', marginVertical: 8}}>
                <TouchableOpacity onPress={()=>router.navigate('addMedication')}>
                    <FontAwesome6 name="circle-plus" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </Container>
    );
}