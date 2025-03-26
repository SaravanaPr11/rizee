import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../../../tamagui.config'
import { Button, Text, View } from 'tamagui'

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>Hello, Rizee! 🚀</Text>
        <Button>Click Me</Button>
      </View>
    </TamaguiProvider>
  )
}
