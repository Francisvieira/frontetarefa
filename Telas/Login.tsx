import * as React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../css/Styles';


export default function Login({ navigation }) {
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.container}>
            <Image source={require("../assets/icon.png")} style={styles.imglogo} />
            <View style={styles.controles}>
                <TextInput placeholder="Usuario:" style={styles.input} placeholderTextColor={'white'} value={usuario} onChangeText={(value) => setUsuario(value)} />
                <TextInput placeholder="Senha:" style={styles.input} placeholderTextColor={'white'} secureTextEntry value={senha} onChangeText={(value) => setSenha(value)} />

                <TouchableOpacity style={styles.btnlogar} onPress={() => {
                    navigation.navigate("Conta")
                }}
                >
                    <Text style={styles.btnlogar}>Logar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

   
                  