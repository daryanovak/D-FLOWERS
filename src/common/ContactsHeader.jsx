import React from 'react'
import { Link } from 'react-router-dom'
import * as css from './ContactsHeader.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faViber from '@fortawesome/fontawesome-free-brands/faViber';
import faSkype from '@fortawesome/fontawesome-free-brands/faSkype';
import faWhatsappSquare from '@fortawesome/fontawesome-free-brands/faWhatsappSquare';
import { ContentContainer } from './ContentContainer';


export class ContactsHeader extends React.Component {
    render() {
        return (
            <div className={ css.contactsHeaderContainer }>
                <ContentContainer className={ css.contactsHeader }>
                    <div className={ css.headerInfo}>h</div>
                </ContentContainer>
            </div>
        )
    }
}
