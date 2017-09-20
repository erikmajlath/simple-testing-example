import React from 'react'

const EMPTY_ARRAY = []
export const ALL_OPTION = { value: 'ALL_OPTION', label: 'All' }

export default WrappedComponent => props => {
  const newProps = {}

  // Add all option to the front
  newProps.options = [ALL_OPTION].concat(props.options)

  // If 'all' is passed as value select all options
  if (props.value === 'all') {
    newProps.value = newProps.options.map(item => item.value)
  }

  // Modify onChange function
  // TODO: move this function outside the component
  newProps.onChange = (value, additionalInfo) => {
    const { option, isSelected } = additionalInfo
    // First we are dealing with all option
    if (option === ALL_OPTION) {
      if (!isSelected) {
        // It has been selected
        return props.onChange('all', additionalInfo)
      } else {
        // It has been deselected
        return props.onChange(EMPTY_ARRAY, additionalInfo)
      }
    }

    // All are selected and we are deselecting
    // Filter away deselected option and select all other
    if (isSelected && props.value === 'all') {
      return props.onChange(
        props.options.filter(item => item !== option).map(item => item.value),
        additionalInfo
      )
    }

    // If all options other then all has been selected, select all
    if (!isSelected && props.options.length === props.value.length + 1) {
      return props.onChange('all', additionalInfo)
    }

    // None of the special cases happened so just pass selected values
    props.onChange(value, additionalInfo)
  }

  return <WrappedComponent {...props} {...newProps} />
}
