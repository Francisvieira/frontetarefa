import * as React from "react";
import { View , Text, Image} from "react-native";
import { servidor } from "../config/path";
import { styles } from '../css/Styles'; 

export default function Conta({navigation})

{
    return(
        <View>
            
            <Text style={styles.txtcard}> Meu Cartão </Text>
            <Image source={{uri:"https://w7.pngwing.com/pngs/530/543/png-transparent-computer-icons-x-mark-check-mark-symbol.png"}}style={styles.imgicone} />;
        </View>
    )
    
}
    <View>
        <Image source={{uri:"https://www.foregon.com/x/foregon-front/products/cartao-de-credito-nubank-mastercard.png"}} style={styles.cartao}/>
    </View>

