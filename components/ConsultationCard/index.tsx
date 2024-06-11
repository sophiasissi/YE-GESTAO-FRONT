import { FontAwesome6 } from "@expo/vector-icons";
import { ContainerButton, TextButton } from "./styles";
import { Link, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export function ConsultationCard({ json }: any) {
    const router = useRouter();

    return (
        <Link style={styles.containerButton} href={`detailConsultation/${json.id}`}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <TextButton>{json.expertise}</TextButton>
                <FontAwesome6 name="circle-chevron-right" size={24} color="black" />
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        padding: 24,
        backgroundColor: '#fff',
        marginBottom: 4,
    },
}); 