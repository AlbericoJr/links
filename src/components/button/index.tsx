import { styles } from "./styles";

import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({title, ...rest}: Props) {
  return(
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
