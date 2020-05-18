import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import SelectionLists from '../components/SectionLists';

const HomeScreen: React.FC = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SelectionLists />
    </>
  );
};


export default HomeScreen;
