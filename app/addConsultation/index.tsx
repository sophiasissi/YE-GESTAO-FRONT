import { useRouter } from "expo-router";
import { Modal, Text, TextInput, View } from "react-native";
import { Button, Container, Form, InputContainer, TextButton, ViewInput, ViewTextInput } from "./styles";
import { useState } from "react";
import MaskInput from 'react-native-mask-input';
import Toast from "react-native-toast-message";
import { ConsultationRepositoryHttp } from "@/api/repository/consultationRepositoryHttp";
import { FontAwesome6 } from "@expo/vector-icons";

export default function AddConsultation(){
    const router = useRouter();
    const consultationRepository = new ConsultationRepositoryHttp();

    const [expertise, setExpertise] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [modal, setModal] = useState(false);

    async function saveConsultation(){
        if(expertise === '' || date === '' || description === '' || returnDate === ''){
            return;
        }

        const dateSplit = date.split('/');
        const formatDate = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
        const returnDateSplit = returnDate.split('/');
        const formatReturnDate = `${returnDateSplit[2]}-${returnDateSplit[1]}-${returnDateSplit[0]}`;
        
        const data = {
            'expertise': expertise,
            'date': formatDate,
            'description': description,
            'returnDate': formatReturnDate
        }

        consultationRepository.createConsultation(data).then((response) => {
            if(response.status == 201){
                setModal(true);
                setTimeout(() => {
                    router.navigate('consultations');
                })
            }else {
                alert('Erro ao salvar consulta');
            }
        }).catch((error) => {
            console.log(error);
        });

    }

    return (
        <>
        <Container>
            <Form>
                <InputContainer>
                    <ViewTextInput>
                        <Text style={{textAlign:'center', fontWeight: '500'}}>Especialidade</Text>
                    </ViewTextInput>
                    <ViewInput>
                        <TextInput onChangeText={setExpertise} placeholder="" />
                    </ViewInput>
                </InputContainer>

                <InputContainer>
                    <ViewTextInput>
                        <Text style={{textAlign:'center', fontWeight: '500'}}>Data</Text>
                    </ViewTextInput>
                    <ViewInput>
                        {/* <TextInput onChangeText={setDate} placeholder="" /> */}
                        <MaskInput
                            value={date}
                            onChangeText={(masked, unmasked) => {
                                setDate(masked);
                            }}
                            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                    </ViewInput>
                </InputContainer>
                
                <View style={{backgroundColor: '#739489', padding: 20, marginBottom:4}}>
                    <Text style={{fontSize: 16, textAlign:'center', fontWeight: 'bold', color: '#fff'}}>Resumo da Consulta</Text>
                </View>
                <TextInput 
                    numberOfLines={8} 
                    multiline={true} 
                    onChangeText={setDescription}
                    style={{backgroundColor: '#dfdfdf', padding:4, marginBottom:4, fontSize:18}} 
                />

                <InputContainer>
                    <ViewTextInput>
                        <Text style={{textAlign:'center', fontWeight: '500'}}>Retorno em:</Text>
                    </ViewTextInput>
                    <ViewInput>
                        <MaskInput
                            value={returnDate}
                            onChangeText={(masked, unmasked) => {
                                setReturnDate(masked);
                            }}
                            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                    </ViewInput>
                </InputContainer>
            </Form>

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Button onPress={()=> router.navigate('consultations')}>
                    <TextButton>Cancelar</TextButton>
                </Button>
                <Button onPress={()=> saveConsultation()}>
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
    </>
    )
}