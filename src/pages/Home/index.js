import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button, ImageBackground } from 'react-native-web';
import { estilo } from './../estilo'

const imgBackground = '../../assets/fundoBanner.png'

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={estilo.btnAgenda}>
    <Text style={estilo.textAgenda}>{title}</Text>
  </TouchableOpacity>
);

const CustomButton2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={estilo.btnServicos}>
    <Text style={estilo.textServico}>{title}</Text>
  </TouchableOpacity>
);

export default function Home({ navigation }){    
return (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor:'white', }}>
    <SafeAreaView style={{ flex: 1, backgroundColor:'white' }}>
      {/* TOPO */}
      <View style={estilo.topo}>
        <Image source={require('../../assets/logoLaranja.svg')} style={estilo.logo} />
        <Text style={estilo.textOla}>Olá, <Text style={{color: 'orange'}}>'USUÁRIO'</Text><br/>Seja bem-vindo(a)</Text>
      <CustomButton title="AGENDAR" onPress={() => navigation.navigate('Inicio')} ></CustomButton>
      </View>
      {/* banner */}

      <ImageBackground source={require(imgBackground)} style={{width: '100%', flex: 1}}>
      <View style={{marginLeft: 20, marginTop: 50}}>
        <Text style={{fontSize: 44, color: 'white'}}>Royal barber,<br/>a <Text style={{color: '#FF6D24'}}>realeza</Text>.</Text>
        <Text style={{fontSize: 27, color: 'white', marginTop: 20}}>Dê um toque<br/>gourmet ao seu<br/>visual, <Text style={{color: '#FD7E14'}}>seja a realeza</Text>.</Text>
        <CustomButton2 title='NOSSOS SERVIÇOS' />
      </View>
      </ImageBackground>
    </SafeAreaView>
  </ScrollView>
    );
}


