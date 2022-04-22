import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ text, onPress }: { text: string; onPress: () => void }) => (
  // @ts-ignore
  <TouchableOpacity onPress={onPress}>
    {/* @ts-ignore*/}
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default Button;
