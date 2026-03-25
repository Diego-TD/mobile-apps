import { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { ConfirmModal } from "./components/ConfirmModal";
import { FormModal } from "./components/FormModal";
import { ImageModal } from "./components/ImageModal";

export default function Index() {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.heading}>Demostración de Modales</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <View style={styles.inner}>
          {/* ── Section 1: Expo Router Modal Screen ── */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>
              1. Modal como Pantalla (Expo Router)
            </Text>
            <Text style={styles.description}>
              Navega a una ruta separada <Text style={styles.code}>/modal</Text>{" "}
              con animación nativa completa. La pantalla anterior desaparece.
            </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#007AFF" }]}
              onPress={() => router.push("/modal")}
            >
              <Text style={styles.buttonText}>
                Abrir Modal Pantalla Completa →
              </Text>
            </TouchableOpacity>
          </View>

          {/* ── Section 2: Custom Modal Component ── */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>
              2. Modal Personalizado (Componente)
            </Text>
            <Text style={styles.description}>
              Overlay sobre la pantalla actual, controlado con estado local.
              Esta pantalla sigue visible debajo.
            </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#FF3B30" }]}
              onPress={() => setConfirmModalVisible(true)}
            >
              <Text style={styles.buttonText}>Abrir Modal de Confirmación</Text>
            </TouchableOpacity>
            <View style={{ height: 10 }} />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#34C759" }]}
              onPress={() => setFormModalVisible(true)}
            >
              <Text style={styles.buttonText}>Abrir Modal de Formulario</Text>
            </TouchableOpacity>
            <View style={{ height: 10 }} />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#2731F5" }]}
              onPress={() => setImageModalVisible(true)}
            >
              <Text style={styles.buttonText}>Abrir Modal de imagenes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <ConfirmModal
        visible={confirmModalVisible}
        onClose={() => setConfirmModalVisible(false)}
      />
      <FormModal
        visible={formModalVisible}
        onClose={() => setFormModalVisible(false)}
      />

      <ImageModal
        visible={imageModalVisible}
        onClose={() => setImageModalVisible(false)}
        title="Galeria chida"
        images={[
          "https://i.imgur.com/UZywrS3.jpeg",
          "https://i.imgur.com/ofS9ZoQ.jpeg",
        ]}
        initialIndex={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C8C8CC",
  },
  heading: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  scrollView: {
    backgroundColor: "#F2F2F7",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    backgroundColor: "#F2F2F7",
  },
  inner: {
    width: "100%",
    maxWidth: 480,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#6C6C70",
    marginBottom: 14,
    lineHeight: 20,
  },
  code: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    backgroundColor: "#F2F2F7",
    color: "#007AFF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: { elevation: 2 },
    }),
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
