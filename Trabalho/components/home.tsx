import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'


export default function App() {
    const [page, setPage] = React.useState("home");

    const renderPage = () => {
        if (page === 'home') {

            return (
                <View style={styles.container}>
                    <Text style={styles.title}> Página Príncipal </Text>
                    <Text style={styles.title}>  Exemplo 1 </Text>
                    <TouchableOpacity style={StyleSheet.button} onPress={() => setPage('sobre')}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },

    bu: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },



})
