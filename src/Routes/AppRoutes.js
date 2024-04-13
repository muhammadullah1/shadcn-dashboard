import Home from '@/pages/Home';
import Error404 from '@/pages/Error404';
import Signup from '@/pages/Signup';
import Login from '@/pages/Login';

export const PublicRoutes = [
  {
    path: '/404',
    element: Error404,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/signup',
    element: Signup,
  },
]

export const AppRoutes = [
  {
    path: '/',
    element: Home,
  }
]