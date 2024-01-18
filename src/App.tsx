import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './core-features/apollo';
import styles from './App.style.css';
import { RouterProvider } from 'react-router-dom';
import AppRouter from '../src/configuration/routes';

const App = React.memo(() => {
    return (
        <ApolloProvider client={client}>
            <div className={styles.container}>
                <RouterProvider router={AppRouter}/>
            </div>
        </ApolloProvider>
    )
});

export default App;
