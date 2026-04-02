"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp, Users, DollarSign, Heart, BarChart3, Settings,
  Plus, ImageIcon, Video, FileText, Bell, Eye, ChevronUp,
  MessageCircle, Calendar, Zap, Star,
} from "lucide-react";
import { CREATORS, POSTS, formatNumber } from "@/lib/data";

const creator = CREATORS[0]; // Sofia Rose as the logged-in creator

const STATS = [
  { label: "Total Earnings", value: "$4,842", change: "+12.5%", up: true, icon: DollarSign, color: "from-green-500 to-emerald-500" },
  { label: "Subscribers", value: "12,400", change: "+8.3%", up: true, icon: Users, color: "from-blue-500 to-cyan-500" },
  { label: "Total Posts", value: "347", change: "+24", up: true, icon: ImageIcon, color: "from-purple-500 to-pink-500" },
  { label: "Total Likes", value: "89.2K", change: "+5.1%", up: true, icon: Heart, color: "from-pink-500 to-rose-500" },
];

const RECENT_ACTIVITY = [
  { type: "subscribe", user: "Alex M.", tier: "Super Fan", time: "2m ago", amount: "$19.99" },
  { type: "tip", user: "Jordan K.", tier: null, time: "15m ago", amount: "$25.00" },
  { type: "subscribe", user: "Sam P.", tier: "VIP", time: "1h ago", amount: "$49.99" },
  { type: "comment", user: "Riley T.", tier: "Fan", time: "2h ago", amount: null },
  { type: "subscribe", user: "Casey W.", tier: "Fan", time: "3h ago", amount: "$9.99" },
  { type: "tip", user: "Morgan B.", tier: null, time: "5h ago", amount: "$10.00" },
];

const MONTHLY_EARNINGS = [
  { month: "Jul", amount: 3200 },
  { month: "Aug", amount: 3800 },
  { month: "Sep", amount: 3400 },
  { month: "Oct", amount: 4100 },
  { month: "Nov", amount: 4600 },
  { month: "Dec", amount: 4842 },
];

const maxEarning = Math.max(...MONTHLY_EARNINGS.map(m => m.amount));

