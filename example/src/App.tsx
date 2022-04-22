import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Button from '@monorepo-ui/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: 1</Text>
      <Button text="This is a button" onPress={() => ({})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
