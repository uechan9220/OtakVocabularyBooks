import * as React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_DATA = gql`
  query getUser {
    allData(order_by: {title: asc}) {
      title
      data(order_by: {name: asc}) {
        name
        details
      }
    }
  }
`;

interface DataProps {
  data: {
    allData: {
      title: string;
      data: [
        {
          name: string;
          details: string;
        },
      ];
    };
  };
}

const SectionLists: React.FC = () => {
  const {loading, error, data} = useQuery(GET_DATA);
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
  if (loading)
    return (
      <View style={styles.container}>
        <Text>'Loading...'</Text>
      </View>
    );
  if (error)
    return (
      <View style={styles.container}>
        <Text>Error! ${error.message}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <SectionList
        sections={data.allData}
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
