import { Modal, Text, TextInput, View } from "react-native";
import { Button, Container, TextButton, ViewText } from "./styles";
import { Form } from "../addConsultation/styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import MaskInput from "react-native-mask-input";
import { MedicationRepositoryHttp } from "@/api/repository/medicationRepositoryHttp";
import Toast from "react-native-toast-message";

export default function AddMedication() {
    const router = useRouter();
    const medicationRepository = new MedicationRepositoryHttp();

    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [hour, setHour] = useState('');
    const [period, setPeriod] = useState('');
    const [interval, setInterval] = useState('');

    async function saveMedication(){
        if(name === '' || hour === '' || period === '' || interval === ''){
            return;
        }

        const data = {
            'name': name,
            'hour': hour,
            'period': period,
            'interval': interval
        }

        medicationRepository.createMedication(data).then((response) => {
            // console.log(response);
            if(response.status === 201){
                openModal();
            } else {
                alert('Erro ao salvar')
            }
        }).catch((error: any) => {
            console.log(error);
        });
    }
    function openModal(){
        setModal(true);
        setTimeout(() => {
            setModal(false);
            router.navigate('medication');
        }, 1500);
    }

    return (
        <Container>
            <Form>
                <ViewText>
                    <TextInput onChangeText={setName} style={{fontSize:20, textAlign: 'center'}} placeholder="Nome do Medicamento..."/>
                </ViewText>
                <ViewText>
                    {/* <TextInput onChangeText={} style={{fontSize:20}} maxLength={4} keyboardType="numeric" placeholder="Horário..."/> */}
                    <MaskInput
                        style={{fontSize:20}}
                        value={hour}
                        placeholder="Horário..."
                        onChangeText={(masked, unmasked) => {
                            setHour(masked);
                        }}
                        mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                    />
                </ViewText>
                <ViewText>
                    <TextInput onChangeText={setPeriod} style={{fontSize:20}} maxLength={2} keyboardType="numeric" placeholder="Período..."/>
                </ViewText>
                <ViewText>
                    <TextInput onChangeText={setInterval} style={{fontSize:20}} maxLength={2} keyboardType="numeric" placeholder="Intervalo..."/>
                </ViewText>
            </Form>

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Button onPress={()=> router.navigate('medication')}>
                    <TextButton>Cancelar</TextButton>
                </Button>
                <Button onPress={()=> saveMedication()}>
                    <TextButton>Salvar</TextButton>
                </Button>
            </View>

            {modal ?
                <Modal transparent>
                    <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{alignItems: 'center', backgroundColor: '#dfdfdf', padding:12, borderWidth:2, borderRadius:8, width:'80%'}}>
                            <FontAwesome6 name="check" size={64} color="green" />
                            <Text style={{fontSize: 20}}>Salvo com Sucesso</Text>
                        </View>
                    </View>
                </Modal>
            :
                <></>
            }
        </Container>
    )
}