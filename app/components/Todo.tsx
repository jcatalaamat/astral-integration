import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

interface TodoItem {
  id: number
  text: string
  completed: boolean
}

export function Todo() {
  const [todos, setTodos] = React.useState<TodoItem[]>([
    { id: 1, text: 'Learn about animations', completed: false },
    { id: 2, text: 'Implement scroll effects', completed: false },
    { id: 3, text: 'Style with gradients', completed: false },
  ])
  const [newTodo, setNewTodo] = React.useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
    setNewTodo('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <View className="py-16 px-4 bg-white">
      <View className="max-w-3xl mx-auto">
        <Text className="text-3xl font-bold mb-8 animate-fade-up-on-scroll">Task Manager</Text>
        
        <View className="mb-6 flex flex-row gap-2">
          <TextInput
            value={newTodo}
            onChangeText={setNewTodo}
            placeholder="Add a new task..."
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          />
          <TouchableOpacity 
            onPress={addTodo}
            className="bg-purple-600 px-6 py-3 rounded-lg"
          >
            <Text className="text-white font-medium">Add</Text>
          </TouchableOpacity>
        </View>
        
        <View className="grid grid-cols-1 gap-4">
          {todos.map((todo, index) => (
            <View 
              key={todo.id} 
              className="animate-fade-up-on-scroll transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <View 
                className={`w-full rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  todo.completed ? 'bg-emerald-600' : 'bg-purple-600'
                }`}
              >
                <View className="p-6 flex flex-row items-center justify-between">
                  <Text className={`text-lg font-medium text-white ${todo.completed ? 'line-through opacity-70' : ''}`}>
                    {todo.text}
                  </Text>
                  <TouchableOpacity 
                    onPress={() => toggleTodo(todo.id)}
                    className={`px-4 py-2 rounded-md shadow-sm ${
                      todo.completed 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-white text-purple-800'
                    }`}
                  >
                    <Text className="font-medium">{todo.completed ? 'Completed' : 'Mark Complete'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
} 