import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../routes';
import ProductCommentsScreen from './ProductCommentsScreen';
import ProductInfoScreen from './ProductInfoScreen';
import ProductQuestionsScreen from './ProductQuestionsScreen';
import ProductSpecificationsScreen from './ProductSpecificationsScreen';
import ProductVendorScreen from './ProductVendorScreen';

const Tab = createBottomTabNavigator();

export default function ProductDetailScreen(props) {
  const { product } = props.route.params;

  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={Routes.ProductInfoScreen}>
        {() => <ProductInfoScreen product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.ProductSpecificationsScreen}>
        {() => <ProductSpecificationsScreen product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.ProductVendorScreen}>
        {() => <ProductVendorScreen product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.ProductCommentsScreen}>
        {() => <ProductCommentsScreen product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.ProductQuestionsScreen}>
        {() => <ProductQuestionsScreen product={product} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}