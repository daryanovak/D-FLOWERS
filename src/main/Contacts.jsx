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
                                    <img className={css.image} src="'../../public/images/icon.png" alt="" />
                                    <h4>FLOWER STATION</h4>
                                </div>
                                <p>
                                FRESH FLOWERS DELIVERED: OUR SHOP IS OPEN 24 HOURS A DAY"
                                </p>

                            </div>
                            <div className={css.getintouch}>
                            <div className={css.article}>
                                    <img className={css.image} src="'../../public/images/location.jpg" alt="" />
                                    <h4>GET IN TOUCH WITH US</h4>
                                </div>
                              

                                <p>55 PARK ROAD, LONDON, NW1 6XU
                                    <br/>
                                    PHONE: +44 207 724 7525
                                    <br/>
                                        FLOWERSTATION.CO.UK</p>
                            </div>

                            {/* <div className={css.location}>
                                <div className={css.locationContent}>
                                <h4>BROOKLYN</h4>
                                
                                    <iframe
                                        className={css.map}
                                        frameBorder="0" style={{ border: 0 }}
                                        src="https://maps.google.com/maps?q=52.143050,26.028132&hl=es;z=18&amp;output=embed"
                                        allowFullScreen
                                    >
                                    </iframe>
                                </div>
                            </div> */}

                            <div className={css.communicationSupport}>
                            <div className={css.article}>
                                    <img className={css.image} src="'../../public/images/contacts.png" alt="" />
                                    <h4>CONTACTS</h4>
                                </div>
                            <div  className={css.communicationLinks}>
                            <div>
                                <p>VIBER: </p>
                                <a href="viber://contact?number=%2B375296563803">
                                    <FontAwesomeIcon icon={faViber} />
                                </a>
                            </div>
                            <div>
                                <p>WHATAPP: </p>
                                <a href="whatsapp://send?phone=+375296563803" data-action="share/whatsapp/share">
                                    <FontAwesomeIcon icon={faWhatsappSquare} />
                                </a>
                            </div>
                            <div>
                                <p>SKYPE: </p>
                                <a href="skype:ignashevich3?chat">
                                    <FontAwesomeIcon icon={faSkype} />
                                </a>
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
