import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Dropdown = ({ label, items, value, onValueChange, placeholder }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.input}>
                <RNPickerSelect
                    placeholder={{ label: placeholder || "Select an option", value: null }}
                    items={items}
                    onValueChange={onValueChange}
                    value={value}
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={false} // Ensures styling works properly
                />
            </View>
        </View>
    );
};

export default Dropdown;

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
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        color: "#000",
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        color: "#000",
    },
};
