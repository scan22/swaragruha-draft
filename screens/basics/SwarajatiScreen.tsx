import React from 'react';
import ListWithIcons from '../../components/ListWithIcons';
const SwarajatiScreen = ({ route, navigation }: { route: any; navigation: any }) => {

  const { data } = route.params;

  if (!data || !Array.isArray(data)) {
    return <ListWithIcons title="Swarajati" items={["No data available"]} navigation={navigation} data={[]}/>;
  }

  const items = data.map((item: any) => item.name); // Or item.notation, based on your JSON

  return <ListWithIcons title="Swarajati" items={items} navigation={navigation} data={data} />;

};


export default SwarajatiScreen;