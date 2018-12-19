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
      <div className="Header">

          <div className="titleHeader">{title}

              <ul className="Menu">
                {
                  items && items.map(
                    (item, key) => <li key={key}><NavLink to={item.url} activeStyle="active" exact>{item.title}</NavLink></li>
                  )
                }
              </ul>
          </div>
      </div>
    );
  }
}

export default Header;
