import { Text, TextInput, View } from "react-native";
import { Container, Form, InputContainer, ViewInput, ViewTextInput } from "./styles";
import { ConsultationRepositoryHttp } from "@/api/repository/consultationRepositoryHttp";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function DetailConsultation(){
    const consultationRepository = new ConsultationRepositoryHttp()
    const { id } = useLocalSearchParams();

    const [data, setData] = useState<any>({});
    const [formatDate, setFormatDate] = useState('');
    const [formatReturnDate, setFormatReturnDate] = useState('');

    async function getConsultationById() {
        const response = await consultationRepository.getConsultationById(Number(id))
        setData(response.data[0])
        setFormatDate(`${response.data[0].date.split('-')[2]}/${response.data[0].date.split('-')[1]}/${response.data[0].date.split('-')[0]}`)
        setFormatReturnDate(`${response.data[0].returnDate.split('-')[2]}/${response.data[0].returnDate.split('-')[1]}/${response.data[0].returnDate.split('-')[0]}`)
    }

    useEffect(() => {
        getConsultationById()
    }, [])
    
    return (
        <Container>
            <Form>
                <InputContainer>
                    <ViewTextInput>
                        <Text style={{textAlign:'center', fontWeight: '500'}}>Especialidade</Text>
                    </ViewTextInput>
                    <ViewInput>
                        <TextInput style={{color: '#fff'}} placeholder="" value={data.expertise}/>
                    </ViewInput>
                </InputContainer>

                <InputContainer>
                    <ViewTextInput>
                        <Text style={{textAlign:'center', fontWeight: '500'}}>Data</Text>
                    </ViewTextInput>
                    <ViewInput>
                        <TextInput style={{color: '#fff'}} placeholder="" value={formatDate} />
                    </ViewInput>
                </InputContainer>
                
                <View style={{backgroundColor: '#739489', padding: 20, marginBottom:4}}>
                    <Text style={{fontSize: 16, textAlign:'center', fontWeight: 'bold', color: '#fff'}}>Resumo da Consulta</Text>
                </View>
                <TextInput 
                    numberOfLines={8} 
                    multiline={true} 
                    value={data.description}
                    style={{backgroundColor: '#dfdfdf', padding:4, marginBottom:4, fontSize:18}} 
                />

                <InputContainer>
                    <ViewTextInput>
                        <Text style={{textAlign:'center', fontWeight: '500'}}>Retorno em:</Text>
                    </ViewTextInput>
                    <ViewInput>
                        <TextInput style={{color: '#fff'}} keyboardType="numeric" value={`${formatReturnDate}`}/>
                    </ViewInput>
                </InputContainer>
            </Form>

            {/* <View style={{flexDirection:'row', alignItems:'center'}}>
                <Button onPress={()=> router.navigate('consultations')}>
                    <TextButton>Cancelar</TextButton>
                </Button>
                <Button onPress={()=> openModal()}>
                    <TextButton>Salvar</TextButton>
                </Button>
            </View> */}
        </Container>
    )
}