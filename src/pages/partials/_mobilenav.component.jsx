import React from 'react';
import { auth } from '../../firebase/firebase.utils';

const MobileNav = ({ currentUser }) => (
    <div className="mobile-nav-wrapper" role="navigation">
        <div className="closemobileMenu"><i className="icon anm anm-times-l pull-right"></i> Close Menu</div>
        <ul id="MobileNav" className="mobile-nav">
            <li className="lvl1 parent megamenu"><Link to="/">Home</Link></li>
            <li className="lvl1 parent megamenu"><Link to="/shop">Shop</Link></li>
            {
                currentUser 
                ?
                    <li className="lvl1 parent megamenu"><div class="signOutLink" onClick={() => (auth.signOut())}>Sign Out</div></li>
                :
                    <li className="lvl1 parent megamenu"><Link to="/signin">Sign In</Link></li>
            }
        </ul>
    </div>
)

export default MobileNav;