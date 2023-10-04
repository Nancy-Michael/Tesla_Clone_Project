import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignInFormPage from './components/SignInFormPage'
import VehiclesList from './components/VehiclesList'
import EnergyList from './components/EnergyList'
import ChargingList from './components/ChargingList'
import DiscoverList from './components/DiscoverList'
import ShopList from './components/ShopList'
import DemoDrivePage from './Pages/DemoDrivePage'
import OrderModelX from './Pages/OrderModelX'
import OrderModel3 from './Pages/OrderModel3'
import OrderModelY from './Pages/OrderModelY'
import OrderModelS from './Pages/OrderModelS'


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/SignInFormPage" element={<SignInFormPage />}></Route>
          <Route path="/VehiclesList" element={<VehiclesList />}></Route>
          <Route path="/EnergyList" element={<EnergyList />}></Route>
          <Route path="/ChargingList" element={<ChargingList />}></Route>
          <Route path="/DiscoverList" element={<DiscoverList />}></Route>
          <Route path="/ShopList" element={<ShopList />}></Route>
          <Route path="/DemoDrivePage" element={<DemoDrivePage />}></Route>
          <Route path="/OrderModelX" element={<OrderModelX />}></Route>
          <Route path="/OrderModel3" element={<OrderModel3 />}></Route>
          <Route path="/OrderModelY" element={<OrderModelY />}></Route>
          <Route path="/OrderModelS" element={<OrderModelS />}></Route>
        </Routes>
      </div>
    </Router>
  )

}
export default App
