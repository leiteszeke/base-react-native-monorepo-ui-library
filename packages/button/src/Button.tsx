import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  View,
} from 'react-native';
import { C, apply, classNames } from '@monorepo-ui/styles';
import type { ButtonProps } from './Button.types';
import Icon from '@monorepo-ui/icon';

const Button = ({
  disabled,
  leftIcon,
  rightIcon,
  text,
  onPress,
  ...props
}: ButtonProps) => {
  const handlePress = (e: GestureResponderEvent) => {
    if (!disabled) {
      onPress?.(e);
    }
  };

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={disabled ? 1 : 0.8}
      style={classNames('h8 px4 itemsCenter justifyCenter radius2', {
        bgPrimary: !disabled,
        bgGray: disabled,
      })}
      onPress={handlePress}
    >
      <View style={apply(C.flex, C.hFull, C.itemsCenter, C.row)}>
        {leftIcon && <Icon size={18} name={leftIcon} mr={2} />}
        <Text
          style={apply(
            C.font4,
            C.textWhite,
            C.uppercase,
            C.weightBold,
            C.line5
          )}
        >
          {text}
        </Text>
        {rightIcon && <Icon size={18} name={rightIcon} ml={2} />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
