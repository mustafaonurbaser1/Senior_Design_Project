
import React , {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme,lightTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import { Helmet } from 'react-helmet';
import { RouteS } from './Routes';




export const ThemeContext = React.createContext(null)

function App() {

 

  const [theme,setTheme] = useState("light")

  const themeStyle = theme === "light" ? lightTheme : darkTheme
  return (


 <ThemeContext.Provider value={{setTheme,theme}}>
    <ThemeProvider theme = {themeStyle}>
    <GlobalStyle/>
    
    <Helmet>
        <title>Event</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&family=Kanit:wght@400;900&family=Poppins:wght@300;400;500;700&family=Readex+Pro:wght@200;300;400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      
        <RouteS />
     
 
    </ThemeProvider>
    </ThemeContext.Provider>


  );
}

export default App;
