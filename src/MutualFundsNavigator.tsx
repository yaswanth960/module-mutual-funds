import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { FundsHomeScreen } from './screens/FundsHomeScreen';
import { FundDetailsScreen } from './screens/FundDetailsScreen';
import { FundPerformanceScreen } from './screens/FundPerformanceScreen';
import { FundsPortfolioScreen } from './screens/FundsPortfolioScreen';
import type { MutualFundsStackParamList } from './types';

const Stack = createNativeStackNavigator<MutualFundsStackParamList>();

const HOME = 'FundsHome' as const;

export function MutualFundsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) =>
        route.name === HOME
          ? {
              headerLeft: (props) => <DrawerToggleButton {...props} />,
            }
          : {}
      }>
      <Stack.Screen
        name="FundsHome"
        component={FundsHomeScreen}
        options={{ title: 'Funds Home' }}
      />
      <Stack.Screen
        name="FundDetails"
        component={FundDetailsScreen}
        options={{ title: 'Fund Details' }}
      />
      <Stack.Screen
        name="FundPerformance"
        component={FundPerformanceScreen}
        options={{ title: 'Performance' }}
      />
      <Stack.Screen
        name="FundsPortfolio"
        component={FundsPortfolioScreen}
        options={{ title: 'My Portfolio' }}
      />
    </Stack.Navigator>
  );
}
