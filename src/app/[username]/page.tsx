"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import {
  CheckCircle, MapPin, Calendar, Users, Heart, ImageIcon,
  Grid3X3, MessageCircle, Lock, Share2, Bell, ChevronRight,
} from "lucide-react";
import { CREATORS, POSTS, formatNumber } from "@/lib/data";
import PostCard from "@/components/PostCard";

export default function CreatorProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = use(params);
  const creator = CREATORS.find((c) => c.username === username);
  const [activeTab, setActiveTab] = useState<"posts" | "media" | "subscriptions">("posts");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  if (!creator) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="text-6xl mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">Creator not found</h1>
        <p className="text-gray-400 mb-6">This creator doesn&apos;t exist or may have been removed.</p>
        <Link href="/discover" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium">
          Discover Creators
        </Link>
      </div>
    );
  }

  const creatorPosts = POSTS.filter((p) => p.creatorId === creator.id);
  const lowestTier = creator.tiers[0];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Cover */}
      <div className="relative h-52 sm:h-72 overflow-hidden">
        <Image
          src={creator.cover}
          alt={`${creator.displayName} cover`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
      </div>

      {/* Profile section */}
      <div className="relative px-4 sm:px-6 -mt-16 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          {/* Avatar */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-gray-950 bg-gray-800">
              <Image
                src={creator.avatar}
                alt={creator.displayName}
                width={112}
                height={112}
                className="object-cover"
              />
            </div>
            {creator.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white fill-white" />
              </div>
            )}
            {creator.online && (
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-950" />
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 sm:pb-1">
            <button className="p-2.5 bg-gray-900 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white rounded-xl transition-all">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2.5 bg-gray-900 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white rounded-xl transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <Link
              href="/messages"
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Message
            </Link>
            <button
              onClick={() => setShowSubscribeModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-pink-500/20"
            >
              {subscribed ? "Subscribed ✓" : `Subscribe · $${lowestTier.price}/mo`}
            </button>
          </div>
        </div>

        {/* Creator info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-white">{creator.displayName}</h1>
            {creator.verified && <CheckCircle className="w-5 h-5 text-blue-400 fill-blue-400" />}
          </div>
          <p className="text-gray-500 mb-3">@{creator.username}</p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-4">{creator.bio}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {creator.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Joined {creator.joinedDate}
            </div>
            {creator.online && (
              <div className="flex items-center gap-1.5 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Online now
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mb-6 pb-6 border-b border-white/5">
          {[
            { icon: Users, value: formatNumber(creator.subscribers), label: "subscribers" },
            { icon: ImageIcon, value: formatNumber(creator.posts), label: "posts" },
            { icon: Heart, value: formatNumber(creator.likes), label: "likes" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center sm:text-left">
              <div className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-gray-500" />
                <span className="text-white font-bold text-lg">{value}</span>
              </div>
              <p className="text-gray-500 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {creator.categories.map((cat) => (
            <span key={cat} className="px-3 py-1.5 bg-gray-900 border border-white/10 text-gray-400 text-xs rounded-full">
              {cat}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-6">
          {[
            { id: "posts", label: "Posts", icon: Grid3X3 },
            { id: "media", label: "Media", icon: ImageIcon },
            { id: "subscriptions", label: "Subscriptions", icon: Lock },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
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

        {/* Posts tab */}
        {activeTab === "posts" && (
          <div className="space-y-6">
            {creatorPosts.length > 0 ? (
              creatorPosts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-4">
                  <Grid3X3 className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-gray-400 font-medium mb-1">No posts yet</p>
                <p className="text-gray-600 text-sm">Subscribe to be notified when new content drops</p>
              </div>
            )}

            {/* Locked content teaser */}
            {!subscribed && (
              <div className="relative rounded-2xl overflow-hidden border border-pink-500/20">
                <div className="absolute inset-0 backdrop-blur-sm bg-gray-950/80" />
                <div className="relative p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-pink-500/30">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Unlock exclusive content</h3>
                  <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
                    Subscribe to {creator.displayName} to access {creator.posts}+ exclusive posts, photos, and videos.
                  </p>
                  <button
                    onClick={() => setShowSubscribeModal(true)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-pink-500/20"
                  >
                    Subscribe from ${lowestTier.price}/mo
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Media tab */}
        {activeTab === "media" && (
          <div>
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-gray-900 group">
                  {i < 3 ? (
                    <>
                      <Image
                        src={POSTS[i % POSTS.length]?.images[0] || ""}
                        alt=""
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 33vw, 200px"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {!subscribed && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowSubscribeModal(true)}
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold"
                >
                  Unlock all media
                </button>
              </div>
            )}
          </div>
        )}

        {/* Subscriptions tab */}
        {activeTab === "subscriptions" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {creator.tiers.map((tier, idx) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-5 border transition-all cursor-pointer ${
                  selectedTier === tier.id
                    ? "border-pink-500/50 bg-gradient-to-b from-pink-500/10 to-purple-500/5"
                    : "border-white/10 bg-gray-900 hover:border-white/20"
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {idx === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tier.color} mb-3`} />
                <h3 className="text-white font-bold text-lg mb-0.5">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black text-white">${tier.price}</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <ul className="space-y-2.5 mb-5">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedTier(tier.id); setShowSubscribeModal(true); }}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    selectedTier === tier.id
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20"
                      : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                  }`}
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subscribe modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowSubscribeModal(false)} />
          <div className="relative bg-gray-900 rounded-3xl border border-white/10 p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-800">
                <Image src={creator.avatar} alt={creator.displayName} width={56} height={56} className="object-cover" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Subscribe to {creator.displayName}</h3>
                <p className="text-gray-500 text-sm">Choose your subscription plan</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {creator.tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                    selectedTier === tier.id
                      ? "border-pink-500/50 bg-pink-500/10"
                      : "border-white/10 bg-gray-800 hover:border-white/20"
                  }`}
                >
                  <div>
                    <p className="text-white font-semibold">{tier.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{tier.benefits[0]}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">${tier.price}</p>
                    <p className="text-gray-500 text-xs">per month</p>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => { setSubscribed(true); setShowSubscribeModal(false); }}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-pink-500/30"
            >
              Subscribe Now
            </button>
            <p className="text-gray-600 text-xs text-center mt-3">Cancel anytime · Billed monthly · Secure payment</p>
          </div>
        </div>
      )}
    </div>
  );
}
