import { ColorRepresentation } from "three";

export type colorProp = {
  color:
    | [color: ColorRepresentation]
    | [r: number, g: number, b: number]
    | undefined;
};
