import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/counter-store';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Counter: {count}</Text>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => increment(count)}>
        <Text>+</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => decrement(count)}>
        <Text>-</Text>
      </Pressable>
    </View>
  );
};
