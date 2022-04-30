import { apply, C } from '@monorepo-ui/styles';
import React from 'react';
import { Icon as EvaIcon } from 'react-native-eva-icons';
import type { IconProps } from './Icon.types';

export default ({
  color = '#FFFFFF',
  name,
  size = 20,
  ...props
}: IconProps) => {
  const margins = [];

  if (props.mb) {
    margins.push(C?.[`mb${props.mb}`]);
  }

  if (props.mr) {
    margins.push(C?.[`mr${props.mr}`]);
  }

  if (props.ml) {
    margins.push(C?.[`ml${props.ml}`]);
  }

  if (props.mt) {
    margins.push(C?.[`mt${props.mt}`]);
  }

  if (props.mx) {
    margins.push(C?.[`mx${props.mx}`]);
  }

  if (props.my) {
    margins.push(C?.[`my${props.my}`]);
  }

  return (
    <EvaIcon
      fill={color}
      name={name}
      width={size}
      height={size}
      style={apply(margins)}
    />
  );
};
