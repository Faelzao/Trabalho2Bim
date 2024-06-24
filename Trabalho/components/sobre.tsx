import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import Home from './home';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {

            return (
                <View style={styles.container}>
                    <Text style={styles.title}> Localização
                    atual </Text>

                    <Image  style={styles.img} source={ require("../assets/images/latitude.png")}/>
                    <Text style={styles.title}> 0.0
                     </Text>

                    <Image  style={styles.img2} source={ require("../assets/images/longitude.png")}/>
                    <Text style={styles.title}> 0.0
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}>Clique aqui  </Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'home'){
            return <Home />;
        }
    };

    return < View style={styles.container}> {renderPage()}</View>;


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
        alignItems: 'center',
        
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
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
img: {
    height: 100, 
    width: 250,
   
},
img2: {
    height: 80, 
    width: 250,
   
},

})
