import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',



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
        backgroundColor: "#519259",
        borderRadius: 10,
        top: 20
    },

    input: {
        height: 40,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
        fontSize: 25,
        color: 'white',
    },
    btnlogar: {justifyContent:"center",
    right:-65,
    color:'white',
    fontSize:25
        

    },
   
    

    login: {
        padding:10,
        textAlign: 'center',
        color: 'white',
        fontSize:25,
        bottom:10
    },
    txtcard:{
        height:100,
        width:100

    },
    imgicone:{
        height:100,
        width:100

    },
    cartao:{
        height:100,
        width:100

    }
   
})