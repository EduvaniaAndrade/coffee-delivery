import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Request } from './pages/Request'
import { Sucess } from './pages/Sucess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/Sucess" element={<Sucess />} />
      </Route>
    </Routes>
  )
}
