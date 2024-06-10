import { Modal, Text, TextInput, View } from "react-native";
import { Button, Container, TextButton, ViewText } from "./styles";
import { Form } from "../addConsultation/styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import MaskInput from "react-native-mask-input";
import { MedicationRepositoryHttp } from "@/api/repository/medicationRepositoryHttp";
import Toast from "react-native-toast-message";
