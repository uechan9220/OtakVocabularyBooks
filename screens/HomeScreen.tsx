import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import SelectionLists from '../components/SectionLists';


const HomeScreen: React.FC = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SelectionLists />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen
