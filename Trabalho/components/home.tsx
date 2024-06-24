import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import Sobre from'./sobre';


export default function App() {
    const [page, setPage] = React.useState("home");

    const renderPage = () => {
        if (page === 'home') {

            return (
                
                <View style={styles.container}>
                      <Text style={styles.title}> LocalizaTech</Text>
                    <Image  style={styles.img2} source={ require("../assets/images/mapinha.png")}/>
                    <Text style={styles.title}> SOBRE</Text>
                    <Text style={styles.desc}>  É um app de localização
                         personalizado que recomenda atividades com base nos interesses dos usuários,
                          oferecendo uma experiência de descoberta local única. </Text>
                          
                          <Image  style={styles.img} source={ require("../assets/images/homem.png")}/>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Clique aqui  </Text>
                    </TouchableOpacity>
                    
                </View>
            );
        } else if (page === 'sobre'){
            return <Sobre />;
        }
    };

    return < View style={styles.container}> {renderPage()}</View>;


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
        alignItems: 'center',
        backgroundColor: '#122640',
    },

    title: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        
        
    },

    button:{
    backgroundColor: '#007BFF',
     padding: 10, 
     borderRadius: 5,
     
    
},
    buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
},

img:{
    marginTop: 1,
    height: 200,
    width: 100,

},
desc:{
   fontSize: 16,
   margin: 50,
   color: '#fff',
    
},
img2:{
    
    height: 200,
    width: 200,
},

})
