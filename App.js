import React, { Component } from 'react';
import axios from 'axios';
import { Alert, StyleSheet, Text, View, TouchableHighlight, Clipboard } from 'react-native'
// import Bananas from './src/components/image';
// import Touchables from './src/components/touchables';

export default class ButtonBasics extends Component {
  constructor()
  {
    super()
    this.state = {
      answer_text: 'Tap below for a Donald Trump quote.'
    }
  }
  _onPressButton = () => {
    let url = 'https://api.tronalddump.io/random/quote';
    axios.get(url).then(
      response => this.setState(
        {
          answer_text: response.data.value + '\n\n- Donald J Trump'
        }
      )
    );
  }

  _onLongPressButton = () => {
    Clipboard.setString(this.state.answer_text)
    Alert.alert('Tada!  Unbelievable quote copied to clipboard!!')
  }

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.view}>
          <Text id="answer_text" style={styles.viewText}>{this.state.answer_text}</Text>
        </View>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="#EDF0F2">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tap or Long Press me!</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF0F2'
  },
  view: {
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
    width: 320,
    minHeight: 200,
    // height: 400,
    alignItems: 'center',
    // padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.1,
    borderRadius: 2,

  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#6020E5',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  viewText: {
    padding: 20,
    color: 'black'
  }
});

// export default class HelloWorldApp extends Component {
//   render () 
//   {
//     return (
//       <View>
//         <Text style={{textAlign: 'center', borderColor: 'red', borderWidth: 1, height: '100%', lineHeight: 100}} >Hello World!</Text>
//         <Bananas></Bananas>
//       </View>
//     );
//   }
// }