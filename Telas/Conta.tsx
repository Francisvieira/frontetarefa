import * as React from "react";
import { View , Text, Image, ScrollView} from "react-native";
import { styles } from "../css/Styles"
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from "../src/components/Scanner";

export default function Conta({navigation})

{
    return(
        
        <View style={styles.container2}>
        <View style={styles.topo}>
            
        <View>
            <Text style={styles.titulo}> Cartão</Text>
        </View>

        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/More_Icon_C.svg/1200px-More_Icon_C.svg.png"}} style={styles.mais}></Image>
        </View> 


        
        <ScrollView>
        <View>
            <Image source={{uri:"https://www.foregon.com/x/foregon-front/products/cartao-de-credito-nubank-mastercard.png"}}style={styles.cartao}></Image>
        </View>




        <View style={styles.subtitulo}>
            <Text style={styles.txtsub}>Transações Recentes</Text>
        </View>



        <View style={styles.caixa}>
            <Text style={styles.kfc}>KFC</Text>
            <Image source={require("../assets/hamb.png")} style={styles.hamb}/>
        </View>

        <View style={styles.caixa1}>
            <Text style={styles.kfc}>PayPal</Text>
            <Image source={require("../assets/paypal.png")} style={styles.paypal}/>
        </View>

        <View style={styles.caixa2}>
            <Text style={styles.kfc}>Mecânico</Text>
            <Image source={require("../assets/mecanico.png")} style={styles.mecanico}/>
        </View> 
         <View style={styles.caixa3}>
            <Text style={styles.kfc}>Mercado</Text>
            <Image source={require("../assets/mercado.png")} style={styles.mercado}/>
        </View>

        </ScrollView>
        </View> 
        

    )


    
}

   

