import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 p-5 gap-5 align-center justify-center bg-red-50">
      <StatusBar style="auto" />
      <View className="bg-green-500 p-3 shadow-lg">
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <View 
        style={{
          backgroundColor: 'rgb(34, 197, 94)', 
          padding: 12, 
          shadowColor: 'rgba(0, 0, 0, 1)', 
          shadowOffset: {
            width: 5, 
            height: 10
          }, 
          shadowRadius: 8, 
          elevation: 8, 
          shadowOpacity: 0.25
        }}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>
  );
}
