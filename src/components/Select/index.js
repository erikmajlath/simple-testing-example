import { compose } from 'redux'

import Options from './Options'
import WithMultiSelect from './WithMultiSelect'
import WithAllOption from './WithAllOption'
export * from './Options'

export default compose(WithAllOption, WithMultiSelect)(Options)
