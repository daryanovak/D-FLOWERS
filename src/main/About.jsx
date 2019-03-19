import * as React from 'react';
import * as css from './About.css';
import { ContentContainer } from '../common/ContentContainer';

export class About extends React.Component {
    render() {
        return (
            <section className={css.about}>
                <ContentContainer className={css.container}>
                    <div className={css.aboutTextWrapper}>
                        <h2 className={css.aboutTextTitle}>
                            Quintessentially Flowers - Luxury Florists in London
                    </h2>
                        <p className={css.aboutText}>
                            <p>Quintessentially Flowers are seasoned experts in choosing the freshest luxury flowers at the daily London markets. Each experienced florist, personally prepares & designs each luxury flower arrangement, ensuring it has just the right balance, shape, colour, scent and elegance.</p>
                            <br />

                            <p>Our Head Florist and Director is Monika Parafianowicz who after completing art college established herself in the London floristry scene very quickly. She has successfully graduated from an excellent two year UK floristry course and worked with many well known flower designers over the years, where she gained a wealth of experience.
                            
Dorota Hassall is the senior florist and director at Quintessentially Flowers.  She qualified as an English teacher but decided to follow her one true passion after moving to London.  Dorota has worked with many of the most respected floral designers in the UK & London and successfully qualified as a florist after a two year extensive floristry course in London.</p>
                        </p>
                    </div>
                </ContentContainer>
            </section>
        )
    }
}
