import * as React from 'react';
import * as css from './PageCaption.css';
import * as cx from 'classnames';

export class PageCaption extends React.Component {
    render() {
        return <h2 className={ cx(css.caption, this.props.className) }>
            { this.props.children }
        </h2>
    }
}