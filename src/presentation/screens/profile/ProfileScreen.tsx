import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Name: {name}</Text>
      <Text style={globalStyles.title}>Email: {email}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Jhon Dos'})}>
        <Text>Cambiar el nombre</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('Jhon Doe', 'Jhon.doe@example.com')}>
        <Text>Regresar a Jhon Doe</Text>
      </Pressable>
    </View>
  );
};
