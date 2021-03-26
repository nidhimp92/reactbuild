import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";

import Sidebar from "../../Sidebar/";

const HomeDashboard = () => {
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

                          <div className="row">
                                <div className="col-md-12">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Add User</h4>
                                      <form>
                                            <label>Name</label>
                                            <input type="text" className="form-control" />
                                            <label>Email</label>
                                            <input type="text" className="form-control" />
                                            <label>Phone</label>
                                            <input type="text" className="form-control" />
                                            <label>Message</label>
                                            <input type="text" className="form-control" />

                                            <button className="btn btn-primary mt-25">Submit</button>

                                      </form>


                                </div>
                                <div className="col-md-3"></div>

                                </div>

                          </div>

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomeDashboard;
