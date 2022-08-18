import * as React from 'react';
import { Button, View} from 'react-native';
import NavBar from '../src/UI/components/NavBar';
import StyleSheet from 'react-style';
export default function styles ({ navigation }) {
    const styles = StyleSheet.create({
        primary: {
          background: 'green'
        },
        warning: {
          background: 'yellow'
        },
        button: {
          padding: '1em'
        },
        // media queries
        '@media (max-width: 200px)': {
          button: {
            width: '100%'
          }
        }
      });
  return (
   
      <button styles={[styles.button, styles.primary]}>Confirm</button>
  );
}

