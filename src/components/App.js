import React from 'react';

// IMAGENS
import favicon from '@Images/favicon.png';

// UTILIDADES
import theme from '@Utils/theme.js';

// COMPONENTES
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import FontFace from '@Global/components/FontFace';
import SmoothReset from '@Global/components/SmoothReset';

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href={favicon} />
        <title>Meu Freela - Leonardo Teixeira</title>
      </Helmet>
      <FontFace />
      <ThemeProvider theme={theme}>
        <SmoothReset />
        <h1>Novo projeto React</h1>
      </ThemeProvider>
    </>
  );
};

export default App;