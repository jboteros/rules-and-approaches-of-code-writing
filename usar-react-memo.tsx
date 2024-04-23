// bad
import React from "react";
import { Text } from "react-native";

function MyComponent({ title }) {
  console.log(
    "Este componente se renderiza cada vez que se actualiza el padre"
  );
  return <Text>{title}</Text>;
}

// good
import React from "react";
import { Text } from "react-native";

const MyComponent = React.memo(function MyComponent({ title }) {
  console.log("Este componente solo se renderiza si sus props cambian");
  return <Text>{title}</Text>;
});
