import React from 'react';
import { Artboard, render, Platform } from 'react-sketchapp';
import Button from './Button';
import Center from './Center'

export default context => {
  render(
    <Artboard name={Platform.OS + Platform.Version}>
      <Center>
        <Button
          text="Click Here"
          onClick={() => {}}
        />
      </Center>
    </Artboard>,
    context.document.currentPage(),
  );
}
