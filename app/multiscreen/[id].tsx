import { MultiRepositoryHttp } from "@/api/repository/multiRepositoryHttp";
import { CardListThree } from "@/components/CardListThree";
import { FontAwesome6 } from "@expo/vector-icons";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaskInput from "react-native-mask-input";
import Toast from "react-native-toast-message";

export default function Multiscreen(){
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const multiRepository = new MultiRepositoryHttp();

    const [jsonPressure, setJsonPressure] = useState([]);
    const [jsonGlucose, setJsonGlucose] = useState([]);
    const [jsonImc, setJsonImc] = useState([]);

    const [date, setDate] = useState('');
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [level, setLevel] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    // GETTERS FUNCTIONS API
    async function getBloodPressure() {
        const response = await multiRepository.getBloodPressure();
        // console.log(response);
        setJsonPressure(response.data);
    }
    async function getGlucose() {
        const response = await multiRepository.getGlucose();
        // console.log(response);
        setJsonGlucose(response.data);
    }
    async function getImc() {
        const response = await multiRepository.getImc();
        // console.log(response);
        setJsonImc(response.data);
    }

    // CREATE FUNCTIONS API
    async function createBloodPressure() {
        if(date === '' || systolic === '' || diastolic === ''){
            alert('Preencha todos os campos');
            return;
        }
        const invertDate = date.split('/').reverse().join('-');
        
        const data = {
            'date': invertDate,
            'systolic': systolic,
            'diastolic': diastolic
        }

        await multiRepository.createBloodPressure(data).then((response) => {
            if(response.status == 201){
                setDate('')
                setSystolic('')
                setDiastolic('')
                setModal(false);
                getBloodPressure();
            } else {
                alert('Erro ao salvar pressão arterial');
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    async function createGlucose() {
        if(date === '' || level === ''){
            alert('Preencha todos os campos');
            return;
        }
        const invertDate = date.split('/').reverse().join('-');
        
        const data = {
            'date': invertDate,
            'value': level
        }

        await multiRepository.createGlucose(data).then((response) => {
            if(response.status == 201){
                setDate('')
                setLevel('')
                setModal(false);
                getGlucose();
            } else {
                alert('Erro ao salvar glicemia');
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    async function createImc() {
        if(date === '' || height === '' || weight === ''){
            alert('Preencha todos os campos');
            return;
        }
        const invertDate = date.split('/').reverse().join('-');
        
        const data = {
            'date': invertDate,
            'height': height,
            'weight': weight
        }

        await multiRepository.createImc(data).then((response) => {
            if(response.status == 201){
                setDate('')
                setHeight('')
                setWeight('')
                setModal(false);
                getImc();
            } else {
                alert('Erro ao salvar IMC');
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    const [modal, setModal] = useState(false);
    
    function openModal(){
        setModal(true);
    }

    useFocusEffect(() => {
        if(id === "pressure"){
            getBloodPressure();
        } else if(id === "glucose"){
            getGlucose();
        } else if(id === "imc"){
            getImc();
        } else {
            router.push("/404");
        }
    })
    useEffect(() => {
        if(id === "pressure"){
            getBloodPressure();
        } else if(id === "glucose"){
            getGlucose();
        } else if(id === "imc"){
            getImc();
        } else {
            router.push("/404");
        }
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            {/* TITULO */}
            <View style={{width: "100%", backgroundColor: '#003732', alignItems:'center'}}>
                <Text style={{color: '#fff', fontWeight:'bold', fontSize: 24, marginBottom: 8}}>{
                    id === "pressure" ? 
                        "Pressão Arterial" 
                    : id === "glucose" ? 
                        "Glicemia" 
                    : id === "imc" ? 
                        "IMC" 
                    : "Página não encontrada"
                }</Text>
            </View>

            {/* LEGENDA PRA LISTA DO IMC */}
            { id === "imc" ?
                <View style={{flexDirection:'row', width:'100%', marginTop: 8, alignItems:'center', justifyContent: 'center'}}>
                    <View style={{width:'33%', backgroundColor: 'lightgray', padding: 24}}>
                        <Text style={{textAlign:'center', fontSize: 16}}>Peso</Text>
                    </View>
                    <View style={{width:'33%', backgroundColor: 'lightgray', padding: 24}}>
                        <Text style={{textAlign:'center', fontSize: 16}}>Altura</Text>
                    </View>
                    <View style={{width:'33%', backgroundColor: 'lightgray', padding: 24}}>
                        <Text style={{textAlign:'center', fontSize: 16}}>Nível</Text>
                    </View>
                </View>
            : <></>
            }
            
            {/* LISTA */}
            <FlatList
                data={id === "pressure" ? jsonPressure : id === "glucose" ? jsonGlucose : id === "imc" ? jsonImc : []}
                renderItem={({item}) => (
                    id === "pressure" ? 
                        <CardListThree item={item}/>
                    : id === "glucose" ?
                        <CardListThree item={item}/>
                    : id === "imc" ?
                        <CardListThree item={item}/>
                    : <></>
                )}
            />

            {/* BOTAO DE ADICIONAR */}
            <View style={{alignItems:'center', marginVertical: 8}}>
                <TouchableOpacity onPress={()=>openModal()}>
                    <FontAwesome6 name="circle-plus" size={40} color="black" />
                </TouchableOpacity>
            </View>

            {/* MODAL */}
            {modal ?
                <Modal transparent>
                    <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{alignItems: 'center', backgroundColor: '#dfdfdf', padding:12, borderWidth:2, borderRadius:8, width:'80%'}}>
                            <MaskInput
                                style={{backgroundColor: '#fff', padding: 8, width: '100%', marginBottom: 8, borderRadius: 8}}
                                placeholder="Data"
                                value={date}
                                onChangeText={(masked, unmasked) => {
                                    setDate(masked);
                                }}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            />
                            {id === "imc" ? 
                            <>
                                <TextInput onChangeText={setHeight} style={{backgroundColor: '#fff', padding: 8, width: '100%', marginBottom: 8, borderRadius: 8}} keyboardType="numeric" placeholder="Altura em cm"/>
                                <TextInput onChangeText={setWeight} style={{backgroundColor: '#fff', padding: 8, width: '100%', marginBottom: 8, borderRadius: 8}} keyboardType="numeric" placeholder="Peso em Kg"/>
                            </>
                            :    
                            id === "pressure" ?
                            <>
                                <TextInput onChangeText={setDiastolic} style={{backgroundColor: '#fff', padding: 8, width: '100%', marginBottom: 8, borderRadius: 8}} keyboardType="numeric" placeholder="Diastólica"/>
                                <TextInput onChangeText={setSystolic} style={{backgroundColor: '#fff', padding: 8, width: '100%', marginBottom: 8, borderRadius: 8}} keyboardType="numeric" placeholder="Sistólica"/>
                            </>
                            :
                                <TextInput onChangeText={setLevel} style={{backgroundColor: '#fff', padding: 8, width: '100%', marginBottom: 8, borderRadius: 8}} keyboardType="numeric" placeholder="Valor"/>
                            }

                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <TouchableOpacity style={{backgroundColor: '#739489', padding: 20}} onPress={()=> setModal(false)}>
                                    <Text style={{textAlign:'center', color:'#fff', fontWeight:'bold'}}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: '#739489', padding: 20}} onPress={()=> {
                                    if(id === "pressure"){
                                        createBloodPressure();
                                    }else if(id === "glucose"){
                                        createGlucose();
                                    }else if(id === "imc"){
                                        createImc();
                                    }else{
                                        alert('Erro ao salvar');
                                    }
                                }}>
                                    <Text style={{textAlign:'center', color:'#fff', fontWeight:'bold'}}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            :
                <></>
            }
            
        </View>
    )
}