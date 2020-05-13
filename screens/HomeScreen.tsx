import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';
import SelectionLists from '../components/SectionLists';


const HomeScreen: React.FC = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SelectionLists hoge={props}/>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen
