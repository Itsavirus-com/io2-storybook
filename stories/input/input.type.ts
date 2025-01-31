import { FormControlProps } from "react-bootstrap"

export type InputProps = FormControlProps & {
  label?: string
  name: string
  containerClass?: string
  step?: number
  min?: number
  max?: number
  isRequired?: boolean
  inputType?: string
}