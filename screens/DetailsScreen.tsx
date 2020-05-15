import * as React from 'react';
import {View, Text} from 'react-native';

const DetailsScreen: React.FC = ({route}: any) => {
  const {item} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{item.name}</Text>
      <Text>{item.details}</Text>
    </View>
  );
};

export default DetailsScreen;
