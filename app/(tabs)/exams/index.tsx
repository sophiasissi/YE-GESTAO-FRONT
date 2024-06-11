import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './styles';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Exams() {
    const router = useRouter();

    const json = [
        {
            "id": 1,
            "name": "Hemograma",
        },
        {
            "id": 2,
            "name": "Colesterol",
        },
        {
            "id": 3,
            "name": "Glicose",
        }
    ]

    return (
        <Container>
            <FlatList
                data={json}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={{borderRadius: 8, padding: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', marginBottom: 4}} onPress={()=>router.navigate('detailExam')}>
                            <Text>{item.name}</Text>
                            <FontAwesome6 name="circle-chevron-right" size={24} color="black" />
                        </TouchableOpacity>
                    );
                }}
            />
            <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 8}}>
                <TouchableOpacity onPress={()=>router.navigate('camera')}>
                    <FontAwesome6 name="camera" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </Container>
    );
}