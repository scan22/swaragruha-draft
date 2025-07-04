import React from 'react';
import ListWithIcons from '../components/ListWithIcons';

const VarnasScreen = () => {
  const varnas = ['Varna_1', 'Varna_2', 'Varna_3', 'Varna_4'];
  return <ListWithIcons title="Varnas" items={varnas} />;
};

export default VarnasScreen;
