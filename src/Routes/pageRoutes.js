import AddFaq from "../Pages/AddFaq";
import AddWinningNumber from "../Pages/AddWinningNumber";
import AdminProfile from "../Pages/AdminProfile";
import AllFaq from "../Pages/AllFaq";
import AllUsers from "../Pages/AllUsers";
import BetsDetails from "../Pages/BetsDetails";
import ChangePassword from "../Pages/ChangePassword";
import Dashboard from "../Pages/Dashboard";
import EditAdminProfile from "../Pages/EditAdminProfile";
import EditFaq from "../Pages/EditFaq";
import EditUsers from "../Pages/EditUsers";
import FinancialReport from "../Pages/FinancialReport";
import GamesManagement from "../Pages/GamesManagement";
import GetAllBetsData from "../Pages/GetAllBetsData";
import SetBet from "../Pages/SetBet";
import UpdateBetLimit from "../Pages/UpdateBetLimit";
import UpdateWinningNumber from "../Pages/UpdateWinningNumber";

export const pageRoutes = {
    dashboard: '/',
    login: '/login',
    signup: '/signup',
    forgot_password: '/forgot-password',
    all_users: '/all-users',
    edit_user: '/edit-user',
    game_manage: '/game-management',
    add_winning_number: "/add-winning-number",
    update_winning_number: "/update-winning-number",
    bet_detail: "/bet-detail",
    financial_report: "/finacial-report",
    set_bet_limit: "/set-bet-limit",
    all_bets: "/all_bets",
    update_bets: "/update_bets",
    profile: "/my-profile",
    update_profile: "/edit-profile",
    change_password: "/change-password",
    add_faq: "/add-faq",
    all_faq: "/faq",
    edit_faq: '/edit-faq'
};

export const AllRoutes = [
    {
        name: 'Dashboard',
        path: pageRoutes.dashboard,
        element: <Dashboard />,
        isPrivate: true
    },
    {
        name: 'AllUsers',
        path: pageRoutes.all_users,
        element: <AllUsers />,
        isPrivate: true
    },
    {
        name: 'EditUsers',
        path: pageRoutes.edit_user,
        element: <EditUsers />,
        isPrivate: true
    },
    {
        name: 'GameManagement',
        path: pageRoutes.game_manage,
        element: <GamesManagement />,
        isPrivate: true
    },
    {
        name: 'AddWinningNumber',
        path: pageRoutes.add_winning_number,
        element: <AddWinningNumber />,
        isPrivate: true
    },
    {
        name: 'UpdateWinningNumber',
        path: pageRoutes.update_winning_number,
        element: <UpdateWinningNumber />,
        isPrivate: true
    },
    {
        name: 'BetDetail',
        path: pageRoutes.bet_detail,
        element: <BetsDetails />,
        isPrivate: true
    },
    {
        name: 'FinancialReport',
        path: pageRoutes.financial_report,
        element: <FinancialReport />,
        isPrivate: true
    },
    {
        name: 'SetBetLimit',
        path: pageRoutes.set_bet_limit,
        element: <SetBet />,
        isPrivate: true
    },
    {
        name: 'GetAllBets',
        path: pageRoutes.all_bets,
        element: <GetAllBetsData />,
        isPrivate: true
    },
    {
        name: 'UpdateBets',
        path: pageRoutes.update_bets,
        element: <UpdateBetLimit />,
        isPrivate: true
    },
    {
        name: 'AdminProfile',
        path: pageRoutes.profile,
        element: <AdminProfile />,
        isPrivate: true
    },
    {
        name: 'EditAdminProfile',
        path: pageRoutes.update_profile,
        element: <EditAdminProfile />,
        isPrivate: true
    },
    {
        name: 'ChangePassword',
        path: pageRoutes.change_password,
        element: <ChangePassword />,
        isPrivate: true
    },
    {
        name: 'AddFaq',
        path: pageRoutes.add_faq,
        element: <AddFaq />,
        isPrivate: true
    },
    {
        name: 'AllFaq',
        path: pageRoutes.all_faq,
        element: <AllFaq />,
        isPrivate: true
    },
    {
        name: 'EditFaq',
        path: pageRoutes.edit_faq,
        element: <EditFaq />,
        isPrivate: true
    }
];