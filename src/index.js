import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Provider from 'react-redux/lib/components/Provider';
import {theme, GlobalStyle} from './theme/styledTheme';
import {store} from './store';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyle/>
                <App/>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
