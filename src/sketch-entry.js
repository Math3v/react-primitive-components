import React from 'react';
import { Artboard, render } from 'react-sketchapp';
import Button from './Button';

export default context => {
  render(
    <Artboard>
      <Button
        text="Click Here"
        onClick={() => {}}
      />
    </Artboard>,
    context.document.currentPage(),
  );
}
