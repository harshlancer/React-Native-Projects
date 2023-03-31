import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <View>
        <FlatCards/>
        <Text>App</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App