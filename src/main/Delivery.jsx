import React from 'react';
import * as css from './Delivery.css';
import { ContentContainer } from '../common/ContentContainer';


export class Delivery extends React.Component {
    render() {
        return (
            <section className={ css.delivery }>
                <ContentContainer className={ css.container }>
                    <h2 className={ css.header } >Доставка</h2>
                    <div className={ css.content }>
                        <div className={ css.imageWrapper }>
                            <img className={ css.image } src='https://firebasestorage.googleapis.com/v0/b/tulpan-mart-1526219658606.appspot.com/o/gallery%2Fbus.jpg?alt=media&token=7cf3b1fa-e6c0-42bd-9e22-03817dccf291' alt="Bus image" />
                        </div>
                        <div className={ css.textWrapper }>
                            <h2 className={ css.headline }>
                                Доставка по всей Республике Беларусь
                            </h2>
                            <p className={ css.text }>
                                Доставим ваш товар в целости и сохранности в любую точку Республики Беларусь.
                                <br/>
                                <br/>
                                Доставка в Российскую Федерацию от 25 000 штук.
                                <br/>
                                <br/>
                                Доставка в Республику Казахстан не осуществляется.
                        </p>
                        </div>
                    </div>
                </ContentContainer>
            </section>
        )
    }
}
