import { createTamagui } from 'tamagui'
import { themes, tokens } from '@tamagui/themes'

const config = createTamagui({
  themes,
  tokens,
  components: {
    Button: {
      color: '$color',
      backgroundColor: '$background',
      padding: '$3',
      borderRadius: '$2',
    },
  },
})

export type AppConfig = typeof config

export default config
