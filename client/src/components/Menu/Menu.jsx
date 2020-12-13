import React from 'react';
import MenuItem from './MenuItem';
import Logout from '../Logout/Logout';

const menus = ['search', 'setting', 'home'];

const Menu = () => (
  <>
    {menus.map((menu) => (
      <div className="col-6" key={menu}>
        <MenuItem pageName={menu} />
      </div>
    ))}
    <div className="col-6">
      <Logout />
    </div>
  </>
);

export default Menu;
