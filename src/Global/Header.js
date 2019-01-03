// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// Assets
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container p-2">
              <a class="navbar-brand" href="/">{title}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                         aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {
                        items && items.map(
                            (item, key) => <li key={key} className="nav-item"><NavLink to={item.url} className="nav-link" activeStyle="active" exact><i className={item.icon}></i>{item.title}</NavLink></li>
                        )
                    }
                </ul>
                  <i class="fa fa-shopping-cart fa-inverse"></i><span class="badge badge-error">4</span>

              </div>
             </div>
            </nav>


    );
  }
}

export default Header;
