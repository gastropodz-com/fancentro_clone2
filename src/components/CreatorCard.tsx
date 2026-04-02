import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Heart, ImageIcon } from "lucide-react";
import { Creator, formatNumber } from "@/lib/data";

export default function CreatorCard({ creator }: { creator: Creator }) {
  const lowestPrice = Math.min(...creator.tiers.map((t) => t.price));

  return (
    <Link href={`/${creator.username}`} className="group block">
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1">
        {/* Cover image */}
        <div className="relative h-36 overflow-hidden">
          <Image
            src={creator.cover}
            alt={`${creator.displayName} cover`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

          {/* Categories */}
          <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
            {creator.categories.slice(0, 2).map((cat) => (
              <span key={cat} className="px-2 py-0.5 text-xs bg-black/50 backdrop-blur-sm text-gray-200 rounded-full border border-white/10">
                {cat}
              </span>
            ))}
          </div>

          {/* Online indicator */}
          {creator.online && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400">Online</span>
            </div>
          )}
        </div>

        {/* Avatar */}
        <div className="absolute top-[88px] left-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gray-900 bg-gray-800">
              <Image
                src={creator.avatar}
                alt={creator.displayName}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            {creator.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5">
                <CheckCircle className="w-3.5 h-3.5 text-white fill-white" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="pt-10 px-4 pb-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-white font-semibold text-sm flex items-center gap-1.5">
                {creator.displayName}
              </h3>
              <p className="text-gray-500 text-xs">@{creator.username}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">from</p>
              <p className="text-pink-400 font-bold text-sm">${lowestPrice}/mo</p>
            </div>
          </div>

          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
            {creator.bio}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 text-gray-500">
              <Users className="w-3.5 h-3.5" />
              <span className="text-xs">{formatNumber(creator.subscribers)}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Heart className="w-3.5 h-3.5" />
              <span className="text-xs">{formatNumber(creator.likes)}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="text-xs">{formatNumber(creator.posts)}</span>
            </div>
          </div>

          <button className="w-full py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-xl transition-all shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40">
            Subscribe
          </button>
        </div>
      </div>
    </Link>
  );
}
