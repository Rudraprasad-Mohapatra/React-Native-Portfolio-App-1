import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element {
    console.log(useColorScheme());
    let isDarkMode = useColorScheme() === 'dark';
  return (
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText:styles.whiteText}>Ram Ram</Text>
      </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  },
  darkText : {
    color: "#FFFFFF"
  },
  whiteText : {
    color: "#OOOOOO"
  }
})

export default AppPro;
