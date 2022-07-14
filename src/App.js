import { Routes, Route, useNavigate  } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}

const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <Routes>
        {/* <Navigate to="/e-commercde" />x */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )

}

export default App;
