import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const characteristics = [
  "✓ Pantalla completa con header de navegación nativo",
  "✓ Botón de cierre automático (iOS) o back (Android)",
  "✓ Tiene su propia URL: /modal",
  "✓ Ideal para formularios grandes o flujos completos",
  "✗ No hay overlay — la pantalla anterior desaparece",
];

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.card}>
          <Text style={styles.title}>Modal como Pantalla Completa</Text>
          <Text style={styles.subtitle}>
            Esta pantalla es una <Text style={styles.code}>RUTA</Text> de Expo
            Router configurada con{" "}
            <Text style={styles.code}>presentation: &apos;modal&apos;</Text> en{" "}
            <Text style={styles.code}>_layout.tsx</Text>.
          </Text>
          <View style={styles.divider} />
          {characteristics.map((item, index) => (
            <Text
              key={index}
              style={[
                styles.characteristicText,
                item.startsWith("✗") && styles.negativeText,
              ]}
            >
              {item}
            </Text>
          ))}
        </View>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inner: {
    width: "100%",
    maxWidth: 480,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6C6C70",
    lineHeight: 22,
  },
  code: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    backgroundColor: "#F2F2F7",
    color: "#007AFF",
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 16,
  },
  characteristicText: {
    fontSize: 14,
    color: "#1A1A1A",
    lineHeight: 28,
  },
  negativeText: {
    color: "#8E8E93",
  },
  closeButton: {
    backgroundColor: "#007AFF",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
