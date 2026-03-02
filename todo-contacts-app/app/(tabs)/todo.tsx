import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function Todo() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() === "") {
      alert("Por favor escribe una tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now().toString(),
      texto: tarea,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
  };

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t,
      ),
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titulo}> Mi To-Do List</Text>
        <Text style={styles.subtitulo}>
          {tareas.length} {tareas.length === 1 ? "tarea" : "tareas"}
        </Text>
      </View>
      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nueva tarea..."
          value={tarea}
          onChangeText={setTarea}
          onSubmitEditing={agregarTarea}
        />
        <TouchableOpacity style={styles.botonAgregar} onPress={agregarTarea}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Tareas */}
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tareaContainer}>
            <TouchableOpacity
              style={styles.tareaContenido}
              onPress={() => toggleTarea(item.id)}
            >
              <View
                style={[
                  styles.checkbox,
                  item.completada && styles.checkboxCompletado,
                ]}
              />
              <Text
                style={[
                  styles.tareaTexto,
                  item.completada && styles.tareaCompletada,
                ]}
              >
                {item.texto}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonEliminar}
              onPress={() => eliminarTarea(item.id)}
            >
              <Text style={styles.textoEliminar}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.textoVacio}>
            No hay tareas. ¡Agrega una para empezar!
          </Text>
        }
      />
    </SafeAreaView>
  );
}

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
  subtitulo: {
    fontSize: 16,
    color: "#4A4A4A",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  botonAgregar: {
    backgroundColor: "#FDB813",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  textoBoton: {
    fontSize: 30,
    color: "#1A1A1A",
    fontWeight: "600",
  },
  tareaContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  tareaContenido: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FDB813",
    marginRight: 10,
  },
  checkboxCompletado: {
    backgroundColor: "#FDB813",
  },
  tareaTexto: {
    fontSize: 16,
    color: "#1A1A1A",
    flex: 1,
  },
  tareaCompletada: {
    textDecorationLine: "line-through",
    color: "#9E9E9E",
  },
  botonEliminar: {
    padding: 5,
  },
  textoEliminar: {
    fontSize: 20,
  },
  textoVacio: {
    textAlign: "center",
    fontSize: 16,
    color: "#9E9E9E",
    marginTop: 50,
    fontStyle: "italic",
  },
});
