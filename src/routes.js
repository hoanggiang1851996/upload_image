import React from 'react';

const QuestionManagement = React.lazy(() => import('pages/QuestionManagement/List'));
const QuestionDetail = React.lazy(() => import('pages/QuestionManagement/Detail'));
const AddQuestion = React.lazy(() => import('pages/QuestionManagement/AddAndEdit'));
const EditQuestion = React.lazy(() => import('pages/QuestionManagement/AddAndEdit'));
const ApproveQuestion = React.lazy(() => import('pages/QuestionManagement/Approved'));

const QuestionTypeManagement = React.lazy(() => import('pages/QuestionTypeManagement/List'));
const AddQuestionType = React.lazy(() => import('pages/QuestionTypeManagement/AddAndEdit'));
const EditQuestionType = React.lazy(() => import('pages/QuestionTypeManagement/AddAndEdit'));

const UpdatePersonalInformation = React.lazy(() => import('pages/PersonalInformationManagement/Update'));
const ChangePassword = React.lazy(() => import('pages/PersonalInformationManagement/ChangePassword'));
const LookupInformation = React.lazy(() => import('pages/LookupInformation/List'));
const InformationDetail = React.lazy(() => import('pages/LookupInformation/Detail'));
const BuyTicketHistory = React.lazy(() => import('pages/LookupInformation/BuyTicketHistory'));
const WinningHistory = React.lazy(() => import('pages/LookupInformation/WinningHistory'));

const AccountManagement = React.lazy(() => import('pages/AccountManagement/List'));
const AddAccount = React.lazy(() => import('pages/AccountManagement/AddAndEdit'));
const EditAccount = React.lazy(() => import('pages/AccountManagement/AddAndEdit'));
const DetailAccount = React.lazy(() => import('pages/AccountManagement/Detail'));

const ResetPassword = React.lazy(() => import('pages/ResetPassword'));
const ForgotPassword = React.lazy(() => import('pages/ForgotPassword'));

const routes = [
  {
    path: '/', exact: true, name: 'Home',
  },
  {
    path: '/question-management', exact: true, name: 'Quản lý câu hỏi', component: QuestionManagement,
  },
  {
    path: '/question-management/detail', exact: true, name: 'Chi tiết câu hỏi', component: QuestionDetail,
  },
  {
    path: '/question-management/add', exact: true, name: 'Tạo mới câu hỏi', component: AddQuestion,
  },
  {
    path: '/question-management/edit', exact: true, name: 'Chỉnh sửa câu hỏi', component: EditQuestion,
  },
  {
    path: '/question-management/approve', exact: true, name: 'Phê duyệt câu hỏi', component: ApproveQuestion,
  },
  {
    path: '/question-type-management', exact: true, name: 'Quản lý loại câu hỏi', component: QuestionTypeManagement,
  },
  {
    path: '/question-type-management/add', exact: true, name: 'Thêm mới loại câu hỏi', component: AddQuestionType,
  },
  {
    path: '/question-type-management/edit', exact: true, name: 'Chỉnh sửa loại câu hỏi', component: EditQuestionType,
  },
  {
    path: '/personal-management/update', exact: true, name: 'Cập nhật thông tin cá nhân', component: UpdatePersonalInformation,
  },
  {
    path: '/personal-management/change-password', exact: true, name: 'Thay đổi mật khẩu', component: ChangePassword,
  },
  {
    path: '/lookup-information', exact: true, name: 'Tra cứu thông tin', component: LookupInformation,
  },
  {
    path: '/lookup-information/detail', exact: true, name: 'Chi tiết thông tin cá nhân', component: InformationDetail,
  },
  {
    path: '/lookup-information/buy-ticket-history', exact: true, name: 'Lịch sử mua vé', component: BuyTicketHistory,
  },
  {
    path: '/lookup-information/winning-history', exact: true, name: 'Lịch sử trúng thưởng', component: WinningHistory,
  },
  {
    path: '/account-management', exact: true, name: 'Quản lý tài khoản CSKH', component: AccountManagement,
  },
  {
    path: '/account-management/detail', exact: true, name: 'Xem chi tiết tài khoản CSKH', component: DetailAccount,
  },
  {
    path: '/account-management/add', exact: true, name: 'Thêm mới tài khoản CSKH', component: AddAccount,
  },
  {
    path: '/account-management/edit', exact: true, name: 'Chỉnh sửa tài khoản CSKH', component: EditAccount,
  },
  {
    path: '/reset-password', exact: true, name: 'Đặt lại mật khẩu', component: ResetPassword,
  },
  {
    path: '/forgot-password', exact: true, name: 'Quên mật khẩu', component: ForgotPassword,
  },
];

export default routes;
