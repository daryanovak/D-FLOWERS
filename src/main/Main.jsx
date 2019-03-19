import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';
import { Contacts } from './Contacts';
import { Delivery } from './Delivery';
import * as css from './Main.css';
import { About } from './About';
import { ContentContainer } from '../common/ContentContainer';
import { Carousel } from '../common/Carousel';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <ContentContainer>
                    <Carousel />
                </ContentContainer>
                <About />
                <Delivery />
                <Contacts />
            </div>
        );
    }
}
