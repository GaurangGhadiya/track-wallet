import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({ onConfirm, value, label, name = "dob" }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <Pressable style={styles.input} onPress={() => setIsVisible(true)}>
                <Text style={{ verticalAlign: "middle" }}>{value}</Text>
            </Pressable>

            <DateTimePickerModal
                isVisible={isVisible}
                mode="date"
                onConfirm={(date) => {
                    onConfirm(date, name);
                    setIsVisible(false);
                }}
                maximumDate={new Date()} 
                onCancel={() => setIsVisible(false)}
              
            />
        </View>
    );
};

export default DatePicker;
const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        width: "100%",
    },
    label: {
        fontSize: 14,
        color: "#333",
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#000",
        backgroundColor: "#fff",
        justifyContent: "center", // ✅ Centers text vertically
        alignItems: "flex-start", // ✅ Aligns text to the left
    },
});