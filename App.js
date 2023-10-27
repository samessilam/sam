import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import FAQScreen from './src/screens/FAQScreen';
import Accordian from './src/components/Accordion';




const App=()=>{
  return(
    <SafeAreaView style={styles.root}>
    
    {/* <SignInScreen/> */}
    <FAQScreen/>
    <Text>Hello World !!!!</Text>
    </SafeAreaView>
  );
};

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World !!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#003822',
    alignItems: 'center',
  
  },
});
 export default App;
