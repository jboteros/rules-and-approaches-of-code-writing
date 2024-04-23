// bad
import React, { useEffect } from "react";
import { View } from "react-native";

function MyComponent() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // hacer algo
    }, 1000);

    // Olvidar la limpieza
  });

  return <View />;
}

// good
import React, { useEffect } from "react";
import { View } from "react-native";

function MyComponent() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // hacer algo
    }, 1000);

    // Proporcionar la limpieza para evitar memory leaks
    return () => {
      clearTimeout(timer);
    };
  });

  return <View />;
}
