import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { button, text } = styles;
  
  return (
    <TouchableOpacity onPress={onPress} style={button}>
      <Text style={text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    color: '#121212',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#121212',
    marginTop: 15,
    marginLeft: 45,
    marginRight: 45,
  }
};

export default Button;