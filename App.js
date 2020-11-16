import React, { Fragment, Fragmentm, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { CitaForm } from './src/components/CitaForm';
import { Citas } from './src/components/Citas';

const App = () => {

  const initialState = ([])

  const [citas, setCitas] = useState(initialState)
  const [mostrarForm, setMostrarForm] = useState(false)

  const eliminarCita = ( id ) => {
    setCitas( (citas) => {
      return citas.filter( cita => cita.id !== id)
    })
  }

  const crearCita = () => {
    setMostrarForm(!mostrarForm)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Administrador de Citas</Text>
      
      <View style={styles.content}>

        {
          mostrarForm
            ? <CitaForm 
                citas={citas} 
                setCitas={setCitas} 
                crearCita={crearCita}
              />
            : <Fragment>
                  {
                    citas.length > 0 
                      ? <Fragment>
                          <Text style={styles.header}>Tus Citas</Text>
                          <View style={styles.addButton}>
                          <Button title='+' onPress={crearCita} />
                          </View>
                        </Fragment> 
                      : <Fragment>
                          <Text style={styles.header}>No se han encontrado citas</Text>
                          <View style={styles.addButton}>
                            <Button title='Agrega una Cita' onPress={crearCita} />
                          </View>
                        </Fragment>
                      
                  }

                <FlatList
                  style={styles.list}
                  data={citas}
                  renderItem={ ({ item }) => <Citas item={ item } eliminarCita={ eliminarCita }/> }
                  keyExtractor={ cita => cita.id }
                />
              </Fragment>
        }
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 25,
    color: '#FFF'
  },

  container: {
    backgroundColor: '#1777F0',
    flex: 1
  },

  content : {
    flex: 1,
    marginHorizontal: '2.5%',
  },

  list: {
    flex: 1,

  },

  addButton: {
    marginBottom: 10
  }

});

export default App;
