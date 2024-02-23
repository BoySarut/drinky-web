import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContentPage from '../pages/ContentPage';
import UserPage from '../pages/UserPage';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage />},
    { path: '/register', element: <RegisterPage />},
    { path: '/content', element: <ContentPage />},
    { path: '/user', element: <UserPage />}
])

export default function Router() {
    return <RouterProvider router={router} />
}