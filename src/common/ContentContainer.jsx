import React from 'react';
import * as css from './ContentContainer.css';
import * as cx from 'classnames';

export class ContentContainer extends React.Component {
    render() {
        return <div className={cx(this.props.className, css.container)}>
                { this.props.children }
            </div>
    
    }
}