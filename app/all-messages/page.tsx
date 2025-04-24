"use client"

import { useState } from "react"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AllMessagesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter messages based on search term
  const filteredMessages = loveMessages.filter((message) => message.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100">
      <header className="p-4 flex items-center">
        <Link href="/">
          <Button variant="ghost" className="text-pink-700 hover:text-pink-900 hover:bg-pink-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Today's Message
          </Button>
        </Link>
        <h1 className="text-xl font-semibold text-pink-700 ml-4">All Love Messages</h1>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-200">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-6 w-6 text-pink-500 mr-2" fill="#ec4899" />
            <h2 className="text-xl text-pink-700">Collection of Love Notes</h2>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="p-4 border border-pink-100 rounded-lg bg-white hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700">"{message}"</p>
              </motion.div>
            ))}
          </div>

          {filteredMessages.length === 0 && (
            <div className="text-center py-8 text-gray-500">No messages found matching your search.</div>
          )}
        </div>
      </main>

      <footer className="p-6 text-center text-pink-700">
        <p>Made with love for the most amazing person in my world</p>
      </footer>
    </div>
  )
}

// Collection of love messages
const loveMessages = [
  "Your smile brightens even my darkest days",
  "The way you laugh makes my heart skip a beat every time",
  "Your kindness to others shows the beauty of your soul",
  "You inspire me to be a better person every day",
  "The way you see the world brings color into my life",
  "Your strength during difficult times amazes me",
  "The little things you do show how thoughtful you truly are",
  "Your passion for the things you love is contagious",
  "The way you care for others shows your beautiful heart",
  "Your intelligence and curiosity constantly impress me",
  "The comfort I feel just being near you is indescribable",
  "Your creativity and imagination bring joy to everything",
  "The way you listen makes me feel truly understood",
  "Your determination to achieve your goals inspires me",
  "The way your eyes light up when you're excited melts my heart",
  "Your patience with me shows your incredible character",
  "The way you remember little details about me makes me feel special",
  "Your honesty and integrity are qualities I deeply admire",
  "The peace I feel when I'm with you is like nothing else",
  "Your unique perspective helps me see things differently",
  "The way you dance like nobody's watching brings me joy",
  "Your voice is my favorite sound in the world",
  "The way you support my dreams means everything to me",
  "Your ability to find joy in simple things reminds me what's important",
  "The way you make even ordinary days feel special",
  "Your compassion for others shows your beautiful soul",
  "The way you know exactly what to say when I need to hear it",
  "Your courage to be yourself inspires me every day",
  "The way you make me feel safe and loved is incredible",
  "Your thoughtfulness in small gestures touches my heart",
  "The way you've helped me grow as a person",
  "Your ability to make me laugh when I want to cry",
  "The way you believe in me even when I don't believe in myself",
  "Your presence in my life is the greatest gift I've ever received",
  "The way you understand me without words",
  "Your gentle spirit calms the chaos in my mind",
  "The way you've shown me what true love really means",
  "Your forgiveness when I make mistakes shows your generous heart",
  "The way you make every day an adventure",
  "Your embrace is my favorite place in the world",
  "The way you've changed my life for the better",
  "Your inner beauty shines brighter than anything I've ever seen",
  "The way you make me want to be the best version of myself",
  "Your love gives me strength I never knew I had",
  "The way you see the best in me, even when I can't",
  "Your wisdom helps me navigate life's challenges",
  "The way you've become my favorite part of every day",
  "Your trust in me is something I cherish deeply",
  "The way you've become my home, no matter where we are",
  "Your love is the greatest blessing in my life",
  "The way you make my heart feel full just by existing",
  "Your presence makes any place feel like home",
  "The way you've shown me what unconditional love feels like",
  "Your smile is the highlight of my every day",
  "The way you make time stop when we're together",
  "Your love has taught me what truly matters in life",
  "The way you accept me completely, flaws and all",
  "Your heart is the most beautiful thing I've ever known",
  "The way you've become my favorite hello and my hardest goodbye",
  "Your love story with me is my favorite story ever told",
  "The way you make every moment together memorable",
  "Your love makes me feel like the luckiest person alive",
  "The way you've become my past, present, and future",
  "Your love is the greatest adventure of my life",
  "The way you make my heart dance with just a glance",
]
