import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import Navigation from '@/navigations';


export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}