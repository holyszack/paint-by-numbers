import { InputOnChangeData } from "semantic-ui-react/dist/commonjs/elements/Input/Input";

export const fileInput = (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData): string => data.value;
