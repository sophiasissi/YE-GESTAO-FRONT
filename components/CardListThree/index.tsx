import { Text, View } from "react-native";

export function CardListThree({item}: any) {
    return (
        <View style={{flexDirection:'row', width:'100%', marginTop: 8, alignItems:'center', justifyContent: 'center'}}>
            <View style={{height:'100%', width:'33%', backgroundColor: 'white', padding: 24}}>
                <Text style={{textAlign:'center', fontSize: 16}}>{item.date || item.weight+" Kg"}</Text>
            </View>
            <View style={{height:'100%', width:'33%', backgroundColor: '#739489', padding: 24}}>
                <Text style={{textAlign:'center', fontSize: 16, color:'#fff'}}>{
                    item.value ? item.value : item.diastolic ? item.diastolic+"x"+item.systolic : (item.height/100)+" m"}</Text>
            </View>
            <View style={{height:'100%', width:'33%', backgroundColor: 'white', padding: 24}}>
                <Text style={{textAlign:'center', fontSize: 16}}>{item.imc ? item.imc+" - "+item.level : item.level}</Text>
            </View>
        </View>
    )
}