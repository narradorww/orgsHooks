import React from 'react';
import {Text} from 'react-native';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  return <Text>*</Text>;
}
