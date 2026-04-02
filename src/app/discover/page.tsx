"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, TrendingUp, Sparkles, Clock, Users } from "lucide-react";
import { CREATORS, CATEGORIES } from "@/lib/data";
import CreatorCard from "@/components/CreatorCard";

const SORT_OPTIONS = [
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "new", label: "New", icon: Sparkles },
  { id: "popular", label: "Most Popular", icon: Users },
  { id: "recent", label: "Recently Active", icon: Clock },
];

export default function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("trending");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const filtered = CREATORS.filter((c) => {
    const matchesCategory = selectedCategory === "All" || c.categories.includes(selectedCategory);
    const matchesSearch =
      search === "" ||
      c.displayName.toLowerCase().includes(search.toLowerCase()) ||
      c.username.toLowerCase().includes(search.toLowerCase()) ||
      c.bio.toLowerCase().includes(search.toLowerCase());
    const minPrice = Math.min(...c.tiers.map((t) => t.price));
    const matchesPrice = minPrice >= priceRange[0] && minPrice <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Discover Creators</h1>
        <p className="text-gray-400">Find your next favorite creator across every category</p>
      </div>

      {/* Search & filter bar */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, username, or category..."
            className="w-full bg-gray-900 border border-white/10 focus:border-pink-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
            showFilters
              ? "bg-pink-500/10 border-pink-500/30 text-pink-400"
              : "bg-gray-900 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      {/* Expanded filters */}
      {showFilters && (
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-5 mb-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-400 block mb-3">Price Range ($/mo)</label>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-800 rounded-lg px-3 py-2 flex items-center gap-2">
                  <span className="text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full bg-transparent text-white text-sm focus:outline-none"
                    min="0"
                    max="100"
                  />
                </div>
                <span className="text-gray-600">–</span>
                <div className="flex-1 bg-gray-800 rounded-lg px-3 py-2 flex items-center gap-2">
                  <span className="text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full bg-transparent text-white text-sm focus:outline-none"
                    min="0"
                    max="500"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-3">Creator Status</label>
              <div className="flex gap-3">
                {["All", "Online", "Verified"].map((s) => (
                  <button
                    key={s}
                    className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all border border-white/5"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sort tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {SORT_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedSort(opt.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                selectedSort === opt.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20"
                  : "bg-gray-900 text-gray-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Category pills */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-white text-gray-950 font-medium"
                : "bg-gray-900 text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-500 text-sm">
          Showing <span className="text-white font-medium">{filtered.length}</span> creators
          {selectedCategory !== "All" && (
            <> in <span className="text-pink-400">{selectedCategory}</span></>
          )}
        </p>
        {(selectedCategory !== "All" || search) && (
          <button
            onClick={() => { setSelectedCategory("All"); setSearch(""); }}
            className="text-xs text-gray-500 hover:text-pink-400 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Creator grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-white font-semibold text-xl mb-2">No creators found</h3>
          <p className="text-gray-500">Try adjusting your filters or search term</p>
          <button
            onClick={() => { setSelectedCategory("All"); setSearch(""); }}
            className="mt-4 px-6 py-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-xl text-sm hover:bg-pink-500/20 transition-all"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Load more */}
      {filtered.length > 0 && (
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-gray-900 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all">
            Load More Creators
          </button>
        </div>
      )}
    </div>
  );
}
