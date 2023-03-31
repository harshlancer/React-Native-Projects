import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import Cats from './components/Cats'
import Status from './components/Status'

const AppPro = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Status/>
            <Cats/>
            <FlatCards/>
            <ElevatedCards/>
            <FancyCards/>
            <ActionCard/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro