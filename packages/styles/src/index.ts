import consistencssC, {
  apply as consistencssApply,
  boxShadow as consistencssBoxShadow,
  classNames as consistencssClassNames,
  extend,
  responsive as consistencssResponsive,
} from 'consistencss';

extend({
  colors: {
    primary: '#0070f3',
  },
  sizing: {
    minimum: 1,
    double: 2,
    triple: 3,
  },
});

export const C = consistencssC;
export const boxShadow = consistencssBoxShadow;
export const classNames = consistencssClassNames;
export const responsive = consistencssResponsive;
export const apply = consistencssApply;

export default {
  C,
  boxShadow,
  classNames,
  responsive,
  apply,
};
