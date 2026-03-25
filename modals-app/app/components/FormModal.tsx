import { useState } from "react";
import { Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { CustomModal } from "./CustomModal";

interface FormModalProps {
  visible: boolean;
  onClose: () => void;
}

export const FormModal = ({ visible, onClose }: FormModalProps) => {
  const [name, setName] = useState("");

  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title="Agregar Nombre"
      animationType="slide"
    >
      <TextInput
        style={styles.input}
        placeholder="Escribe un nombre..."
        value={name}
        onChangeText={setName}
        returnKeyType="done"
        autoFocus
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Guardando:", name);
          onClose();
          setName("");
        }}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    marginBottom: 14,
    color: "#1A1A1A",
  },
  button: {
    backgroundColor: "#007AFF",
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
