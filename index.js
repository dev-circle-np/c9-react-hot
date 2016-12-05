import React from 'react'
import { render } from 'react-dom'

import {AppContainer } from 'react-hot-loader';

import App from './App'

render(
    <AppContainer>
    <App />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
                render(
                        <AppContainer>
                         {require('./App').default}
                       </AppContainer>,
                       document.getElementById('root')
    );
  });
}