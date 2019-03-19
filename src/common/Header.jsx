import React from 'react';
import * as css from './Header.css';
import { Route, Link } from 'react-router-dom';
import * as cx from 'classnames';
import { ContactsHeader } from './ContactsHeader';
import { ContentContainer } from './ContentContainer';

function BurgerIcon({ headerRef, toggleBurgerIsOpen, burgerIsOpen }) {
    return <div className={ cx(css.burgerIcon, burgerIsOpen && css.burgerIsOpen) } onClick={ toggleBurgerIsOpen }>
        <div className={ css.bar1 }></div>
        <div className={ css.bar2 }></div>
        <div className={ css.bar3 }></div>
    </div>
}

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            burgerIsOpen: false,
        };
        this.toggleBurgerIsOpen = this.toggleBurgerIsOpen.bind(this);
    }

    toggleBurgerIsOpen() {
        if (window.innerWidth <= 650) {
            this.setState({ burgerIsOpen: !this.state.burgerIsOpen });
        }
    }

    render() {
        return (
            <header className={ cx(css.header, this.state.burgerIsOpen && css.responsive) }>
                <ContentContainer>
                    <nav className={ css.navigation }>
                        <div className={css.navigationMenu}>
                            <div className={css.logo}><h1>MART&TULIP</h1></div>
                            <div className={css.menu}>
                            <div>ABOUT</div>
                            <div>HELP</div>
                            <div>GALLERY</div>
                            <div>TRASH</div>
                            <div>FLOWERS</div>
                            </div>
                        </div>
                        <BurgerIcon burgerIsOpen={ this.state.burgerIsOpen } toggleBurgerIsOpen={ this.toggleBurgerIsOpen } headerRef={ this.ref } />
                    </nav>
                </ContentContainer>
            </header>
        )
    }
}
