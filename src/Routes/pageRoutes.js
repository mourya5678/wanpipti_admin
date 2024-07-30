import Dashboard from "../Pages/Dashboard";

export const pageRoutes = {
    dashboard: '/',
    login: '/login',
    signup: '/signup',
    forgot_password: '/forgot-password',
};

export const AllRoutes = [
    {
        name: 'Home',
        path: '/',
        element: <Dashboard />,
        isPrivate: true
    },
];