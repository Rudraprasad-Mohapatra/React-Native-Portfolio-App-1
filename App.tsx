import React from 'react';

import {View, Text, SafeAreaView, Button,  Alert} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <Button
        title="Hello World !"
        onPress={() => Alert.alert('Namaste Duniya !')}
      />
      </View>
    </SafeAreaView>
  );
}

export default App;
