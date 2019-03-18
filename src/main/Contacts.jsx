import React from 'react';
import * as css from './Contacts.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faViber from '@fortawesome/fontawesome-free-brands/faViber';
import faWhatsappSquare from '@fortawesome/fontawesome-free-brands/faWhatsappSquare';
import faSkype from '@fortawesome/fontawesome-free-brands/faSkype';
import { ContentContainer } from '../common/ContentContainer';

export class Contacts extends React.Component {
    render() {
        return (
            <section className={ css.contacts }>
                <ContentContainer className={ css.container }>
                    <h2 className={ css.contactsHeader } >Контакты</h2>
                    <div className={ css.contactsWrapper }>
                        <div className={ css.communication }>
                            <div className={ css.communicationContent }>
                                <h4>Телефон</h4>
                                <a href="tel:+3752888563803">+375 (29) 6563803</a>
                                <h4>Email</h4>
                                <a href="mailto:ignashevich@tut.by">4ch@tut.by</a>
                                <h4>Skype</h4>
                                <a href="skype:ignashevich3?chat">yyeyeyey3</a>
                                <h4>Время работы</h4>
                                <p>08:00 - 22:00 (Минск)</p>
                                <h4>Мы поддерживаем</h4>
                                <div className={ css.communicationSupport }>
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
                                

                            </div>
                        </div>
                        <div className={ css.location }>
                            <div className={ css.locationContent }>
                                <address className={ css.locationAdress }>
                                    <p>г. Лалал, ул. Богдановича 57</p>
                                </address>
                                <iframe
                                    className={ css.map }
                                    frameBorder="0" style={ { border: 0 } }
                                    src="https://maps.google.com/maps?q=52.143050,26.028132&hl=es;z=18&amp;output=embed"
                                    allowFullScreen
                                    >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </section>
        )
    }
}
