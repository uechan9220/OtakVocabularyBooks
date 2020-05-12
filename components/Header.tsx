import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={{height: 64}}>
      <View style={styles.header}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          オタク用語辞典
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5e35b1',
    height: 100,
  },
});

export default Header;
