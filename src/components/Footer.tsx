import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">F</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                fan<span className="text-pink-400">centro</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The platform where creators connect with their biggest fans through exclusive content and direct messaging.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              {["Discover", "Feed", "Live", "Trending"].map((item) => (
                <li key={item}>
                  <Link href="/discover" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Creators</h4>
            <ul className="space-y-3">
              {["Start Creating", "Creator Dashboard", "Monetization", "Analytics"].map((item) => (
                <li key={item}>
                  <Link href="/dashboard" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 FanCentro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Support"].map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
