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
            <section className={css.contacts}>
                <ContentContainer className={css.container}>
                    <div className={css.contactsWrapper}>
                        <div className={css.communication}>
                            <div className={css.flowerstation}>
                                <div className={css.article}>
                                    {/* <img className={css.image} src="'../../public/images/icon.png" alt="" /> */}
                                    <h4>FLOWER STATION</h4>
                                </div>
                                <p>
                                    FRESH FLOWERS DELIVERED:
                                    <br/> OUR SHOP IS OPEN 24 HOURS A DAY"
                                </p>
                            </div>
                            <div className={css.getintouch}>
                                <div className={css.article}>
                                    {/* <img className={css.image} src="'../../public/images/location.jpg" alt="" /> */}
                                    <h4>GET IN TOUCH WITH US</h4>
                                </div>
                                <p>55 PARK ROAD, LONDON, NW1 6XU
                                    <br />
                                    PHONE: +44 207 724 7525
                                    <br />
                                    FLOWERSTATION.CO.UK</p>
                            </div>
                            <div className={css.communicationSupport}>
                                <div className={css.article}>
                                    {/* <img className={css.image} src="'../../public/images/contacts.png" alt="" /> */}
                                    <h4>CONTACTS</h4>
                                </div>
                                <div className={css.communicationLinks}>
                                    <div>
                                        <a href="viber://contact?number=%2B375296563803">
                                            <FontAwesomeIcon  icon={faViber} />
                                        </a>
                                        <p>VIBER: </p>
                                    </div>
                                    <div>
                                        <a href="whatsapp://send?phone=+375296563803" data-action="share/whatsapp/share">
                                            <FontAwesomeIcon icon={faWhatsappSquare} />
                                        </a>
                                        <p>WHATAPP: </p>

                                    </div>
                                    <div>
                                        <a href="skype:ignashevich3?chat">
                                            <FontAwesomeIcon icon={faSkype} />
                                        </a>
                                        <p>SKYPE: </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </section>
        )
    }
}
