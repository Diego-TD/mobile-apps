import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";

export default function DetalleContactoScreen() {
  const router = useRouter();
  const { nombre, telefono, email } = useLocalSearchParams<{
    id: string;
    nombre: string;
    telefono: string;
    email: string;
  }>();

  const iniciales = nombre
    ? nombre
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "?";

  const llamarContacto = () => {
    Linking.openURL(`tel:${telefono}`);
  };

  const enviarEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <>
      {/* Sets the header title dynamically to the contact's name */}
      <Stack.Screen options={{ title: nombre || "Detalle del Contacto" }} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
      >
        <View style={styles.avatarGrande}>
          <Text style={styles.inicialesGrandes}>{iniciales}</Text>
        </View>

        <Text style={styles.nombre}>{nombre}</Text>

        <View style={styles.tarjetaInfo}>
          <Text style={styles.etiqueta}>📞 Teléfono</Text>
          <Text style={styles.valor}>{telefono}</Text>
        </View>

        <View style={styles.tarjetaInfo}>
          <Text style={styles.etiqueta}>✉️ Email</Text>
          <Text style={styles.valor}>{email}</Text>
        </View>

        <TouchableOpacity style={styles.botonPrimario} onPress={llamarContacto}>
          <Text style={styles.textoBoton}>📞 Llamar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonSecundario} onPress={enviarEmail}>
          <Text style={styles.textoBotonSecundario}>✉️ Enviar Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonRegresar}
          onPress={() => router.back()}
        >
          <Text style={styles.textoBotonRegresar}>← Regresar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  avatarGrande: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FDB813",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  inicialesGrandes: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#000000",
  },
  nombre: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 30,
  },
  tarjetaInfo: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  etiqueta: {
    fontSize: 14,
    color: "#4A4A4A",
    marginBottom: 5,
  },
  valor: {
    fontSize: 18,
    color: "#1A1A1A",
    fontWeight: "500",
  },
  botonPrimario: {
    backgroundColor: "#FDB813",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBoton: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  botonSecundario: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "#FDB813",
  },
  textoBotonSecundario: {
    color: "#1A1A1A",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  botonRegresar: {
    backgroundColor: "#4A4A4A",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  textoBotonRegresar: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
