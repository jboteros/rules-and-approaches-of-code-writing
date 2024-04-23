// bad
import React, { useState } from 'react';
import { Button } from 'react-native';

function MyComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <Button 
      title="Aumentar"
      onPress={() => setCounter(counter + 1)}
    />
  );
}

// good
import React, { useState, useCallback } from 'react';
import { Button } from 'react-native';

function MyComponent() {
  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
  }, []);
  
  return (
    <Button 
      title="Aumentar"
      onPress={handleIncreaseCounter}
    />
  );
}
