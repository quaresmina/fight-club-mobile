import { CustomText } from "./styles";

export function Text({ color, fontSize }: TextProps) {
  return <CustomText style={{ color, fontSize }}></CustomText>;
}

interface TextProps {
  children: string;
  color: string;
  fontSize: number;
}
