import { FlatList, Text, View } from "react-native";

export default function DetailExam() {

    const json = [
        {
            "id": 1,
            "date": "17/02/2024",
            "level": "79 mg/dL"
        },
        {
            "id": 2,
            "date": "17/02/2024",
            "level": "80 mg/dL"
        },
        {
            "id": 3,
            "date": "17/02/2024",
            "level": "29 mg/dL"
        },
        {
            "id": 4,
            "date": "17/02/2024",
            "level": "13 mg/dL"
        },
        {
            "id": 5,
            "date": "17/02/2024",
            "level": "7 mg/dL"
        },
        {
            "id": 6,
            "date": "17/02/2024",
            "level": "30 mg/dL"
        }
    ]

    return (
        <View>
            <View style={{backgroundColor:'lightgray', padding: 24, marginBottom: 8}}>
                <Text style={{textAlign:'center', fontSize: 16}}>Glicose</Text>
            </View>

            <FlatList
                data={json}
                renderItem={({item}) => {
                    return (
                        <View style={{flexDirection:'row', marginBottom: 8}}>
                            <View style={{width:'50%', backgroundColor: '#739489', padding: 24}}>
                                <Text style={{fontSize: 16, textAlign: 'center', color: 'white'}}>{item.date}</Text>
                            </View>

                            <View style={{width:'50%', backgroundColor: '#dfdfdf', padding: 24}}>
                                <Text style={{fontSize: 16, textAlign: 'center'}}>{item.level}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}