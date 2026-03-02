import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { contactosMock } from "../data/contactos";

export default function Contacts() {
  // TAREA 1: Estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState("");

  // TAREA 2: Filtra los contactos según el término de búsqueda
  const contactosFiltrados = contactosMock.filter((contacto) => {
    const termino = busqueda.toLowerCase();
    return (
      contacto.nombre.toLowerCase().includes(termino) ||
      contacto.empresa.toLowerCase().includes(termino) ||
      contacto.email.toLowerCase().includes(termino) ||
      contacto.telefono.includes(termino)
    );
  });

  // Componente para renderizar cada contacto
  const renderContacto = ({ item }) => (
    <View style={styles.contactoCard}>
      <View style={styles.avatarCirculo}>
        <Text style={styles.avatarTexto}>
          {item.nombre
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nombreContacto}>{item.nombre}</Text>
        <Text style={styles.empresaContacto}>{item.empresa}</Text>
        <Text style={styles.detalleContacto}>{item.telefono}</Text>
        <Text style={styles.detalleContacto}>{item.email}</Text>
      </View>
    </View>
  );

  // TAREA 3: Componente separador entre contactos
  const SeparadorContacto = () => <View style={styles.separador} />;

  // TAREA 4: Header de la lista con el conteo de resultados
  const HeaderLista = () => (
    <View style={styles.headerLista}>
      <Text style={styles.textoHeader}>
        {contactosFiltrados.length} contactos encontrados
      </Text>
    </View>
  );

  // TAREA 5: Componente de lista vacía
  const ListaVacia = () => (
    <View style={styles.listaVacia}>
      <Text style={styles.listaVaciaIcono}>🔍</Text>
      <Text style={styles.listaVaciaTexto}>
        No se encontraron contactos para "{busqueda}"
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Contactos</Text>
      </View>

      {/* Barra de Búsqueda */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar contacto..."
          value={busqueda}
          onChangeText={setBusqueda}
        />
      </View>

      {/* TAREA 6: Lista de Contactos con todas las props configuradas */}
      <FlatList
        data={contactosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderContacto}
        ItemSeparatorComponent={SeparadorContacto}
        ListHeaderComponent={HeaderLista}
        ListEmptyComponent={ListaVacia}
        // BONUS: Optimizaciones de rendimiento
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        windowSize={10}
      />
    </SafeAreaView>
  );
}

// TAREA 7: Estilos completos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    backgroundColor: "#FDB813",
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  contactoCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginHorizontal: 15,
    alignItems: "center",
  },
  avatarCirculo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FDB813",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarTexto: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  infoContainer: {
    flex: 1,
  },
  nombreContacto: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  empresaContacto: {
    fontSize: 14,
    color: "#FDB813",
    marginBottom: 4,
  },
  detalleContacto: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  // TAREA 7: Estilos para separador, header y lista vacía
  separador: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 15,
  },
  headerLista: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  textoHeader: {
    fontSize: 13,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  listaVacia: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 30,
  },
  listaVaciaIcono: {
    fontSize: 48,
    marginBottom: 16,
  },
  listaVaciaTexto: {
    fontSize: 16,
    color: "#9E9E9E",
    textAlign: "center",
    fontStyle: "italic",
  },
});
