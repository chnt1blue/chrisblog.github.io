import React from "react";
import { Menu } from "antd";
import {
  CopyOutlined,
  HomeOutlined,
  RobotOutlined,
  UserOutlined,
} from "@ant-design/icons";

const NavigationBar: React.FunctionComponent = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      onClick={(info) => {
        const { key } = info;
        window.open(`/#/${key}`, "_self");
      }}
      items={[
        {
          key: "Home",
          icon: <HomeOutlined />,
          label: "Home",
        },
        {
          key: "Article",
          icon: <CopyOutlined />,
          label: "Article",
        },
        {
          key: "Gpt",
          icon: <RobotOutlined />,
          label: "Gpt",
        },
        {
          key: "About",
          icon: <UserOutlined />,
          label: "About",
        },
      ]}
    />
  );
};

export default NavigationBar;
