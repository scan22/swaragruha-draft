import React from 'react';
import { View, Text } from 'react-native';
import ListWithIcons from '../components/ListWithIcons';

const VarnasScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { data } = route.params;

  if (!data || !Array.isArray(data)) {
    return <ListWithIcons title="Varnas" items={["No data available"]} navigation={navigation} data={[]}/>;
  }

  const items = data.map((item:any) => item.name ?? 'Unnamed Varna');

  return <ListWithIcons title="Varnas" items={items} navigation={navigation} data={data}/>;
};

export default VarnasScreen;
