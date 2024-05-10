
import {StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
     <Box style={{ backgroundColor: "#8e9b00"}}>Box 1</Box>
     <Box style={{ backgroundColor: "#009b77"}}>Box 2</Box>
     <Box style={{ backgroundColor: "#8e9b00"}}>Box 3</Box>
     <Box style={{ backgroundColor: "#009b77"}}>Box 4</Box>
     <Box style={{ backgroundColor: "#8e9b00"}}>Box 5</Box>
     <Box style={{ backgroundColor: "#009b77"}}>Box 6</Box>
     <Box style={{ backgroundColor: "#8e9b00"}}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,//branch1
    borderWidth: 6,
    borderColor: "red",
  },
});
