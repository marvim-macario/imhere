import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert } from 'react-native';
import {styles} from './styles';
import Participant from '../../components/participant';
import { useState } from 'react';

export default function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    function handleParticipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert(participantName,'já está na lista');
        }
        setParticipants(prevState => [...participants, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(nome: string){ 
        Alert.alert( 'Deseja remover o participante?', nome , [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter((participant) => participant !== nome));
                }
            }
        
        ])
        
    }

  return (
    <>
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Segunda, 11 de março de 2024.
            </Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={(text) => setParticipantName(text)}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress = {handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <Participant 
                        name={item} 
                        onRemove={()=>handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyList}>
                        Ninguém chegou no evento ainda? 
                        Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    </>
  );
}