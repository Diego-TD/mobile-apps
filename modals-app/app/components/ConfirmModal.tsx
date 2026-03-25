import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CustomModal } from "./CustomModal";

interface ConfirmModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ConfirmModal = ({ visible, onClose }: ConfirmModalProps) => {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title="¿Confirmar acción?"
      animationType="fade"
    >
      <Text style={styles.warningText}>
        Esta acción no se puede deshacer. ¿Estás seguro?
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.rowButton, { backgroundColor: "#F2F2F7" }]}
          onPress={onClose}
        >
          <Text style={[styles.rowButtonText, { color: "#FF3B30" }]}>
            Cancelar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.rowButton, { backgroundColor: "#34C759" }]}
          onPress={() => {
            console.log("Confirmed!");
            onClose();
          }}
        >
          <Text style={[styles.rowButtonText, { color: "#fff" }]}>
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  warningText: {
    fontSize: 15,
    color: "#4A4A4A",
    lineHeight: 22,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  rowButton: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  rowButtonText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
