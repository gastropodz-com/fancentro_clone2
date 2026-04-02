export type SubscriptionTier = {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  color: string;
};

export type Creator = {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  cover: string;
  subscribers: number;
  posts: number;
  likes: number;
  verified: boolean;
  categories: string[];
  tiers: SubscriptionTier[];
  location: string;
  joinedDate: string;
  online: boolean;
};

export type Post = {
  id: string;
  creatorId: string;
  creatorUsername: string;
  creatorName: string;
  creatorAvatar: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  tips: number;
  locked: boolean;
  tier: string | null;
  timestamp: string;
  type: "photo" | "video" | "text";
};

export type Message = {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  read: boolean;
};

const GRADIENT_AVATARS = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia&backgroundColor=b6e3f4",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna&backgroundColor=ffdfbf",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria&backgroundColor=d1f4e0",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Zara&backgroundColor=ffd6e7",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Nova&backgroundColor=c0aede",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Jade&backgroundColor=b6e3f4",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia&backgroundColor=ffdfbf",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=d1f4e0",
];

export const CREATORS: Creator[] = [
  {
    id: "1",
    username: "sofia_creates",
    displayName: "Sofia Rose",
    bio: "Lifestyle content creator | Fitness enthusiast | Travel lover 🌍 Sharing my adventures and daily life. Subscribe for exclusive behind-the-scenes content!",
    avatar: GRADIENT_AVATARS[0],
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    subscribers: 12400,
    posts: 347,
    likes: 89200,
    verified: true,
    categories: ["Fitness", "Lifestyle", "Travel"],
    location: "Los Angeles, CA",
    joinedDate: "March 2022",
    online: true,
    tiers: [
      {
        id: "fan",
        name: "Fan",
        price: 9.99,
        benefits: ["Access to all photos", "Monthly Q&A", "Early access to content"],
        color: "from-pink-500 to-rose-500",
      },
      {
        id: "superfan",
        name: "Super Fan",
        price: 19.99,
        benefits: ["Everything in Fan", "Exclusive videos", "Direct messaging", "Weekly live streams"],
        color: "from-purple-500 to-pink-500",
      },
      {
        id: "vip",
        name: "VIP",
        price: 49.99,
        benefits: ["Everything in Super Fan", "1-on-1 video calls", "Custom content requests", "Name in credits"],
        color: "from-amber-500 to-orange-500",
      },
    ],
  },
  {
    id: "2",
    username: "luna_art",
    displayName: "Luna Artisan",
    bio: "Digital artist & creator 🎨 Sharing tutorials, time-lapses, and exclusive artwork. Turning imagination into reality one pixel at a time.",
    avatar: GRADIENT_AVATARS[1],
    cover: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
    subscribers: 8750,
    posts: 215,
    likes: 54300,
    verified: true,
    categories: ["Art", "Digital", "Tutorials"],
    location: "New York, NY",
    joinedDate: "June 2021",
    online: false,
    tiers: [
      {
        id: "supporter",
        name: "Supporter",
        price: 7.99,
        benefits: ["HD artwork downloads", "Monthly wallpapers", "Exclusive sketches"],
        color: "from-cyan-500 to-blue-500",
      },
      {
        id: "patron",
        name: "Patron",
        price: 24.99,
        benefits: ["Everything in Supporter", "Video tutorials", "PSD source files", "Monthly critique"],
        color: "from-indigo-500 to-purple-500",
      },
    ],
  },
  {
    id: "3",
    username: "aria_fitness",
    displayName: "Aria Strong",
    bio: "Certified personal trainer & nutritionist 💪 Helping you reach your fitness goals. Exclusive workout plans, meal preps, and motivation!",
    avatar: GRADIENT_AVATARS[2],
    cover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    subscribers: 21300,
    posts: 580,
    likes: 145000,
    verified: true,
    categories: ["Fitness", "Nutrition", "Wellness"],
    location: "Miami, FL",
    joinedDate: "January 2021",
    online: true,
    tiers: [
      {
        id: "basic",
        name: "Basic",
        price: 14.99,
        benefits: ["Weekly workout plans", "Recipe collection", "Community access"],
        color: "from-green-500 to-emerald-500",
      },
      {
        id: "premium",
        name: "Premium",
        price: 34.99,
        benefits: ["Everything in Basic", "Custom meal plans", "Video coaching", "Progress tracking"],
        color: "from-teal-500 to-cyan-500",
      },
      {
        id: "elite",
        name: "Elite",
        price: 79.99,
        benefits: ["Everything in Premium", "Weekly 1-on-1 calls", "Custom programming", "24/7 messaging support"],
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  {
    id: "4",
    username: "zara_music",
    displayName: "Zara Melody",
    bio: "Singer-songwriter & music producer 🎵 Sharing unreleased tracks, behind-the-scenes studio sessions, and original compositions.",
    avatar: GRADIENT_AVATARS[3],
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    subscribers: 6200,
    posts: 128,
    likes: 38700,
    verified: false,
    categories: ["Music", "Songwriting", "Behind The Scenes"],
    location: "Nashville, TN",
    joinedDate: "September 2022",
    online: true,
    tiers: [
      {
        id: "listener",
        name: "Listener",
        price: 5.99,
        benefits: ["Unreleased demo tracks", "Monthly playlist", "Lyrics & chords"],
        color: "from-violet-500 to-purple-500",
      },
      {
        id: "backstage",
        name: "Backstage",
        price: 15.99,
        benefits: ["Everything in Listener", "Studio session videos", "Songwriting process", "Song dedications"],
        color: "from-fuchsia-500 to-pink-500",
      },
    ],
  },
  {
    id: "5",
    username: "nova_chef",
    displayName: "Nova Cuisine",
    bio: "Michelin-trained chef 👨‍🍳 Sharing restaurant-quality recipes, cooking techniques, and food science. Make every meal extraordinary!",
    avatar: GRADIENT_AVATARS[4],
    cover: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    subscribers: 15800,
    posts: 423,
    likes: 97600,
    verified: true,
    categories: ["Cooking", "Food", "Recipes"],
    location: "Chicago, IL",
    joinedDate: "April 2021",
    online: false,
    tiers: [
      {
        id: "foodie",
        name: "Foodie",
        price: 8.99,
        benefits: ["Weekly recipes", "Shopping guides", "Kitchen tips"],
        color: "from-yellow-500 to-amber-500",
      },
      {
        id: "chef",
        name: "Chef",
        price: 22.99,
        benefits: ["Everything in Foodie", "HD cooking videos", "Seasonal menus", "Ingredient sourcing"],
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  {
    id: "6",
    username: "jade_travel",
    displayName: "Jade Wanderer",
    bio: "Full-time travel blogger ✈️ 50+ countries and counting. Honest travel guides, photography tips, and hidden gems you won't find in guidebooks.",
    avatar: GRADIENT_AVATARS[5],
    cover: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80",
    subscribers: 18500,
    posts: 692,
    likes: 215000,
    verified: true,
    categories: ["Travel", "Photography", "Adventure"],
    location: "Nomadic 🌍",
    joinedDate: "February 2020",
    online: true,
    tiers: [
      {
        id: "explorer",
        name: "Explorer",
        price: 11.99,
        benefits: ["Exclusive travel guides", "Photo presets", "Destination tips"],
        color: "from-sky-500 to-blue-500",
      },
      {
        id: "adventurer",
        name: "Adventurer",
        price: 28.99,
        benefits: ["Everything in Explorer", "Trip planning help", "Gear recommendations", "Monthly calls"],
        color: "from-blue-500 to-indigo-500",
      },
    ],
  },
  {
    id: "7",
    username: "mia_fashion",
    displayName: "Mia Style",
    bio: "Fashion stylist & trend forecaster 👗 Helping you build a wardrobe you love. Personal styling tips, outfit breakdowns & shopping deals.",
    avatar: GRADIENT_AVATARS[6],
    cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    subscribers: 9300,
    posts: 267,
    likes: 61200,
    verified: false,
    categories: ["Fashion", "Style", "Beauty"],
    location: "Paris, France",
    joinedDate: "July 2022",
    online: false,
    tiers: [
      {
        id: "trendsetter",
        name: "Trendsetter",
        price: 12.99,
        benefits: ["Monthly style guide", "Shopping hauls", "Trend reports"],
        color: "from-rose-500 to-pink-500",
      },
      {
        id: "stylist",
        name: "Personal Stylist",
        price: 39.99,
        benefits: ["Everything in Trendsetter", "Personal styling consultation", "Capsule wardrobe planning", "Direct messaging"],
        color: "from-pink-500 to-fuchsia-500",
      },
    ],
  },
  {
    id: "8",
    username: "emma_writes",
    displayName: "Emma Prose",
    bio: "Author & creative writing coach ✍️ Published novelist sharing exclusive chapters, writing workshops, and craft secrets.",
    avatar: GRADIENT_AVATARS[7],
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    subscribers: 4800,
    posts: 189,
    likes: 28400,
    verified: true,
    categories: ["Writing", "Books", "Creative"],
    location: "London, UK",
    joinedDate: "November 2021",
    online: true,
    tiers: [
      {
        id: "reader",
        name: "Reader",
        price: 6.99,
        benefits: ["Exclusive short stories", "Early chapter releases", "Writing prompts"],
        color: "from-amber-500 to-yellow-500",
      },
      {
        id: "writer",
        name: "Writer",
        price: 18.99,
        benefits: ["Everything in Reader", "Monthly workshop", "Manuscript feedback", "Publishing guidance"],
        color: "from-stone-500 to-amber-500",
      },
    ],
  },
];

export const POSTS: Post[] = [
  {
    id: "p1",
    creatorId: "1",
    creatorUsername: "sofia_creates",
    creatorName: "Sofia Rose",
    creatorAvatar: GRADIENT_AVATARS[0],
    content: "Morning hike in the mountains was absolutely breathtaking today! 🏔️ The sunrise was pure magic. This is why I wake up at 5am. More exclusive shots in the gallery for subscribers! 📸",
    images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"],
    likes: 2847,
    comments: 143,
    tips: 89,
    locked: false,
    tier: null,
    timestamp: "2 hours ago",
    type: "photo",
  },
  {
    id: "p2",
    creatorId: "3",
    creatorUsername: "aria_fitness",
    creatorName: "Aria Strong",
    creatorAvatar: GRADIENT_AVATARS[2],
    content: "Today's full body HIIT workout is LIVE for all Premium subscribers! 🔥 45 minutes, no equipment needed. This one will have you sweating from minute one. Drop a 💪 if you're in!",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"],
    likes: 5621,
    comments: 312,
    tips: 234,
    locked: true,
    tier: "premium",
    timestamp: "4 hours ago",
    type: "video",
  },
  {
    id: "p3",
    creatorId: "2",
    creatorUsername: "luna_art",
    creatorName: "Luna Artisan",
    creatorAvatar: GRADIENT_AVATARS[1],
    content: "Final piece from my 'Urban Dreams' series 🎨 This one took 40+ hours and every single brushstroke was intentional. The full time-lapse and PSD file are available for Patrons!",
    images: ["https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80"],
    likes: 1893,
    comments: 97,
    tips: 156,
    locked: false,
    tier: null,
    timestamp: "6 hours ago",
    type: "photo",
  },
  {
    id: "p4",
    creatorId: "6",
    creatorUsername: "jade_travel",
    creatorName: "Jade Wanderer",
    creatorAvatar: GRADIENT_AVATARS[5],
    content: "Currently somewhere in Patagonia with zero cell service (posting this on a sat connection) and all I can say is... this place will destroy your soul in the best way possible. 🌊",
    images: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"],
    likes: 7234,
    comments: 489,
    tips: 412,
    locked: false,
    tier: null,
    timestamp: "1 day ago",
    type: "photo",
  },
  {
    id: "p5",
    creatorId: "5",
    creatorUsername: "nova_chef",
    creatorName: "Nova Cuisine",
    creatorAvatar: GRADIENT_AVATARS[4],
    content: "Truffle risotto that took me 3 years to perfect. The secret? It's all in the Parmesan rind stock. Full recipe & video tutorial dropping for Chef subscribers tonight 🍄✨",
    images: ["https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80"],
    likes: 3456,
    comments: 218,
    tips: 178,
    locked: true,
    tier: "chef",
    timestamp: "1 day ago",
    type: "photo",
  },
  {
    id: "p6",
    creatorId: "4",
    creatorUsername: "zara_music",
    creatorName: "Zara Melody",
    creatorAvatar: GRADIENT_AVATARS[3],
    content: "Recorded something special at 3am last night. Sometimes the best songs come when you least expect them 🎵 Demo dropping for Backstage subscribers this Friday. You're going to love this one.",
    images: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"],
    likes: 2103,
    comments: 167,
    tips: 298,
    locked: true,
    tier: "backstage",
    timestamp: "2 days ago",
    type: "text",
  },
];

export const CATEGORIES = [
  "All", "Fitness", "Lifestyle", "Travel", "Art", "Music", "Cooking",
  "Fashion", "Gaming", "Writing", "Photography", "Beauty", "Wellness",
];

export const formatNumber = (n: number): string => {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
};
