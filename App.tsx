import React from 'react';
import Navigation from '@/navigations';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@/css/';


export default function App() {
  return (
    <ThemeProvider theme={theme}> 
          <Navigation />
    </ThemeProvider>
  );
}