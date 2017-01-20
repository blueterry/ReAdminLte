import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    render() {
        return (
          <header className ="main-header">
            {/* Logo */}
            {/* Logo */}
            <a href="../index2.html" className="logo">
              {/* mini logo for sidebar mini 50x50 pixels */}
              <span className="logo-mini"><b>A</b>LT</span>
              {/* logo for regular state and mobile devices */}
              <span className="logo-lg"><b>Admin</b>LTE</span>
            </a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top" role="navigation">
              {/* Sidebar toggle button*/}
              <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span className="sr-only">Toggle navigation</span>
              </a>
              {/* Navbar Right Menu */}
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  <li><a href="http://almsaeedstudio.com">Almsaeed Studio</a></li>
                  <li><a href="http://almsaeedstudio.com/premium">Premium Templates</a></li>
                </ul>
              </div>
            </nav>
        </header>
        );
    }
}

export default Nav;