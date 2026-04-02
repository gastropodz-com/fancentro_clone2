"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Send, Paperclip, DollarSign, MoreHorizontal, CheckCheck } from "lucide-react";
import { CREATORS } from "@/lib/data";

const CONVERSATIONS = CREATORS.map((c, i) => ({
  id: c.id,
  creator: c,
  lastMessage: [
    "Thanks for subscribing! Check out my latest post 🔥",
    "Your custom content request is ready!",
    "Hey! Don't forget about tonight's live stream 🎉",
    "New workout plan just dropped for Premium subscribers 💪",
    "Recipe of the week is up! Let me know what you think",
    "Just got back from my trip, new photos incoming!",
    "Writing something special for you this week ✍️",
    "New music demo dropping tomorrow! Stay tuned 🎵",
  ][i] || "Hey there!",
  time: ["2m", "15m", "1h", "3h", "Yesterday", "2d", "3d", "1w"][i],
  unread: [2, 0, 1, 0, 0, 3, 0, 0][i],
  online: c.online,
}));

const MESSAGES = [
  { id: 1, sender: "creator", text: "Hey! Thanks so much for subscribing to my Super Fan tier! 🎉 You're officially part of the inner circle.", time: "10:30 AM", read: true },
  { id: 2, sender: "me", text: "Omg I'm so excited! I've been following your content for years. This is amazing!", time: "10:32 AM", read: true },
  { id: 3, sender: "creator", text: "That means the world to me! I've got some really exclusive stuff planned for subscribers. You're going to love it 💕", time: "10:33 AM", read: true },
  { id: 4, sender: "creator", text: "I just posted a new photo set from my mountain hike this morning. 47 exclusive shots, only for Super Fan+ subscribers!", time: "10:35 AM", read: true },
  { id: 5, sender: "me", text: "Just unlocked them — these are incredible!! The lighting in the third one is stunning. How did you get that shot?", time: "10:40 AM", read: true },
  { id: 6, sender: "creator", text: "I woke up at 4:30am to catch the golden hour! Was freezing but 100% worth it 😅 I'll do a behind-the-scenes video on my process for VIP members soon", time: "10:42 AM", read: true },
  { id: 7, sender: "me", text: "Would love that! Any chance you'd consider doing custom requests?", time: "10:45 AM", read: false },
  { id: 8, sender: "creator", text: "Absolutely! VIP members get one custom request per month included 🌟 Send me what you have in mind and I'll make it happen!", time: "10:46 AM", read: false },
];

export default function MessagesPage() {
  const [selectedConvo, setSelectedConvo] = useState(CONVERSATIONS[0]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const filteredConvos = CONVERSATIONS.filter((c) =>
    c.creator.displayName.toLowerCase().includes(search.toLowerCase()) ||
    c.creator.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Conversation list */}
      <div className="w-80 shrink-0 border-r border-white/5 bg-gray-950 flex flex-col">
        <div className="p-4 border-b border-white/5">
          <h2 className="text-white font-bold text-lg mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search messages..."
              className="w-full bg-gray-900 border border-white/10 focus:border-pink-500/50 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredConvos.map((convo) => (
            <button
              key={convo.id}
              onClick={() => setSelectedConvo(convo)}
              className={`w-full flex items-center gap-3 p-4 border-b border-white/5 text-left transition-all ${
                selectedConvo.id === convo.id ? "bg-pink-500/10 border-l-2 border-l-pink-500" : "hover:bg-white/5"
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-800">
                  <Image src={convo.creator.avatar} alt={convo.creator.displayName} width={48} height={48} className="object-cover" />
                </div>
                {convo.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-950" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-white text-sm font-semibold truncate">{convo.creator.displayName}</p>
                  <span className="text-gray-600 text-xs shrink-0 ml-1">{convo.time}</span>
                </div>
                <p className="text-gray-500 text-xs truncate">{convo.lastMessage}</p>
              </div>
              {convo.unread > 0 && (
                <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{convo.unread}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-gray-950">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-800">
                <Image src={selectedConvo.creator.avatar} alt={selectedConvo.creator.displayName} width={40} height={40} className="object-cover" />
              </div>
              {selectedConvo.online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-gray-950" />
              )}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{selectedConvo.creator.displayName}</p>
              <p className="text-gray-500 text-xs">
                {selectedConvo.online ? (
                  <span className="text-green-400">Online now</span>
                ) : (
                  `@${selectedConvo.creator.username}`
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              <DollarSign className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Subscription context banner */}
          <div className="text-center">
            <span className="px-4 py-2 bg-gray-900 border border-white/5 rounded-full text-xs text-gray-500">
              You subscribed to {selectedConvo.creator.displayName}&apos;s Super Fan tier
            </span>
          </div>

          {MESSAGES.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} items-end gap-2`}
            >
              {msg.sender === "creator" && (
                <div className="w-8 h-8 rounded-xl overflow-hidden bg-gray-800 shrink-0 mb-0.5">
                  <Image src={selectedConvo.creator.avatar} alt="" width={32} height={32} className="object-cover" />
                </div>
              )}
              <div className={`max-w-[70%] ${msg.sender === "me" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "me"
                      ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-br-sm"
                      : "bg-gray-800 text-gray-200 rounded-bl-sm border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-600 text-xs">{msg.time}</span>
                  {msg.sender === "me" && (
                    <CheckCheck className={`w-3.5 h-3.5 ${msg.read ? "text-pink-400" : "text-gray-600"}`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="px-4 py-4 border-t border-white/5 bg-gray-950">
          <div className="flex items-end gap-3">
            <button className="p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all shrink-0">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                rows={1}
                className="w-full bg-gray-900 border border-white/10 focus:border-pink-500/50 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    setMessage("");
                  }
                }}
              />
            </div>
            <button className="p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all shrink-0">
              <DollarSign className="w-5 h-5" />
            </button>
            <button
              disabled={!message.trim()}
              className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-xl transition-all shadow-lg shadow-pink-500/20 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={() => setMessage("")}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
