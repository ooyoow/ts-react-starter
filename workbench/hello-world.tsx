import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import * as React from 'react';
import { Hello } from '../src/components/hello-world';

declare var module;

const stories = storiesOf('Hello World', module);
stories
  .addDecorator(withKnobs)
  .add('default', () => {

    return (
      <Hello />
    );
  })
  .add('with a name', () => {

    return (
      <Hello
        name={text('Name', 'Jane Doe')}
        />
    );
  });