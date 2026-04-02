"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, DollarSign, Lock, Share2, Bookmark } from "lucide-react";
import { Post, formatNumber } from "@/lib/data";
import { useState } from "react";

export default function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-gray-900 rounded-2xl border border-white/5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Link href={`/${post.creatorUsername}`} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-800 shrink-0">
            <Image
              src={post.creatorAvatar}
              alt={post.creatorName}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-white text-sm font-semibold group-hover:text-pink-400 transition-colors">
              {post.creatorName}
            </p>
            <p className="text-gray-500 text-xs">@{post.creatorUsername} · {post.timestamp}</p>
          </div>
        </Link>
        <Link
          href={`/${post.creatorUsername}`}
          className="px-3 py-1.5 text-xs font-medium text-pink-400 border border-pink-500/30 hover:bg-pink-500/10 rounded-lg transition-all"
        >
          Subscribe
        </Link>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-200 text-sm leading-relaxed">
          {post.content}
        </p>
      </div>

      {/* Tier badge */}
      {post.tier && (
        <div className="px-4 pb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs rounded-full">
            <Lock className="w-3 h-3" />
            {post.tier.charAt(0).toUpperCase() + post.tier.slice(1)} subscribers only
          </span>
        </div>
      )}

      {/* Media */}
      {post.images.length > 0 && (
        <div className="relative">
          {post.locked ? (
            <div className="relative">
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.images[0]})` }}
              />
              <div className="absolute inset-0 backdrop-blur-xl bg-gray-900/60 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-pink-500/40">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold mb-1">Exclusive Content</p>
                  <p className="text-gray-400 text-sm">Subscribe to unlock this post</p>
                </div>
                <Link
                  href={`/${post.creatorUsername}`}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-xl transition-all shadow-lg shadow-pink-500/30"
                >
                  Unlock Now
                </Link>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-72">
              <Image
                src={post.images[0]}
                alt="Post image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              liked ? "text-pink-500" : "text-gray-500 hover:text-pink-400"
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
            <span>{formatNumber(likeCount)}</span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{formatNumber(post.comments)}</span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-400 transition-colors">
            <DollarSign className="w-5 h-5" />
            <span>{formatNumber(post.tips)}</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => { e.preventDefault(); setSaved(!saved); }}
            className={`p-2 rounded-lg transition-colors ${saved ? "text-yellow-400 bg-yellow-400/10" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"}`}
          >
            <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-300 hover:bg-white/5 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
