import React from 'react';
import Center from './Center'
import Button from './Button'

function App() {
  return (
    <Center>
      <Button
        text="Click Here"
        onClick={() => console.log('Clicked')}
      />
    </Center>
  );
}

export default App;
