import React from 'react';
import * as css from './Delivery.css';
import { ContentContainer } from '../common/ContentContainer';


export class Delivery extends React.Component {
    render() {
        return (
            <section className={css.delivery}>
                <ContentContainer className={css.container}>
                    <h2 className={css.header} >HOW IT WORKS</h2>
                    <div className={css.content}>
                        <div className={css.imageWrapper}>
                            <img className={css.image} src='https://dy1yydbfzm05w.cloudfront.net/media/wysiwyg/how-it-work.png' alt="Bus image" />
                        </div>

                        <p className={css.text}>
                            With over 300 seasonal varieties to choose from, we source directly from the grower and are proud to offer flowers that are days fresher than a florist or local market. We also understand busy lifestyles, so with Same Day (London only), Next Day, Pre-12 and Click & Collect delivery, you can be sure your flowers arrive fast and make a beautiful impression every time.
                        </p>

                    </div>
                </ContentContainer>
            </section>
        )
    }
}
