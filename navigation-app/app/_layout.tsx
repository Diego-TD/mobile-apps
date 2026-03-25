import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FDB813",
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Iniciar Sesión",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          title: "Inicio",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="contactos"
        options={{
          title: "Mis Contactos",
        }}
      />
      <Stack.Screen
        name="detalle-contacto"
        options={{
          title: "Detalle del Contacto",
        }}
      />
    </Stack>
  );
}
