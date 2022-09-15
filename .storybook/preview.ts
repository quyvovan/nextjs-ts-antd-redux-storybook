import { withNextRouter } from 'storybook-addon-next-router'

import 'src/i18n'
import './storybook.css'

export const decorators = [withNextRouter()]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
