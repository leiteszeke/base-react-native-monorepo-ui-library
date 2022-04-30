import Consistencss from 'consistencss';
import { DynamicObject, Styles } from 'consistencss/lib/typescript/src/types';
import { StyleProp } from 'react-native';

type StylesArray = Array<StyleProp<Styles> | string>;

declare module '@monorepo-ui/styles' {
  export const C: typeof Consistencss;
  export function apply(...styles: StylesArray): StyleProp<Styles>;
  export function classNames(
    ...params: Array<
      string | boolean | DynamicObject<boolean | undefined> | StyleProp<Styles>
    >
  ): StyleProp<Styles>;
}
