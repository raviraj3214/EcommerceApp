// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import Home from '../screens/Home';
// import {RoutesList} from './routes';
// import {publicRoutes} from './publicRoutes';
// import ReduxWrapper from '../utils/ReduxWrapper';
// import TabNavigationStack from './TabNavigationStack';

// const Stack = createStackNavigator();

// function MainStack({auth}) {
  
//   return ( 
//     <NavigationContainer>
//     auth.isGuest ? 
    
//       <Stack.Navigator screenOptions={{ 
//           headerShown: false,
//         }}>
//         {publicRoutes?.map((route, key) => {
//           const {name, component} = route;
//           return <Stack.Screen key={key} name={name} component={component} />;
//         })}
//       </Stack.Navigator>
//     :
//     <TabNavigationStack />
//     </NavigationContainer>

//   );
// }

// export default  ReduxWrapper(MainStack)
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import { RoutesList } from './routes';
import { publicRoutes } from './publicRoutes';
import ReduxWrapper from '../utils/ReduxWrapper';
import TabNavigationStack from './TabNavigationStack';

const Stack = createStackNavigator();

function MainStack({ auth }) {

  return (
    <NavigationContainer>
      {auth.isGuest ? (
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          {publicRoutes?.map((route, key) => {
            const { name, component } = route;
            return <Stack.Screen key={key} name={name} component={component} />;
          })}
        </Stack.Navigator>
      ) : (
        <TabNavigationStack />
      )}
    </NavigationContainer>

  );
}

export default ReduxWrapper(MainStack);

