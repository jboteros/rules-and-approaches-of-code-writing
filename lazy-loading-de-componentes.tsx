import React, { useState } from "react";
import { View, Button, Text } from "react-native";

function App() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  // Función para cargar el componente pesado dinámicamente
  const loadHeavyComponent = async () => {
    const { default: HeavyComponent } = await import("./HeavyComponent");
    return <HeavyComponent />;
  };

  return (
    <View>
      <Button
        title="Cargar Componente Pesado"
        onPress={() => setShowHeavyComponent(true)}
      />
      {showHeavyComponent && (
        <React.Suspense fallback={<Text>Cargando...</Text>}>
          {loadHeavyComponent()}
        </React.Suspense>
      )}
    </View>
  );
}
