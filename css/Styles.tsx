import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#52bf90",
        borderBottomRightRadius:1500,
        borderTopLeftRadius:1500



    },


    imglogo: {
        height: 150,
        width: 150,
        resizeMode: "cover",
        borderRadius: 35,
        bottom: 40
    },
    controles: {

        height: 150,
        width: '90%',
        padding: 10,
        margin: 20,
        backgroundColor: "transparent",
        borderRadius: 10,
        top: 20
    },

    input: {
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
        fontSize: 25,
        color: 'white',
    },
    btnlogar: {
        justifyContent: "center",
        right: -65,
        color: '#00ff83',
        fontSize: 25,
        fontWeight:"bold"


    },



    login: {
        padding: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        bottom: 10
    },
    topo: {
        borderWidth: 1,
        top: 10,
        width: '100%',
        alignContent: "center",
        height: 50,
        backgroundColor: 'black',



    },
    titulo: {
        fontSize: 40,
        left: 10,
        color: 'white',
        top: 30,
        fontWeight: "bold"


    },
    mais: {
        height: 50,
        width: 50,
        left: 300,
        bottom: 20
    },
    container2: {
        flex: 1,
        backgroundColor: 'black'
    },
    cartao: {
        top: 70,
        width: 370,
        height: 250,
        borderRadius: 20,


    },
    subtitulo: {
        right: -40,
        bottom: -100
    },
    txtsub: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    caixa: {
        backgroundColor: 'white',
        height: 100,
        width: 370,
        borderRadius: 30,
        top: 110,

    },
    kfc: {
        fontSize: 30,
        left: 100,
        bottom: -30,
        fontWeight: 'bold'
    },
    hamb: {
        width: 50,
        height: 50,
        top: -10,
        left: 20


    },
    paypal: {
        width: 100,
        height: 100,
        bottom: 30

    },
    caixa1: {

        backgroundColor: 'white',
        height: 100,
        width: 370,
        borderRadius: 30,
        top: 120,
    },
    caixa2: {
        backgroundColor: 'white',
        height: 100,
        width: 370,
        borderRadius: 30,
        bottom: -130,
    },
    mecanico: {
        width: 50,
        height: 50,
        top: -10,
        left: 10
    },
    mercado: {
        width: 50,
        height: 50,
        top: -10,
        left: 10
    },
    caixa3: {
        backgroundColor: 'white',
        height: 100,
        width: 370,
        borderRadius: 30,
        bottom: -140,
    }, 
    btncad:{
        height:50,
        width:'50%',
        backgroundColor:'black',
        justifyContent:"center",
        marginTop:30,
        borderRadius:30,
        
    },
    txtcad:{
        
        color:'#00ff83',
        justifyContent:"center",
        left:52,
        fontWeight:'bold',
        
    },
    txt:{
        marginTop:20,
        fontSize:14,
        fontWeight:'bold',
        color:'white'
        
    }

})