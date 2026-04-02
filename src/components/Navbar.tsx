"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Bell, MessageCircle, Menu, X, User, LogIn } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">F</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            fan<span className="text-pink-400">centro</span>
          </span>
        </Link>

        {/* Desktop search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search creators..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/discover" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            Discover
          </Link>
          <Link href="/feed" className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            Feed
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:flex relative p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
          </button>
          <Link href="/messages" className="hidden md:flex relative p-2 text-gray-400 hover:text-white transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
          </Link>
          <Link href="/login" className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all">
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <Link href="/signup" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-lg transition-all shadow-lg shadow-pink-500/20">
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden"><User className="w-4 h-4" /></span>
          </Link>
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 border-t border-white/5">
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              autoFocus
              type="text"
              placeholder="Search creators..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50"
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-950 border-t border-white/5 px-4 py-3 space-y-1">
          <Link href="/discover" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Discover
          </Link>
          <Link href="/feed" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Feed
          </Link>
          <Link href="/messages" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Messages
          </Link>
          <Link href="/dashboard" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Creator Dashboard
          </Link>
          <div className="pt-2 border-t border-white/5 flex gap-3">
            <Link href="/login" className="flex-1 text-center py-2.5 text-sm text-gray-300 border border-white/10 rounded-lg" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <Link href="/signup" className="flex-1 text-center py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg" onClick={() => setMobileOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
