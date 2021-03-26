import React from "react";
import { Layout, Menu } from "antd";
import {Link} from 'react-router-dom'
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

class SideBar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { Sider } = Layout;
    return (
      <>
        <React.Fragment>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
             
              <Link to="/">DASHBOARD</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
               
                <Link to="/user-list"> USER LIST</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        </React.Fragment>
      </>
    );
  }
}

export default SideBar;
