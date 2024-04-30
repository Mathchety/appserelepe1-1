import { NavigationContainer } from '@react-navigation/native';
import TabsRoutes from './tb.routes';
import React from 'react';

export default function Routes(){
    return (
        <NavigationContainer independent={true}>
            <TabsRoutes/>
        </NavigationContainer>
    )
}

//dentro de navegation container é para colocar a estrategia de navegation, como por exemplo o stack ou tab. 