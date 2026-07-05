import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/geist'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/700.css'

import './custom.css'

export default {
  extends: DefaultTheme
} satisfies Theme
