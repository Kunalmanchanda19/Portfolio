import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans',
  },
})

function App() {
  return (
    <div className="App">
     
      <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Header/>
    </ThemeProvider>
    </div>
  );
}

export default App;