const SIDEBAR_LINKS = [
  { label: "Overview", icon: BarChart3, active: true },
  { label: "Content", icon: ImageIcon, active: false },
  { label: "Subscribers", icon: Users, active: false },
  { label: "Messages", icon: MessageCircle, active: false },
  { label: "Schedule", icon: Calendar, active: false },
  { label: "Analytics", icon: TrendingUp, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 border-r border-white/5 bg-gray-950 p-4 shrink-0">
        <div className="flex items-center gap-3 p-3 mb-6">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-800">
            <Image src={creator.avatar} alt={creator.displayName} width={40} height={40} className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">{creator.displayName}</p>
            <p className="text-gray-500 text-xs">@{creator.username}</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {SIDEBAR_LINKS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeNav === label
                  ? "bg-gradient-to-r from-pink-500/20 to-purple-500/10 text-pink-400 border border-pink-500/20"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="pt-4 border-t border-white/5">
          <Link
            href={`/${creator.username}`}
            className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-500 hover:text-gray-300 hover:bg-white/5 rounded-xl transition-all"
          >
            <Eye className="w-4 h-4" />
            View my page
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white">Creator Dashboard</h1>
              <p className="text-gray-500 text-sm">Welcome back, {creator.displayName.split(" ")[0]}! 👋</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 bg-gray-900 border border-white/10 text-gray-400 hover:text-white rounded-xl transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-pink-500/20">
                <Plus className="w-4 h-4" />
                New Post
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-gray-900 rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-medium ${stat.up ? "text-green-400" : "text-red-400"}`}>
                      <ChevronUp className={`w-3 h-3 ${!stat.up ? "rotate-180" : ""}`} />
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-white font-bold text-xl mb-0.5">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-6 mb-8">
            {/* Earnings chart */}
            <div className="bg-gray-900 rounded-2xl border border-white/5 p-5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold">Earnings Overview</h3>
                  <p className="text-gray-500 text-sm">Last 6 months</p>
                </div>
                <div className="flex gap-2">
                  {["6M", "1Y", "All"].map((t) => (
                    <button
                      key={t}
                      className={`px-3 py-1 text-xs rounded-lg transition-all ${t === "6M" ? "bg-pink-500/20 text-pink-400" : "text-gray-500 hover:text-gray-300"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simple bar chart */}
              <div className="flex items-end gap-3 h-40">
                {MONTHLY_EARNINGS.map((m) => (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-pink-500/80 to-purple-500/80 transition-all hover:from-pink-400 hover:to-purple-400"
                      style={{ height: `${(m.amount / maxEarning) * 100}%` }}
                    />
                    <span className="text-xs text-gray-500">{m.month}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs">This Month</p>
                  <p className="text-white font-bold text-xl">$4,842</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400 text-xs font-medium">+12.5% vs last month</span>
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-gray-900 rounded-2xl border border-white/5 p-5">
              <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {RECENT_ACTIVITY.map((activity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      activity.type === "subscribe" ? "bg-blue-500/20 text-blue-400" :
                      activity.type === "tip" ? "bg-green-500/20 text-green-400" :
                      "bg-purple-500/20 text-purple-400"
                    }`}>
                      {activity.type === "subscribe" ? <Users className="w-4 h-4" /> :
                       activity.type === "tip" ? <DollarSign className="w-4 h-4" /> :
                       <MessageCircle className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-medium truncate">{activity.user}</p>
                      <p className="text-gray-600 text-xs">
                        {activity.type === "subscribe" ? `Subscribed · ${activity.tier}` :
                         activity.type === "tip" ? "Left a tip" : "Left a comment"}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      {activity.amount && (
                        <p className="text-green-400 text-xs font-semibold">{activity.amount}</p>
                      )}
                      <p className="text-gray-600 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: ImageIcon, label: "Upload Photo", color: "from-pink-500 to-rose-500" },
              { icon: Video, label: "Upload Video", color: "from-purple-500 to-indigo-500" },
              { icon: FileText, label: "Write Post", color: "from-blue-500 to-cyan-500" },
              { icon: Zap, label: "Go Live", color: "from-amber-500 to-orange-500" },
            ].map(({ icon: Icon, label, color }) => (
              <button key={label} className="bg-gray-900 hover:bg-gray-800 border border-white/5 hover:border-white/10 rounded-2xl p-4 text-center transition-all group">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">{label}</p>
              </button>
            ))}
          </div>

          {/* Recent posts performance */}
          <div className="bg-gray-900 rounded-2xl border border-white/5 p-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-semibold">Recent Posts</h3>
              <button className="text-pink-400 hover:text-pink-300 text-sm transition-colors">View all</button>
            </div>
            <div className="space-y-3">
              {POSTS.slice(0, 3).map((post) => (
                <div key={post.id} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800 shrink-0">
                    {post.images[0] && (
                      <Image src={post.images[0]} alt="" width={48} height={48} className="object-cover w-full h-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{post.content.slice(0, 60)}...</p>
                    <p className="text-gray-500 text-xs">{post.timestamp}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-center">
                      <p className="text-white text-sm font-semibold">{formatNumber(post.likes)}</p>
                      <p className="text-gray-600 text-xs">likes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-sm font-semibold">{formatNumber(post.comments)}</p>
                      <p className="text-gray-600 text-xs">comments</p>
                    </div>
                    <div className="text-center">
                      <p className="text-green-400 text-sm font-semibold">${post.tips}</p>
                      <p className="text-gray-600 text-xs">tips</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription tiers performance */}
          <div className="bg-gray-900 rounded-2xl border border-white/5 p-5 mt-6">
            <h3 className="text-white font-semibold mb-5">Subscription Tiers Performance</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {creator.tiers.map((tier, i) => {
                const counts = [7200, 3800, 1400];
                const percentages = [58, 31, 11];
                return (
                  <div key={tier.id} className="bg-gray-800 rounded-xl p-4">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tier.color} mb-3`} />
                    <h4 className="text-white font-medium mb-1">{tier.name}</h4>
                    <p className="text-2xl font-bold text-white mb-0.5">{formatNumber(counts[i])}</p>
                    <p className="text-gray-500 text-xs mb-3">{percentages[i]}% of subscribers</p>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${tier.color}`}
                        style={{ width: `${percentages[i]}%` }}
                      />
                    </div>
                    <p className="text-green-400 text-xs font-medium mt-2">
                      ${(counts[i] * tier.price).toLocaleString()}/mo
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top fans */}
          <div className="bg-gray-900 rounded-2xl border border-white/5 p-5 mt-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-semibold">Top Fans</h3>
              <Link href="/messages" className="text-pink-400 hover:text-pink-300 text-sm transition-colors">Message all</Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Alex M.", spent: "$482", tier: "VIP", streak: "8 months" },
                { name: "Jordan K.", spent: "$371", tier: "Super Fan", streak: "6 months" },
                { name: "Sam P.", spent: "$298", tier: "VIP", streak: "5 months" },
                { name: "Riley T.", spent: "$241", tier: "Super Fan", streak: "4 months" },
              ].map((fan) => (
                <div key={fan.name} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{fan.name}</p>
                    <p className="text-gray-500 text-xs">{fan.tier} · {fan.streak}</p>
                  </div>
                  <p className="text-green-400 text-sm font-semibold shrink-0">{fan.spent}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
