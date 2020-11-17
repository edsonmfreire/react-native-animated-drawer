import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from './styles';

type Props = {
  navigation: any;
};

export default function (props: Props) {
  return (
    <View style={Styles.view}>
      <Text>Internal Page</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
