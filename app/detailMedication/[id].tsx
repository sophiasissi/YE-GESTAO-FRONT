import { Text, View } from "react-native";
import { Container, ViewText } from "./styles";
import { useGlobalSearchParams } from "expo-router";
import { MedicationRepositoryHttp } from "@/api/repository/medicationRepositoryHttp";
import { useEffect, useState } from "react";

export default function DetailMedication() {
    const { id } = useGlobalSearchParams();
    const medicationRepository = new MedicationRepositoryHttp();

    const [data, setData] = useState<any>({});

    async function getMedicationById() {
        await medicationRepository.getMedicationById(Number(id)).then((response) => {
            console.log(response);
            setData(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getMedicationById();
    }, [])