import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import Navigation from '@/navigations';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@/css/';


export default function App() {
  return (
    <ThemeProvider theme={theme}> 
      <PaperProvider>
          <Navigation />
      </PaperProvider>
    </ThemeProvider>
  );
}