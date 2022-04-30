import type { TouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  leftIcon?: string;
  rightIcon?: string;
  text: string;
};
