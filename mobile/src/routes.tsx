import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanageDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes(){
    return (
        <NavigationContainer>
            {/* desabilita o header globalmente */}
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen 
                name="OrphanagesMap" 
                component={OrphanagesMap} 
                />

                <Screen 
                name="OrphanageDetails" 
                component={OrphanageDetails} 
                /> 
            </Navigator>
        </NavigationContainer>
    );
}