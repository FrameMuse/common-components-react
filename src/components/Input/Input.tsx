import "./Input.scss"

import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react"
import { classMerge } from "utils"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

function Input(props: InputProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(event)
  }
  return (
    <label className="input">
      <input {...props} className={classMerge("input__input", props.className)} placeholder={props.placeholder + (props.required ? "*" : "")} onChange={onChange} />
    </label>
  )
}

export default Input
