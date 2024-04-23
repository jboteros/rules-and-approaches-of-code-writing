// bad
import React from "react";
import { ScrollView, Text, View } from "react-native";

function MyList({ data }) {
  return (
    <ScrollView>
      {data.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

//good
import React from "react";
import { FlatList, Text, View } from "react-native";

function MyList({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
