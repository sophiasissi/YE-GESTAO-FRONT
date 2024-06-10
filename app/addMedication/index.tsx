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