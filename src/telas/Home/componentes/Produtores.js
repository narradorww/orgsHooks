import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={lista}
        keyExtractor={item => item.nome}
        renderItem={({item}) => <Produtor {...item} />}
        ListHeaderComponent={TopoLista}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
