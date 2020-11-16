import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Citas = ({ item, eliminarCita }) => {

    const elimniarCitaManager = ( id ) => {
        eliminarCita(id)
    }

    return (
        <View style={ styles.cita }>
            <View>
                <Text style={ styles.label }>Paciente: </Text>
                <Text style={ styles.text }>{item.paciente}</Text>
            </View>
            <View>
                <Text style={ styles.label }>Propietario: </Text>
                <Text style={ styles.text }>{item.propietario}</Text>
            </View>
            <View>
                <Text style={ styles.label }>Sintomas: </Text>
                <Text style={ styles.text }>{item.sintomas}</Text>
            </View>

            <View style={styles.button}>
                <Button title='Eliminar' onPress={ () => elimniarCitaManager(item.id) } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        marginVertical: 5,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },

    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },

    text: {
        fontSize: 18
    },

    button: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 4,
        marginTop: 10
    }
})
