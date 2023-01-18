import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Estrela from './Estrela';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  console.log(quantidadeAntiga);

  const handleQuantidade = i => {
    setQuantidade(i + 1);
  };

  const RenderEstrela = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={handleQuantidade(i)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
      );
    }

    return listaEstrelas;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrela />
    </View>
  );
}

const estilos = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
    marginRight: 2,
  },
});
