/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  Settings,
  Wallet,
  Plus,
  Star,
  TrendingUp,
  ArrowRight,
  LogOut,
  User,
} from "lucide-react";

const SellersDashboard = () => {
  const navigate = useNavigate();
  const sellerId = "456"; // Mock seller ID for Chiamaka Okoro; replace with actual ID from auth

  // Seller activity data
  const recentOrders = [
    {
      id: 1,
      type: "order",
      text: "New order for 'Traditional Dress Design' from Alex Johnson.",
      time: "2 hours ago",
      icon: Briefcase,
    },
    {
      id: 2,
      type: "payment",
      text: "Received ₦15,000 for 'Traditional Dress Design' via Paystack.",
      time: "Yesterday",
      icon: TrendingUp,
    },
    {
      id: 3,
      type: "review",
      text: "Received a 5-star review for 'Wedding Attire' from Jane Smith.",
      time: "Yesterday",
      icon: Star,
    },
  ];

  const quickStats = [
    { label: "Active Orders", value: "5", change: "3 in progress, 2 pending", icon: "📋" },
    { label: "Total Earned", value: "₦750,000", change: "This month", icon: "💳" },
    { label: "Services Listed", value: "8", change: "Active services", icon: "🛠️" },
  ];

  const getActivityIcon = (type: string) => {
    const icons = {
      order: Briefcase,
      payment: TrendingUp,
      review: Star,
    };
    return icons[type as keyof typeof icons] || Briefcase;
  };

  return (
    <div className="min-h-screen bg-neutral-lightGray animate-fade-in">
      <div className="flex mx-auto max-w-7xl">
        {/* Sidebar */}
        <aside className="hidden w-64 bg-white shadow-sm lg:block">
          <div className="p-6">
            <div className="space-y-1">
              <button className="justify-start w-full btn btn-ghost text-primary-blue bg-primary-blue/10">
                <Home className="w-4 h-4 mr-3" />
                Seller Dashboard
              </button>
              <button
                className="justify-start w-full btn btn-ghost"
                onClick={() => navigate("/create-service")}
              >
                <Plus className="w-4 h-4 mr-3" />
                Create Service
              </button>
              <button
                className="justify-start w-full btn btn-ghost"
                onClick={() => navigate("/manage-services")}
              >
                <Settings className="w-4 h-4 mr-3" />
                Manage Services
              </button>
              <button
                className="justify-start w-full btn btn-ghost"
                onClick={() => navigate("/orders")}
              > 
                <Briefcase className="w-4 h-4 mr-3" />
                Orders
              </button>
              <button
                className="justify-start w-full btn btn-ghost"
                onClick={() => navigate("/earnings")}
              >
                <Wallet className="w-4 h-4 mr-3" />
                Earnings
              </button>
              <button
                className="justify-start w-full btn btn-ghost"
                onClick={() => navigate(`/profile/${sellerId}`)}
              >
                <User className="w-4 h-4 mr-3" />
                Profile
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column - Orders & Stats */}
            <div className="space-y-6 lg:col-span-2">
              {/* Recent Orders */}
              <div className="card">
                <div className="flex flex-row items-center justify-between p-6">
                  <h2 className="text-lg font-semibold">Recent Orders</h2>
                  <button className="btn btn-ghost" onClick={() => navigate("/orders")}>
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6 pt-0">
                  <p className="mb-4 text-sm text-neutral-textGray">
                    Stay updated with your latest orders and payments.
                  </p>
                  <div className="space-y-4">
                    {recentOrders.map((order) => {
                      const IconComponent = getActivityIcon(order.type);
                      return (
                        <div
                          key={order.id}
                          className="flex items-start p-3 space-x-3 transition-colors rounded-lg hover:bg-primary-blue/10"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue/10">
                              <IconComponent className="w-4 h-4 text-primary-blue" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">{order.text}</p>
                            <p className="mt-1 text-xs text-neutral-textGray">
                              {order.time}
                            </p>
                          </div>
                          <button className="btn btn-ghost" onClick={() => navigate("/orders")}>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {quickStats.map((stat, index) => (
                  <div key={index} className="card">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-neutral-textGray">{stat.label}</p>
                        {stat.icon && <span className="text-lg">{stat.icon}</span>}
                      </div>
                      <h3 className="stat-number">{stat.value}</h3>
                      <p className="text-xs text-neutral-textGray">{stat.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Seller Profile & Quick Actions */}
            <div className="space-y-6">
              {/* Seller Profile Card */}
              <div className="card">
                <div className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-dark">
                      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
                      alt="Chiamaka Okoro"
                      className="w-16 h-16 mx-auto mb-3 rounded-full"
                    />
                    <h3 className="text-lg font-semibold">Chiamaka Okoro</h3>
                    <p className="text-sm text-neutral-textGray">Fashion Designer</p>
                  </div>

                  <div className="space-y-4">
                    <div className="badge bg-primary-blue/10 border-primary-blue/20">
                      <div className="w-2 h-2 mr-2 rounded-full bg-primary-blue"></div>
                      <span className="text-sm font-medium">Verified Seller</span>
                    </div>
                    <p className="text-xs text-neutral-textGray">
                      4.9 rating • 230 reviews
                    </p>

                    <div className="py-2 text-center">
                      <div className="text-2xl font-bold">₦250,000</div>
                      <div className="text-xs text-neutral-textGray">Wallet Balance</div>
                    </div>

                    <div className="space-y-2">
                      <button
                        className="w-full btn btn-primary"
                        onClick={() => navigate("/create-service")}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Create Service
                      </button>
                      <button
                        className="w-full btn btn-primary"
                        onClick={() => navigate(`/profile/${sellerId}`)}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </button>
                      <button
                        className="w-full btn btn-ghost"
                        onClick={() => navigate("/settings")}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Account Settings
                      </button>
                      <button
                        className="w-full text-red-600 border-red-600 btn btn-ghost hover:bg-red-600 hover:text-white"
                        onClick={() => navigate("/home")}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card">
                <div className="p-6">
                  <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
                  <div className="space-y-3">
                    <button
                      className="justify-start w-full btn btn-ghost"
                      onClick={() => navigate("/create-service")}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create Service
                    </button>
                    <button
                      className="justify-start w-full btn btn-ghost"
                      onClick={() => navigate("/manage-services")}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Services
                    </button>
                    <button
                      className="justify-start w-full btn btn-ghost"
                      onClick={() => navigate("/orders")}
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      Orders
                    </button>
                    <button
                      className="justify-start w-full btn btn-ghost"
                      onClick={() => navigate("/earnings")}
                    >
                      <Wallet className="w-4 h-4 mr-2" />
                      Earnings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};


export default SellersDashboard;


