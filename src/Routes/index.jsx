import { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes, PublicRoutes } from './AppRoutes'
import Error404 from '@/pages/Error404.jsx'
import Spin from '@/components/ui/Spin'

const ParentRoute = {
  admin: {
    routes: AppRoutes,
    loginUrl: '/admin/login',
  },
  user: {
    routes: PublicRoutes,
    loginUrl: 'login',
  },
}

const user = {
  id: 1,
  name: 'ali',
  email: 'ali@gmail.com',
  role: 'user',
}
const isAuthenticate = true
const generateRandomKey = () => Math.floor(Math.random() * 90 + 10)

const index = () => {
  // const {user, isAuthenticate = true} = useSelector((state) => state.auth);
  const cachePaths = useMemo(() => {
    const appRoutesCached = AppRoutes?.map((el, index) => (
      <Route path={el.path} element={<el.element />} key={index} />
    ))
    let authRoutesCached = []
    if (isAuthenticate) {
      authRoutesCached = ParentRoute[user.role].routes.map((el, index) => (
        <Route path={el.path} element={<el.element />} key={index} />
      ))
    }
    return [
      <Route path='*' element={<Error404 />} key={'404'} />,
      ...appRoutesCached,
      ...authRoutesCached,
    ]
  }, [isAuthenticate, user])

  return (
    <Suspense
      fallback={
        <Spin
          size='large'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        />
      }
    >
      <Routes key={generateRandomKey()}>{cachePaths}</Routes>
    </Suspense>
  )
}

export default index
