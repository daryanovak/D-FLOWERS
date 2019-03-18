import * as React from 'react';
import * as spinnerSVG from '../../public/images/spinner.svg';

export class Spinner extends React.Component {
    render() {
        return <div style={ { fill: '#B44E86', width: 100 } } dangerouslySetInnerHTML={ { __html: spinnerSVG } } />;
    }
}