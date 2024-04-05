import { useNavigation } from '@react-navigation/native';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Routes from '../routes';


export default function HomeScreen() {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(Routes.ProductListScreen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_960_720.jpg'}} 
          style={styles.logo}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>Bem-vindo ao Assessment</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Explorar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width,
    height: height * 0.6,
    resizeMode: 'cover',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
