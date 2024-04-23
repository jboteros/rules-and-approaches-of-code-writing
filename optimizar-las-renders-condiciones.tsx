// bad
import React from "react";
import { View, Text } from "react-native";

function MyComponent({ isLoggedIn }) {
  return (
    <View>
      {isLoggedIn ? (
        <Text>Bienvenido Usuario!</Text>
      ) : (
        <Text>Por favor, inicia sesión.</Text>
      )}
    </View>
  );
}

// good
import React from "react";
import { View, Text } from "react-native";

function MyComponent({ isLoggedIn }) {
  function renderContent() {
    if (isLoggedIn) {
      return <Text>Bienvenido Usuario!</Text>;
    } else {
      return <Text>Por favor, inicia sesión.</Text>;
    }
  }

  return <View>{renderContent()}</View>;
}
