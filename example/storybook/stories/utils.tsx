import React from 'react';
import { StyleSheet, View } from 'react-native';

export const CenterView = ({ children }) => (
  <View
    style={StyleSheet.flatten({
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    })}
  >
    {children}
  </View>
);
