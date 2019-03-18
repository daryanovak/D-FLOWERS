import 'normalize.css';
import React from 'react';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { Main } from './main/Main';
import * as css from './App.css';
import '../public/favicon.ico';

export class App extends React.Component {
    render() {
        return (
            <div className={css.container}>
                <Header />
                <main className={css.main}>
                    <Main/>
                </main>
                <Footer />
            </div>

        );
    }
}
