import React from 'react';
import {
  LockOutlined,
  PoweroffOutlined,
  UserOutlined,
} from '@ant-design/icons';

const constants = {
  TIMEOUT_REQUEST: 60000,
  EXPIRE_TIME_TOKEN: 15 * 60 * 1000,
  EXPIRE_TIME_REFRESH_TOKEN: 30 * 60 * 1000,

  FORMAT_FULL_DATE_TIME: 'DD/MM/YYYY HH:mm:ss',
  FORMAT_DATE: 'DD/MM/YYYY',
  CODE_SUCCESS: '00',

  PROFILE_MENU_ITEMS: [
    {
      name: 'Thông tin cá nhân',
      icon: <UserOutlined />,
      url: '/personal-management/update',
    },
    {
      name: 'Đổi mật khẩu',
      icon: <LockOutlined />,
      url: '/personal-management/change-password',
    },
    {
      name: 'Thoát',
      icon: <PoweroffOutlined />,
      function: 'logout',
    },
  ],

  ROLES: [
    { code: 'ROLE_USER', name: 'Tài khoản thông thường' },
    { code: 'ROLE_ADMIN', name: 'Admin' },
  ],

  ACCOUNT_STATUS: [
    { code: 1, name: 'Mới' },
    { code: 2, name: 'Hoạt động' },
    { code: 3, name: 'Khóa' },
    { code: 4, name: 'Xóa' },
  ],

  APPROVE_STATUS: [
    { code: 4, name: 'Đồng ý' },
    { code: 5, name: 'Không đồng ý' },
  ],

  QUESTION_STATUS: [
    { code: '1', name: 'Mới' },
    { code: '2', name: 'Cập nhật' },
    { code: '3', name: 'Chờ duyệt' },
    { code: '4', name: 'Áp dụng' },
    { code: '5', name: 'Không duyệt' },
    { code: '6', name: 'Hủy' },
  ],

  GENDER: [
    { code: 'F', name: 'Nữ' },
    { code: 'M', name: 'Nam' },
  ],

  GENDER_ACCOUNT: [
    { code: 1, name: 'Nam' },
    { code: 2, name: 'Nữ' },
  ],

  INFOR_BONUS_ACCOUNT_STATUS: [
    { code: '0', name: 'Chưa xác minh' },
    { code: '1', name: 'Đã xác minh' },
    { code: '2', name: 'Không hợp lệ' },
  ],

  BONUS_ACCOUNT_STATUS: [
    { code: '1', name: 'ChỜ kiểm duyệt' },
    { code: '-2', name: 'Từ chối kiểm duyệt' },
    { code: '2', name: 'Đang kiếm duyệt' },
    { code: '3', name: 'Chờ phê duyệt' },
    { code: '4', name: 'Mới đăng ký' },
    { code: '5', name: 'Đang hoạt động' },
    { code: '6', name: 'Đã tạm ngừng' },
    { code: '7', name: 'Bị từ chối' },
    { code: '8', name: 'Chờ phê duyệt hủy' },
    { code: '9', name: 'Đã hủy' },
    { code: '10', name: 'Reset mật khẩu' },
    { code: '11', name: 'Chờ phê duyệt thay đổi GTCN' },
  ],

  BUY_TICKET_HISTORY_STATUS: [
    { code: '0', name: 'Vé chưa đủ thông tin' },
    { code: '1', name: 'Vé đủ thông tin' },
    { code: '2', name: 'Gọi mua thành công, core trả về fail' },
  ],

  PAYMENT_STATES: [
    { code: '0', name: 'Đã trừ tiền hoặc block tiền' },
    { code: '1', name: 'Đã trừ tiền thành công, xuất vé' },
    { code: '2', name: 'Đã hoàn tiền' },
  ],

  WINNING_LEVEL: [
    { code: 'L', name: 'Mức thấp' },
    { code: 'M', name: 'Mức trung bình' },
    { code: 'H', name: 'Mức cao' },
  ],
};

export default constants;
