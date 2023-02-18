import React from "react";  
import { StyleSheet, View, Text,  } from "react-native";

import Tela1 from './src/screens/Tela1_login'
import Tela2 from './src/screens/Tela2_cadastro'
import Tela3 from './src/screens/Tela3_feed'
import Tela4 from './src/screens/Tela4_funcionamento'


const App = () => {
  return (
    <View style={styles.container} >
      <Tela1/>
      {/* <Tela2/> */}
      {/* <Tela3/> */}
      {/* <Tela4/> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App