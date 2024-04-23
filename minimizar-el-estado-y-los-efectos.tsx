// bad
import React, { useState } from "react";
import { Text, View } from "react-native";

function ChildComponent({ user }) {
  return <Text>{user}</Text>;
}

function ParentComponent({ user }) {
  return <ChildComponent user={user} />;
}

export default function App() {
  const [user, setUser] = useState("John Doe");

  return (
    <View>
      <ParentComponent user={user} />
    </View>
  );
}

// good
import React, { useState, createContext, useContext } from "react";
import { Text, View } from "react-native";

const UserContext = createContext();

function ChildComponent() {
  const user = useContext(UserContext);

  return <Text>{user}</Text>;
}

function ParentComponent() {
  return <ChildComponent />;
}

export default function App() {
  const [user, setUser] = useState("John Doe");

  return (
    <UserContext.Provider value={user}>
      <View>
        <ParentComponent />
      </View>
    </UserContext.Provider>
  );
}
