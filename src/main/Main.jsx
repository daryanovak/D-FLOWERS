import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';
import { Contacts } from './Contacts';
import { Delivery } from './Delivery';
import * as css from './Main.css';
import { About } from './About';
import { ContentContainer } from '../common/ContentContainer';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <div className={css.mainHeader}>
                    <ContentContainer className={css.mainHeaderContainer}>
                        <h2 className={css.mainHeaderText}>
                            <h1 className={css.headline}>
                                Тюльпаны оптом к 8 марта 2019 от производителя!
                        </h1>
                            <br />
                            На протяжении 15 лет наше домашнее хозяйство занимается выращиванием тюльпанов из лучших семян голландского происхождения. Каждый год мы радуем вас 8 марта и в День Святого Валентина своими отборными тюльпанами, выращенными с любовью и заботой.
                    </h2>
                    </ContentContainer>
                </div>
                <About />
                <Delivery />
                <Contacts />
            </div>
        );
    }
}
