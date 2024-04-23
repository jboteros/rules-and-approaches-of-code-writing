// 1 Pre-carga de imágenes
import React from "react";
import { Image } from "react-native";

const importantImage = require("./path/to/important-image.png");
Image.prefetch(importantImage);

const MyImageComponent = () => {
  return <Image source={importantImage} />;
};

// 2 Optimización de imágenes en React Native usando FastImage (Cached images)
import React from "react";
import FastImage from "react-native-fast-image";

const MyFastImageComponent = ({ uri }) => {
  return (
    <FastImage
      style={{ width: 100, height: 100 }}
      source={{
        uri: uri,
        headers: { Authorization: "someAuthToken" },
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

// 3 Usar React.memo para evitar re-renderizados innecesarios
import React, { memo } from "react";
import { Image } from "react-native";

const MyImageComponent = memo(({ src }) => (
  <Image
    source={{ uri: src, cache: "only-if-cached" }}
    style={{ width: 100, height: 100 }}
    resizeMode="cover"
  />
));

export default MyImageComponent;
