import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Camera, LayoutDashboard, LogOut, Package, Settings, Users, Video } from "lucide-react";

// Mock Data
const revenueData = [
  { name: "Mon", revenue: 400 },
  { name: "Tue", revenue: 300 },
  { name: "Wed", revenue: 550 },
  { name: "Thu", revenue: 450 },
  { name: "Fri", revenue: 600 },
  { name: "Sat", revenue: 800 },
  { name: "Sun", revenue: 750 },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [machineHealth, setMachineHealth] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-6 w-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-blue-500 rounded md opacity-80" />
              <span className="relative text-white font-bold text-sm leading-none">N</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">Nutralens</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "overview" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"}`}
          >
            <LayoutDashboard className="w-4 h-4" /> Overview
          </button>
          <button 
            onClick={() => setActiveTab("live")}
            className={`flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "live" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"}`}
          >
            <Video className="w-4 h-4" /> Live View
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
            <Package className="w-4 h-4" /> Inventory
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
            <Users className="w-4 h-4" /> User Profiles
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </button>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors">
            <LogOut className="w-4 h-4" /> Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <h1 className="text-lg font-semibold text-slate-900 dark:text-white capitalize">{activeTab}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Machine Health:</span>
              <button 
                onClick={() => setMachineHealth(!machineHealth)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${machineHealth ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${machineHealth ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${machineHealth ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                {machineHealth ? 'Online' : 'Offline'}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=11" alt="Operator" />
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
          {activeTab === "overview" && (
            <>
              {/* Stats Row */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Revenue</p>
                      <Activity className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">$3,850.00</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Transactions</p>
                      <Activity className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">+573</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">+201 since last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Low Stock Items</p>
                      <Package className="h-4 w-4 text-amber-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">4</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Requires attention</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Users</p>
                      <Users className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">1,240</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">+12% new biometric profiles</p>
                  </CardContent>
                </Card>
              </div>

              {/* Chart & Recent Activity */}
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Daily revenue across all machines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dx={-10} tickFormatter={(value) => `$${value}`} />
                          <Tooltip 
                            cursor={{fill: '#1e293b', opacity: 0.1}} 
                            contentStyle={{backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#f8fafc'}}
                            itemStyle={{color: '#10b981'}}
                          />
                          <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Dispenses</CardTitle>
                    <CardDescription>Latest customized snacks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { time: "2 min ago", user: "Sarah M.", item: "Energy Mix" },
                        { time: "15 min ago", user: "Mike T.", item: "Keto Crunch" },
                        { time: "1 hour ago", user: "Elena R.", item: "Protein Boost" },
                        { time: "3 hours ago", user: "David K.", item: "Recovery Mix" },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-slate-900 dark:text-white leading-none">{activity.item}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Dispensed to {activity.user}</p>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {activeTab === "live" && (
            <Card className="border-emerald-500/20 overflow-hidden">
              <CardHeader className="bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-emerald-500" />
                      AI Vision Feed
                    </CardTitle>
                    <CardDescription>Real-time camera calibration & biometric feedback</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold animate-pulse">
                    <div className="w-2 h-2 bg-red-500 rounded-full" /> LIVE
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop" alt="Vending Machine View" className="w-full h-full object-cover opacity-60" />
                  
                  {/* Mock AI Overlays */}
                  <div className="absolute top-[20%] left-[40%] w-[120px] h-[150px] border-2 border-emerald-500 bg-emerald-500/10 rounded-lg">
                    <div className="absolute -top-6 left-0 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded font-mono">User Recognized: 98%</div>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <p className="text-white font-mono text-sm">Calibration complete. Biometric tracking active.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
