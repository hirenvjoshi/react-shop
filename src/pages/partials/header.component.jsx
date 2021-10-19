import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../../components/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown.component';
import { selectCartDropDownHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectMobileNavHidden } from '../../redux/mobile-nav/mobile-nav-selector';
import { createStructuredSelector } from 'reselect';
import { toggleMobileNavAction } from '../../redux/mobile-nav/mobile-nav-action';

const Header = ({ currentUser, cartDropdownHidden, toggleMobileNav, mobileNavHidden }) => (
    <div>
        <div className="header-wrap classicHeader animated d-flex">
            <div className="container-fluid">        
                <div className="row align-items-center">
                    
                    <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                        <Link to="/">
                            <img src="/assets/images/logo.svg" alt="React Shop" title="React Shop" />
                        </Link>
                    </div>
                    
                    <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                        <div className="d-block d-lg-none">
                            <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                                <i className="icon anm anm-times-l"></i>
                                <i className="anm anm-bars-r" onClick={() => {
                                    toggleMobileNav();
                                    document.body.classList.add('mobileOn');                                   
                                }}></i>
                            </button>
                        </div>
                    
                        <nav className="grid__item" id="AccessibleNav">
                            <ul id="siteNav" className="site-nav medium right hidearrow">
                                <li className="lvl1 parent megamenu"><Link to="/">Home</Link></li>
                                <li className="lvl1 parent megamenu"><Link to="/shop">Shop</Link></li>
                                {
                                    currentUser 
                                    ?
                                        <li className="lvl1 parent megamenu"><div className="signOutLink" onClick={() => (auth.signOut())}>Sign Out</div></li>
                                    :
                                        <li className="lvl1 parent megamenu"><Link to="/signin">Sign In</Link></li>
                                }                                
                            </ul>
                        </nav>
                    
                    </div>
                    
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                        <div className="logo">
                            <Link to="/">
                                <img src="/assets/images/logo.svg" alt="React Shop" title="React Shop" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                        <div className="site-cart">
                            <CartIcon />
                            { cartDropdownHidden ? null : <CartDropDown /> }                            
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        <div className={"mobile-nav-wrapper " + (mobileNavHidden ? null : "active")} role="navigation">
            <div className="closemobileMenu" onClick={() => toggleMobileNav()}><i className="icon anm anm-times-l pull-right"></i> Close Menu</div>
            <ul id="MobileNav" className="mobile-nav">
                <li className="lvl1 parent megamenu"><Link to="/" onClick={() => toggleMobileNav()}>Home</Link></li>
                <li className="lvl1 parent megamenu"><Link to="/shop" onClick={() => toggleMobileNav()}>Shop</Link></li>
                {
                    currentUser 
                    ?
                        <li className="lvl1 parent megamenu"><div className="signOutLink" onClick={() => {auth.signOut(); toggleMobileNav();}}>Sign Out</div></li>
                    :
                        <li className="lvl1 parent megamenu"><Link to="/signin" onClick={() => toggleMobileNav()}>Sign In</Link></li>
                }
            </ul>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    cartDropdownHidden: selectCartDropDownHidden,
    mobileNavHidden: selectMobileNavHidden
});

const mapDispatchToProps = dispatch => ({
    toggleMobileNav: () => (dispatch(toggleMobileNavAction()))
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);