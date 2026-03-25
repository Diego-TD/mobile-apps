import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { CONTACTOS_MOCK, Contacto } from "../data/contactosMock";

export default function ContactosScreen() {
  const router = useRouter();

  const renderContacto = useCallback(
    ({ item }: { item: Contacto }) => {
      const iniciales = item.nombre
        .split(" ")
        .map((n) => n[0])
        .join("");

      return (
        <TouchableOpacity
          style={styles.tarjetaContacto}
          onPress={() =>
            router.push({
              pathname: "/detalle-contacto",
              params: {
                id: item.id,
                nombre: item.nombre,
                telefono: item.telefono,
                email: item.email,
              },
            })
          }
        >
          <View style={styles.avatar}>
            <Text style={styles.iniciales}>{iniciales}</Text>
          </View>
          <View style={styles.infoContacto}>
            <Text style={styles.nombreContacto}>{item.nombre}</Text>
            <Text style={styles.telefonoContacto}>{item.telefono}</Text>
          </View>
          <Text style={styles.flecha}>›</Text>
        </TouchableOpacity>
      );
    },
    [router]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CONTACTOS_MOCK}
        renderItem={renderContacto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  lista: {
    padding: 15,
  },
  tarjetaContacto: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FDB813",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  iniciales: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  infoContacto: {
    flex: 1,
  },
  nombreContacto: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  telefonoContacto: {
    fontSize: 14,
    color: "#4A4A4A",
  },
  flecha: {
    fontSize: 24,
    color: "#4A4A4A",
  },
  separador: {
    height: 10,
  },
});
