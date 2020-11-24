import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './index.scss';
import { Layout, Menu } from 'antd';
import navigation from 'src/_nav';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = React.memo((props) => {
  const { history } = props;
  const pathName = history.location.pathname;
  const openKeysInit = recursionOpenKeys(navigation.items, [], pathName);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(pathName);
  const [openKeys, setOpenKeys] = useState(openKeysInit);

  useEffect(() => {
    setSelectedKey(pathName);
    setOpenKeys(openKeys);
  }, [pathName]);

  useEffect(() => {
    setIsCollapsed(props.isCollapsed);
  }, [props.isCollapsed]);

  const onCollapse = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  const recursionMenuItem = (items) => items.map((item) => {
    if (item.children) {
      return (
        <SubMenu key={item.url} icon={item.icon} title={item.name}>
          {recursionMenuItem(item.children)}
        </SubMenu>
      );
    }

    return (
      <Menu.Item key={item.url} icon={item.icon}>
        <Link to={item.url}>{item.name}</Link>
      </Menu.Item>
    );
  });

  const changeOpenKey = (openKey) => {
    setOpenKeys(openKey);
  };

  const selectKey = ({ selectedKeys }) => {
    setSelectedKey(selectedKeys);
  };

  return (
    <Sider
      collapsed={isCollapsed}
      onCollapse={onCollapse}
      className={`${isCollapsed ? 'sidebar-close' : 'sidebar-open'}`}
    >
      <Menu
        mode="inline"
        selectedKeys={[`${selectedKey}`]}
        openKeys={openKeys}
        onOpenChange={changeOpenKey}
        onSelect={selectKey}
      >
        {recursionMenuItem(navigation.items)}
      </Menu>
    </Sider>
  );
});

Sidebar.propTypes = {
  history: PropTypes.object.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default withRouter(Sidebar);
