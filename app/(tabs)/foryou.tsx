import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}

const Library = () => {
  return(
  <View>
    <Text>
      Library
    </Text>
  </View>
  )
}

const Liked = () => {
  return(
  <View>
    <Text>
      Liked
    </Text>
  </View>
  )
}

const Suggested = () => {
  return(
  <View>
    <Text>
      Suggested
    </Text>
  </View>
  )
}

export default ForYou