// bad
import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const doubleCount = count * 2;

  return (
    <TouchableOpacity onPress={increment}>
      <Text>Count: {count}</Text>
      <Text>Double Count: {doubleCount}</Text>
    </TouchableOpacity>
  );
}

// good
import React, { useState, useCallback, useMemo } from "react";
import { TouchableOpacity, Text } from "react-native";

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <TouchableOpacity onPress={increment}>
      <Text>Count: {count}</Text>
      <Text>Double Count: {doubleCount}</Text>
    </TouchableOpacity>
  );
}
