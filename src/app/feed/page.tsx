"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Compass, Bookmark, TrendingUp, Flame } from "lucide-react";
import { POSTS, CREATORS } from "@/lib/data";
import PostCard from "@/components/PostCard";

const FEED_TABS = [
  { id: "following", label: "Following", icon: Home },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "saved", label: "Saved", icon: Bookmark },
];

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState("explore");
  const suggestedCreators = CREATORS.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        {/* Main feed */}
        <div>
          {/* Feed tabs */}
          <div className="flex border-b border-white/10 mb-6">
            {FEED_TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
                  activeTab === id
                    ? "border-pink-500 text-pink-400"
                    : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {activeTab === "following" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Your feed is empty</h3>
              <p className="text-gray-500 mb-6">Subscribe to creators to see their posts here</p>
              <Link href="/discover" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium text-sm">
                Discover Creators
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Stories row */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {CREATORS.slice(0, 6).map((creator) => (
                  <Link key={creator.id} href={`/${creator.username}`} className="flex flex-col items-center gap-1.5 shrink-0">
                    <div className={`relative p-0.5 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 ${creator.online ? "" : "opacity-60"}`}>
                      <div className="w-14 h-14 rounded-[14px] overflow-hidden bg-gray-800 border-2 border-gray-950">
                        <Image src={creator.avatar} alt={creator.displayName} width={56} height={56} className="object-cover" />
                      </div>
                      {creator.online && (
                        <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-950" />
                      )}
                    </div>
                    <span className="text-xs text-gray-400 max-w-[60px] text-center truncate">{creator.displayName.split(" ")[0]}</span>
                  </Link>
                ))}
              </div>

              {/* Posts */}
              {POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}

              {/* Load more */}
              <button className="w-full py-3 bg-gray-900 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white rounded-xl text-sm font-medium transition-all">
                Load More Posts
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block space-y-6">
          {/* Trending creators */}
          <div className="bg-gray-900 rounded-2xl border border-white/5 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-orange-400" />
              <h3 className="text-white font-semibold">Trending Creators</h3>
            </div>
            <div className="space-y-4">
              {suggestedCreators.map((creator) => (
                <Link key={creator.id} href={`/${creator.username}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-800 shrink-0">
                    <Image src={creator.avatar} alt={creator.displayName} width={40} height={40} className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium group-hover:text-pink-400 transition-colors truncate">{creator.displayName}</p>
                    <p className="text-gray-500 text-xs">@{creator.username}</p>
                  </div>
                  <button className="px-3 py-1.5 text-xs font-medium text-pink-400 border border-pink-500/30 hover:bg-pink-500/10 rounded-lg transition-all shrink-0">
                    Follow
                  </button>
                </Link>
              ))}
            </div>
            <Link href="/discover" className="block text-center text-pink-400 hover:text-pink-300 text-sm mt-4 transition-colors">
              Show more creators →
            </Link>
          </div>

          {/* Categories */}
          <div className="bg-gray-900 rounded-2xl border border-white/5 p-5">
            <h3 className="text-white font-semibold mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-2">
              {["Fitness", "Travel", "Art", "Music", "Cooking", "Fashion", "Gaming", "Writing"].map((cat) => (
                <Link
                  key={cat}
                  href={`/discover`}
                  className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white text-xs rounded-lg border border-white/5 transition-all"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Become a creator CTA */}
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-2xl p-5">
            <h3 className="text-white font-bold mb-2">Become a Creator</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Share your passion and earn money doing what you love.
            </p>
            <Link
              href="/signup"
              className="block text-center py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl text-sm font-semibold"
            >
              Start Creating Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
