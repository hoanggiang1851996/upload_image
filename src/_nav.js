import React from 'react';
import {
  QuestionCircleOutlined, SearchOutlined, UserOutlined, WhatsAppOutlined,
} from '@ant-design/icons';

export default {
  items: [
    {
      name: 'Tra cứu thông tin',
      icon: <SearchOutlined />,
      url: '/lookup-information',
    },
    {
      name: 'Quản lý câu hỏi',
      icon: <QuestionCircleOutlined />,
      url: '/question-management',
    },
    {
      name: 'Quản lý loại câu hỏi',
      icon: <QuestionCircleOutlined />,
      url: '/question-type-management',
    },
    {
      name: 'Quản lý tài khoản CSKH',
      icon: <WhatsAppOutlined />,
      url: '/account-management',
    },
    {
      name: 'Quản lý thông tin cá nhân',
      icon: <UserOutlined />,
      url: '/personal-management',
      children: [
        {
          name: 'Thông tin cá nhân',
          url: '/personal-management/update',
        },
        {
          name: 'Đổi mật khẩu',
          url: '/personal-management/change-password',
        },
      ],
    },
  ],
};
