/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:disable:no-unused-variable */

interface HelloWorldProps {
  name?: string;
}

export const Hello = ({name = 'World'}: HelloWorldProps) => <p>Hello {name}!</p>;
