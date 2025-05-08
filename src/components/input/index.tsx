import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { TextInput, TextInputProps } from "react-native";

export function Input({...rest}: TextInputProps) {
  return(
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  )
}
