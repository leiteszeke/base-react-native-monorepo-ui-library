import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '@monorepo-ui/button';
import { CenterView } from '../utils';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button
      disabled={boolean('Button disabled', false)}
      text={text('Button text', 'Hello Button')}
      onPress={action('clicked-text')}
    />
  ))
  .add('with icon', () => <Button leftIcon="save" text="Save" />);
