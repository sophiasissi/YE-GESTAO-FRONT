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