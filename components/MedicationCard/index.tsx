import { FontAwesome6 } from "@expo/vector-icons";
import { ContainerButton, TextButton } from "./styles";
import { Link, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export function MedicationCard({ json }: any) {
    const router = useRouter();

    return (
        <Link style={styles.containerButton} href={`detailMedication/${json.id}`}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <TextButton>{json.name}: {json.hour}</TextButton>
                <FontAwesome6 name="circle-chevron-right" size={24} color="black" />
            </View>
        </Link>
    )
}