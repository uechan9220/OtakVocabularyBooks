import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetailsScreen: React.FC = ({route}: any) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>{item.details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 40,
  },
  detailsContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  detail: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default DetailsScreen;
