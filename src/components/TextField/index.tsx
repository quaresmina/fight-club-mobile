import { Text, TextInput } from "react-native";
import { FieldView, TextInputField } from "./styles";

export function TextField({ title }: TextFieldProps) {
  return (
    <FieldView>
      {title && <Text>{title}</Text>}
      <TextInputField />
    </FieldView>
  );
}

interface TextFieldProps {
  title?: string;
}
