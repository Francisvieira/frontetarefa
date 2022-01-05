import * as React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../css/Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { servidor } from '../config/Path';


let us = "";
let se = "";
let resultado: any = [];


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

                    us = usuario;
                    se = senha;
                    let retorno = efetuarLogin()

                    if (retorno[0] == "logado") {
                        navigation.navigate("Conta", { dados: retorno })
                    }

                }}
                >
                    <Text style={styles.btnlogar}>Logar</Text>
                </TouchableOpacity>
            </View>

    <View style={styles.btncad}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Cadastro')}>
            
                <Text  style={styles.txtcad}>Cadastre-se  </Text>
         </TouchableOpacity>
    </View>
                <Text  style={styles.txt}>Não é cadastrado ainda?</Text>
        </View>
    );
}

function efetuarLogin() {
    fetch(
        `${servidor}/login`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nome: us.toLowerCase(),
                senha: se
            })

        }
    )
    .then((response) => response.json())
    .then((rs) => {
        console.log(rs);
        resultado[0] = rs.output;
        resultado[1] = rs.payload;
        resultado[2] = rs.token;
    })
    .catch((erro) => console.error(`Erro ao tentar buscar a api ->${erro}`));
return resultado;
}


