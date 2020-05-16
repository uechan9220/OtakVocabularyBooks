import * as React from 'react';
import {SectionList, StyleSheet, Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import datas from '../datas/datas';

const SectionLists: React.FC = () => {
  const navigation = useNavigation();

  const navigateToDetails = (item: string) => {
    navigation.navigate('Details');
  };

  const Item = ({title}: {title: string}) => (
    <View>
      <Text onPress={() => navigateToDetails(title)} style={styles.item}>
        {title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={datas}
        keyExtractor={(item, index) => `${item}+ ${index}`}
        renderItem={({item}) => (
          <View>
            <Text
              onPress={() =>
                navigation.navigate('Detail', {
                  item,
                })
              }
              style={styles.item}>
              {item.name}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
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

export default SectionLists;
