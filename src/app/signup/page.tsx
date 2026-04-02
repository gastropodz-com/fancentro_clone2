"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Mail, Lock, User, CheckCircle } from "lucide-react";

export default function SignupPage() {
  const [step, setStep] = useState<"account" | "type">("account");
  const [accountType, setAccountType] = useState<"fan" | "creator" | null>(null);
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("type");
  };

  const handleFinalSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-black text-base">F</span>
            </div>
            <span className="text-white font-bold text-2xl">fan<span className="text-pink-400">centro</span></span>
          </Link>

          {/* Progress */}
          <div className="flex items-center gap-2 justify-center mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === "account" ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white" : "bg-green-500 text-white"}`}>
              {step === "account" ? "1" : <CheckCircle className="w-4 h-4" />}
            </div>
            <div className={`h-1 w-12 rounded-full transition-all ${step === "type" ? "bg-gradient-to-r from-pink-500 to-purple-600" : "bg-white/10"}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === "type" ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white" : "bg-white/10 text-gray-500"}`}>
              2
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">
            {step === "account" ? "Create your account" : "How will you use FanCentro?"}
          </h1>
          <p className="text-gray-500 text-sm">
            {step === "account" ? "Join millions of creators and fans" : "We'll personalize your experience"}
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl border border-white/10 p-8">
          {step === "account" ? (
            <>
              {/* Social signup */}
              <div className="space-y-3 mb-6">
                {[
                  { name: "Google", color: "from-red-500/20 to-orange-500/20 border-red-500/20", icon: "G" },
                  { name: "Twitter / X", color: "from-sky-500/20 to-blue-500/20 border-sky-500/20", icon: "X" },
                ].map((social) => (
                  <button
                    key={social.name}
                    className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl border bg-gradient-to-r ${social.color} text-white text-sm font-medium hover:opacity-80 transition-opacity`}
                  >
                    <span className="font-bold">{social.icon}</span>
                    Continue with {social.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-600 text-sm">or</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <form onSubmit={handleAccountSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm block mb-1.5">Full name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="w-full bg-gray-800 border border-white/10 focus:border-pink-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1.5">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-gray-800 border border-white/10 focus:border-pink-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type={showPw ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="Min. 8 characters"
                      required
                      minLength={8}
                      className="w-full bg-gray-800 border border-white/10 focus:border-pink-500/50 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Password strength */}
                  {form.password && (
                    <div className="flex gap-1 mt-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 h-1 rounded-full transition-all ${
                            form.password.length >= (i + 1) * 3
                              ? form.password.length >= 12 ? "bg-green-500" : form.password.length >= 8 ? "bg-yellow-500" : "bg-red-500"
                              : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" required className="mt-0.5 rounded border-white/20 bg-gray-800 text-pink-500 focus:ring-pink-500" />
                  <label htmlFor="terms" className="text-gray-400 text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link href="#" className="text-pink-400 hover:underline">Terms of Service</Link>
                    {" "}and{" "}
                    <Link href="#" className="text-pink-400 hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-pink-500/20"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="space-y-4">
              {[
                {
                  type: "fan" as const,
                  title: "I'm a Fan",
                  desc: "Discover and subscribe to creators I love",
                  emoji: "❤️",
                  features: ["Follow unlimited creators", "Access exclusive content", "Direct messaging", "Tip your favorites"],
                },
                {
                  type: "creator" as const,
                  title: "I'm a Creator",
                  desc: "Share exclusive content and build my fanbase",
                  emoji: "✨",
                  features: ["Earn from subscriptions", "Flexible tier pricing", "Analytics dashboard", "Creator tools"],
                },
              ].map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => setAccountType(opt.type)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    accountType === opt.type
                      ? "border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-purple-500/5"
                      : "border-white/10 bg-gray-800 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{opt.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-semibold">{opt.title}</h3>
                        {accountType === opt.type && (
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-white fill-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{opt.desc}</p>
                      <ul className="space-y-1">
                        {opt.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="w-1 h-1 rounded-full bg-pink-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              ))}

              <button
                onClick={handleFinalSubmit}
                disabled={!accountType || loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-pink-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Create My Account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-400 hover:text-pink-300 font-medium transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
