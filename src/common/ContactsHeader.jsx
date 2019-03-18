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
                    <a className={ css.phoneNumber } href="tel:+375296563803"><FontAwesomeIcon icon={ faPhone } />+375 (29) 6563803</a>
                    <div className={ css.contactsIconsWrapper }>
                        <a href="viber://contact?number=%2B375296563803">
                            <FontAwesomeIcon icon={ faViber } />
                        </a>
                        <a href="whatsapp://send?phone=+375296563803" data-action="share/whatsapp/share">
                            <FontAwesomeIcon icon={ faWhatsappSquare } />
                        </a>
                        <a href="skype:ignashevich3?chat">
                            <FontAwesomeIcon icon={ faSkype } />
                        </a>
                    </div>
                </ContentContainer>
            </div>
        )
    }
}
