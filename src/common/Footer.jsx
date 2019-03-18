import * as React from 'react';
import * as css from './Footer.css';

export class Footer extends React.Component {
    render() {
        return <div className={ css.container }>
            <div className={ css.logo }>© 2004—2019 tulpan-mart.by</div>
        </div>
    }
}