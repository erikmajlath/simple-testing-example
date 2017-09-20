import React from 'react'

export default WrappedComponent => props =>
  <WrappedComponent {...props} onChange={newOnChange.bind(null, props)} />

const newOnChange = (props, option, isSelected) => {
  const additionalInfo = { option, isSelected }
  let newValue

  if (isSelected) {
    newValue = props.value.filter(value => value !== option.value)
  } else {
    newValue = props.value.concat([option.value])
  }

  props.onChange(newValue, additionalInfo)
}
