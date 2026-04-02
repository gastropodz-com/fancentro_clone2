import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Play, Star, Shield, Zap, MessageCircle,
  TrendingUp, Lock, Users, DollarSign, CheckCircle,
} from "lucide-react";
import { CREATORS, formatNumber } from "@/lib/data";
import CreatorCard from "@/components/CreatorCard";

const STATS = [
  { value: "2M+", label: "Active Creators" },
  { value: "50M+", label: "Subscribers" },
  { value: "$500M+", label: "Paid to Creators" },
  { value: "150+", label: "Countries" },
];

const FEATURES = [
  {
    icon: Lock,
    title: "Gated Content",
    desc: "Monetize exclusive photos, videos, and text posts with flexible subscription tiers tailored to your audience.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    desc: "Build intimate fan connections with private messaging, voice messages, and pay-per-message unlocks.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    desc: "Real-time insights on earnings, subscriber growth, content performance, and audience demographics.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: DollarSign,
    title: "Flexible Monetization",
    desc: "Tips, paid posts, PPV messages, subscription bundles — multiple revenue streams in one platform.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Live Streaming",
    desc: "Go live with your fans, accept real-time tips, and create memorable interactive experiences.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Creator Protection",
    desc: "DMCA protection, watermarking, screen-capture prevention, and 24/7 dedicated support team.",
    color: "from-red-500 to-pink-500",
  },
];

const TESTIMONIALS = [
  {
    name: "Sofia Rose",
    username: "@sofia_creates",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia&backgroundColor=b6e3f4",
    quote: "FanCentro completely changed my life. In my first year, I earned more than I ever did in my 9-to-5. The tools are intuitive and the support team is incredible.",
    earnings: "$84K",
    period: "first year",
    stars: 5,
  },
  {
    name: "Aria Strong",
    username: "@aria_fitness",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria&backgroundColor=d1f4e0",
    quote: "As a tiny girl creator, the subscription tiers are perfect. I can offer different levels of coaching at different price points. My clients get exactly what they need.",
    earnings: "$12K",
    period: "per month",
    stars: 5,
  },
  {
    name: "Jade Wanderer",
    username: "@jade_travel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jade&backgroundColor=b6e3f4",
    quote: "I travel full-time funded entirely by my FanCentro subscribers. The analytics help me understand what content resonates and the messaging keeps me close to my fans.",
    earnings: "18K+",
    period: "subscribers",
    stars: 5,
  },
];

export default function HomePage() {
  const featuredCreators = CREATORS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950 to-purple-950/30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm mb-8">
              <Zap className="w-4 h-4" />
              <span>Trusted by 2M+ creators worldwide</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Your fans.{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Your rules.
              </span>{" "}
              Your income.
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
              Build a sustainable income doing what you love. Share exclusive content, connect directly with your biggest supporters, and get paid on your terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-2xl transition-all shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-0.5"
              >
                Start Creating Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/discover"
                className="flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all"
              >
                <Play className="w-5 h-5" />
                Browse Creators
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {CREATORS.slice(0, 4).map((c) => (
                  <div key={c.id} className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-950 bg-gray-800">
                    <Image src={c.avatar} alt={c.displayName} width={32} height={32} className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-500 text-xs">Loved by thousands of creators</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4 transform rotate-2">
              {CREATORS.slice(0, 4).map((creator, i) => (
                <div
                  key={creator.id}
                  className={`rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${
                    i % 2 === 0 ? "translate-y-4" : "-translate-y-4"
                  }`}
                >
                  <div className="relative h-32">
                    <Image src={creator.cover} alt="" fill className="object-cover" sizes="200px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20">
                        <Image src={creator.avatar} alt={creator.displayName} width={32} height={32} className="object-cover" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold leading-none">{creator.displayName}</p>
                        <p className="text-gray-400 text-xs">{formatNumber(creator.subscribers)} fans</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 px-3 py-2">
                    <p className="text-pink-400 text-xs font-semibold">from ${Math.min(...creator.tiers.map(t => t.price))}/mo</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured creators */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2">Trending Now</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Creators</h2>
          </div>
          <Link href="/discover" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            See all creators
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCreators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>

        <div className="flex sm:hidden justify-center mt-8">
          <Link href="/discover" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            See all creators <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900/30 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-3">Everything You Need</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built for creators, loved by fans</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Professional tools that scale with your career. From your first subscriber to your millionth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-gray-900/60 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start earning in minutes</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Create Your Profile", desc: "Set up your creator page in minutes. Add your bio, profile photo, and describe what exclusive content subscribers can expect." },
            { step: "02", title: "Set Your Tiers", desc: "Design subscription plans at different price points. Each tier unlocks different levels of content and personal interaction." },
            { step: "03", title: "Start Earning", desc: "Publish your first exclusive post. Fans subscribe, you earn. Monthly payouts directly to your bank account." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-pink-400">{item.step}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900/30 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-3">Success Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Creators who changed their lives</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-900 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-800">
                      <Image src={t.avatar} alt={t.name} width={40} height={40} className="object-cover" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.username}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold text-lg">{t.earnings}</p>
                    <p className="text-gray-500 text-xs">{t.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-3">Fair Revenue Share</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Keep more of what you earn</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Competitive revenue split with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { tier: "Starter", split: "80%", desc: "Creator keeps", monthly: "Free", features: ["Up to 500 subscribers", "Basic analytics", "Photo & video posts", "Email support"] },
            { tier: "Pro", split: "85%", desc: "Creator keeps", monthly: "$19/mo", features: ["Unlimited subscribers", "Advanced analytics", "Live streaming", "Priority support", "Custom branding"], highlight: true },
            { tier: "Premium", split: "90%", desc: "Creator keeps", monthly: "$49/mo", features: ["Everything in Pro", "Dedicated manager", "Early features access", "API access", "White-glove onboarding"] },
          ].map((plan) => (
            <div key={plan.tier} className={`rounded-2xl p-6 border transition-all ${plan.highlight ? "bg-gradient-to-b from-pink-500/10 to-purple-500/10 border-pink-500/30 shadow-2xl shadow-pink-500/10" : "bg-gray-900 border-white/5 hover:border-white/10"}`}>
              {plan.highlight && (
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-xs font-semibold">Most Popular</span>
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{plan.tier}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.monthly}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">{plan.split}</span>
                <span className="text-gray-400 text-sm">{plan.desc}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${plan.highlight ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-lg shadow-pink-500/20" : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-pink-500/10 to-transparent blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to turn your passion into profit?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Join over 2 million creators who trust FanCentro to build their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-2xl transition-all shadow-2xl shadow-pink-500/30"
            >
              Create Your Page Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/discover"
              className="flex items-center justify-center gap-2 px-10 py-4 text-base font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all"
            >
              <Users className="w-5 h-5" />
              Browse Creators
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-6">No credit card required · Free to start · Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
