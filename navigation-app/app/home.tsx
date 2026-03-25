import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { showAlert } from "../utils/alert";

export default function HomeScreen() {
  const router = useRouter();
  const { nombreUsuario } = useLocalSearchParams<{ nombreUsuario: string }>();

  const cerrarSesion = () => {
    showAlert("Cerrar Sesión", "¿Estás seguro de que deseas salir?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Salir",
        style: "destructive",
        onPress: () => {
          router.replace("/");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bienvenida}>¡Bienvenido!</Text>
        <Text style={styles.nombreUsuario}>{nombreUsuario ?? "Usuario"}</Text>
      </View>
      <View style={styles.tarjeta}>
        <Text style={styles.emoji}>✅</Text>
        <Text style={styles.titulo}>Has iniciado sesión correctamente</Text>
        <Text style={styles.descripcion}>
          Esta es tu pantalla principal. Nota que NO puedes regresar a la
          pantalla de login usando el botón de retroceso.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.botonSecundario}
        onPress={() => router.push("/contactos")}
      >
        <Text style={styles.textoBotonSecundario}>📋 Ver Contactos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonSalir} onPress={cerrarSesion}>
        <Text style={styles.textoBotonSalir}> Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  bienvenida: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  nombreUsuario: {
    fontSize: 20,
    color: "#4A4A4A",
    marginTop: 5,
  },
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 30,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    color: "#4A4A4A",
    textAlign: "center",
    lineHeight: 24,
  },
  botonSecundario: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#FDB813",
  },
  textoBotonSecundario: {
    color: "#1A1A1A",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  botonSalir: {
    backgroundColor: "#FF5252",
    paddingVertical: 15,
    borderRadius: 8,
  },
  textoBotonSalir: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
