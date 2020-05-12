import * as React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const SectionLists: React.FC = () => {
  const datas = [
    {title: 'D', data: ['Devian', 'Dan', 'Dominic']},
    {title: 'J', data: ['Jackson', 'James', 'Jillian']},
  ];

  return (
    <View>
      <SectionList sections={datas} />
    </View>
  );
};

export default SectionLists;
