import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Sobre from'./sobre';

export default function App() {
    const [page, setPage] = React.useState("home");

    const renderPage = () => {
        if (page === 'home') {

            return (
                <View style={styles.container}>
                    <Text style={styles.title}> Página Príncipal </Text>
                    <Text style={styles.title}>  Exemplo 1 </Text>
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
        backgroundColor: '#9ACDD9',
    },

    title: {
        
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        
        
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


})
