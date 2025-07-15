import React from 'react';
import { View, Text } from 'react-native';
import ListWithIcons from '../components/ListWithIcons';

const KrithisScreen = ({ route}: { route: any }) => {
  const { data } = route.params;

  if (!data || !Array.isArray(data)) {
    return (
      <View><Text>No data available for Krithis</Text></View>
    );
  }

   const items = data.map((item) => item?.name ?? 'Unnamed Krithi'); // Pass full item with name + pdf

  return <ListWithIcons title="Krithis" items={items}  />;
};

export default KrithisScreen;
