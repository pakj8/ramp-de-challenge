import classNames from "classnames"

export interface InputCheckboxComponentProps {
  id: string
  checked?: boolean
  disabled?: boolean
  onChange: (newValue: boolean) => void
}

export const InputCheckbox: React.FC<InputCheckboxComponentProps> = ({
  id,
  checked = false,
  disabled,
  onChange,
}) => {
  return (
    <div className="RampInputCheckbox--container" data-testid={`RampInputCheckbox-${id}`}>
      <label
        htmlFor={id}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={id}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          if (!disabled) {
            onChange(event.target.checked) // Use event.target.checked to get the new value
          }
        }}
      />
    </div>
  )
}
