import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid'

export const CitaForm = ({ citas, setCitas, crearCita }) => {

    const [paciente, setPaciente] = useState()
    const [propietario, setPropietario] = useState()
    const [contacto, setContacto] = useState()
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [sintomas, setSintomas] = useState()

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmDate = (date) => {
        setFecha(date.toLocaleDateString('es-ES'))
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = (time) => {
        setHora(time.toLocaleTimeString())
        hideTimePicker();
    };

    const validateField = (field) => {
        if (field === undefined || field.trim() === '') {
            return true
        } else {
            return false
        }
    }

    const citaCreate = () => {
        if (validateField(paciente) ||
            validateField(propietario) ||
            validateField(contacto) ||
            validateField(fecha) ||
            validateField(hora) ||
            validateField(sintomas)
        ) {
            Alert.alert('Error', 'Complete el formulario', [{ text: 'OK' }])
        } else {
            const nueva_cita = { paciente, propietario, contacto, fecha, hora, sintomas }

            nueva_cita.id = shortid.generate()

            const citas_actualizadas = [...citas, nueva_cita]

            setCitas(citas_actualizadas)

            crearCita()
        }

    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={input => setPaciente(input)}
                />
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={input => setPropietario(input)}
                />
            </View>
            <View>
                <Text style={styles.label}>Contacto: </Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={input => setContacto(input)}
                />
            </View>
            <View>
                <Text style={styles.label}>Fecha: </Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirmDate}
                    onCancel={hideDatePicker}
                />
                <Text>{fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora: </Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirmTime}
                    onCancel={hideTimePicker}
                />
                <Text>{hora}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={input => setSintomas(input)}
                />
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button style={styles.button} title='Volver' onPress={crearCita} />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button} title='Guardar Cita' onPress={citaCreate} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    form: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingBottom: 20,
        marginBottom: 10
    },

    label: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
    },

    input: {
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 35,
        fontSize: 13,
    },

    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 4,
        marginTop: 30,
        marginHorizontal: 10,
        marginBottom: 10
    }
})
