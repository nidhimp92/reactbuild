import React, { useState } from "react";
import "antd/dist/antd.css";

import { Layout } from "antd";
import { Table } from 'react-bootstrap';

import Sidebar from "../../Sidebar/";

const UserList = () => {
  const { Header, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={toggle} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
       
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
               <h4>User Dashboard</h4>
  <Table striped bordered hover>
     
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Message</th>

      <th> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>KernAdler</td>
      <td>Management</td>
      <td>http://assessment.tripa.com/KernAdler</td>
      <td>3/3</td>
    
      <td className="btn-table"><button className="btn btn-primary assess-button">Edit</button>
      <button className="btn btn-primary assess-button">Delete</button></td>
    </tr>
    <tr>
    <td>KernAdler</td>
      <td>Management</td>
      <td>http://assessment.tripa.com/KernAdler</td>
      <td>3/3</td>
     
      <td className="btn-table"><button className="btn btn-primary assess-button">Edit</button>
      <button className="btn btn-primary assess-button">Delete</button></td>
    </tr>
    <tr>
    <td>KernAdler</td>
      <td>Management</td>
      <td>http://assessment.tripa.com/KernAdler</td>
      <td>3/3</td>
     
      <td className="btn-table"><button className="btn btn-primary assess-button">Edit</button>
      <button className="btn btn-primary assess-button">Delete</button></td>
    </tr>
  </tbody>
</Table>


          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserList;
