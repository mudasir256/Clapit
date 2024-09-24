import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { GlobalStyles } from '../ThemeConfig';
import { lightTheme, darkTheme } from '../Constants/theme';
import Layout from '../Layout';
import { ChakraProvider } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ChakraProvider>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Layout toggleTheme={toggleTheme} currentTheme={currentTheme}>
        <Component {...pageProps} currentTheme={currentTheme} />
      </Layout>
    </ThemeProvider>
  </ChakraProvider>
  );
}

export default MyApp;
