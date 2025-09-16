import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BrowseServices from './pages/BrowseServices'
import SearchResults from './pages/SearchResult'
import ServiceDetails from './pages/ServiceDetails'
import Categories from './pages/Categories'
import About from './pages/About'
// import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import UserDashboard from './pages/UserDashboard'
import Profile from './pages/Profile'
import ProfileSettings from './pages/ProfileSettings'
import CreateService from './pages/CreateServices'
import ManageServices from './pages/ManageServices'
import Orders from './pages/Orders'
import Earnings from './pages/Earnings'
import OrderSummary from './pages/OrderSummary'
import Checkout from './pages/CheckOut'
import MyOrders from './pages/MyOrders'
import Favorites from './pages/Favourites'
import Messaging from './pages/Messaging'
import SellersDashboard from './pages/SellersDashboard'
function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen text-gray-900 bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse-services" element={<BrowseServices />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
{/*             <Route path="/contact" element={<Contact />} /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/create-service" element={<CreateService />} />
            <Route path="/manage-services" element={<ManageServices />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/messaging" element={<Messaging />} />
           <Route path="/seller-dashboard" element={<SellersDashboard />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
