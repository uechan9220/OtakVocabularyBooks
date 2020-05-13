/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  SectionList,
  Alert,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const datas = [
    {title: 'D', data: ['Devian', 'Dan', 'Dominic']},
    {
      title: 'J',
      data: [
        'Jackson',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
        'James',
        'Jillian',
      ],
    },
  ];

  function HomeScreen({navigation}: any) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.container}>
            <SectionList
              sections={datas}
              renderItem={({item, index}) => (
                <View>
                  <Text
                    onPress={() => navigation.navigate('Details', index)}
                    style={styles.item}>
                    {item}
                  </Text>
                </View>
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }

  const DetailsScreen = ({ navigation }: any) => {
    Alert.alert(navigation.state)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{navigation.title}</Text>
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="オタク用語辞典" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247,247, 1.0)',
  },
});

export default App;
