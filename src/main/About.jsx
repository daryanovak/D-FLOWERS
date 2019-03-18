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
                            Наши приоритеты
                    </h2>
                        <p className={css.aboutText}>
                            Мы предлагаем Вам отличный сервис и первоклассные цветы собственного производства. 
                            <br />
                            <br />
                            Мы крайне заинтересованы в качестве продукции и в успехе Вашей реализации.
                            <br />
                            <br />
                            Мы проконсультируем Вас по любому возникшему у Вас вопросу, также, по согласованию с Вами, 
                            проведем предпродажную подготовку цветов.
                </p>
                    </div>
                    <div className={css.aboutImageWrapper}>
                        <img className={css.aboutImage} src='https://firebasestorage.googleapis.com/v0/b/tulpan-mart-1526219658606.appspot.com/o/gallery%2Fabout-image.jpg?alt=media&token=2aeced96-3a46-4f35-988b-e9b949e9087b' alt="About image" />
                    </div>
                </ContentContainer>
            </section>
        )
    }
}
