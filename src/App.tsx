import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './core-features/apollo';
import styles from './App.style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../src/configuration/routes';

interface propType { }

const App: React.FC<propType> = React.memo(() => {
    return (
        <ApolloProvider client={client}>
            <div className={styles.container}>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route) => <Route exact={route.exact} path={route.path} key={route.name} component={route.component} />)}
                    </Switch>
                </BrowserRouter>
            </div>
        </ApolloProvider>
    )
});

export default App;
