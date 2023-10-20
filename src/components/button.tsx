import { Box } from "@/css";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box bg="blu200" p="4" borderRadius="rounded-3xl">
        <Text>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({});
