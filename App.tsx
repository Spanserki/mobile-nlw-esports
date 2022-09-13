import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello word!
        </Text>
        <Button title='Enviar'/>
      <StatusBar style="auto"/>
    </View>
  );
}

interface buttonProps {
  title: string;
}

function Button({title}: buttonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.button}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20
  },
  button: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
    borderRadius: 8
  }
});
