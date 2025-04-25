import React from 'react'
import { View } from 'react-native'
import { Todo } from './components/Todo'

export default function TodoPage() {
  return (
    <View className="flex-1 bg-white">
      <Todo />
    </View>
  )
} 