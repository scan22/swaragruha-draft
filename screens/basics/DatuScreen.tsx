import React from 'react';
import ListWithIcons from '../../components/ListWithIcons';

const DatuScreen = ({ route }: { route: any }) => {
const { data } = route.params;

  if (!data || !Array.isArray(data)) {
    return <ListWithIcons title="Datu Varsai" items={["No data available"]} />;
  }

  const items = data.map((item: any) => item.name); // Or item.notation, based on your JSON

  return <ListWithIcons title="Datu Varsai" items={items} />;
};


export default DatuScreen;
