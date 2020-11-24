import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './index.scss';
import constants from 'constants/index';
import Avatar from 'assets/img/user.png';

const Header = React.memo((props) => {
  const { history } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    props.handleCollapse(!isCollapsed);
  };

  const logoutToDashboard = () => {
    localStorage.clear();
    history.push('/login');
  };

  const menu = () => (
    <Menu>
      {constants.PROFILE_MENU_ITEMS.map((item, idx) => [
        idx === constants.PROFILE_MENU_ITEMS.length - 1 && <Menu.Divider />,
        <Menu.Item
          key={String(idx)}
          onClick={() => {
            switch (item.function) {
              case 'logout':
                logoutToDashboard();
                break;
              default:
                history.push(item.url);
                break;
            }
          }}
        >
          {item.icon}
          <span style={{ display: 'inline-block' }}>
            {item.name}
          </span>
        </Menu.Item>,
      ])}
    </Menu>
  );

  return (
    <div className="main-header">
      <div className="float-left">
        { isCollapsed ? (
          <MenuUnfoldOutlined onClick={() => handleCollapse()} className="icon-menu-fold" />
        ) : (
          <MenuFoldOutlined onClick={() => handleCollapse()} className="icon-menu-fold" />
        )}
        LOGO
      </div>
      <div className="float-right right-content">

        <Dropdown overlay={menu} className="dropdown-info">
          <span className="ant-dropdown-link cursor-pointer">
            <span><img className="avatar" src={Avatar} alt="avatar" /></span>
          </span>
        </Dropdown>
      </div>
    </div>
  );
});

Header.propTypes = {
  handleCollapse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
