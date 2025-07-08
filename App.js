import { registerRootComponent } from 'expo';
import React from 'react';
import AppNavigator from './screens/AppNavigator.js';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <AppNavigator />
        </ThemeProvider>
    );
}

registerRootComponent(App);
