import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from '../../../componentes/Estrelas';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <TouchableOpacity
      style={estilos.cartao}
      onPress={() => setSelecionado(!selecionado)}>
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.infos}>
        <View>
          <Text style={estilos.texto}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}>{distancia}m</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    //iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    //Android Shadow
    elevation: 5,
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 24,
    marginVertical: 16,
  },
  texto: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#464646',
  },
  distancia: {
    fontSize: 1,
    lineHeight: 19,
    color: '#464646',
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginVertical: 16,
    marginLeft: 16,
  },
});
