import React from 'react'

export default ({ options, value, onChange }) =>
  <ul>
    {options.map(item => {
      const selected = value.includes(item.value)
      return (
        <li key={item.value} onClick={() => onChange(item, selected)}>
          {item.label}
          <span>
            {selected && ' - SELECTED!'}
          </span>
        </li>
      )
    })}
  </ul>

// Constants
export const SF = { value: 'sf', label: 'San Francisco' }
export const LA = { value: 'la', label: 'Los Angeles' }
export const NY = { value: 'ny', label: 'New York City' }

export const OPTIONS = [SF, LA, NY]
