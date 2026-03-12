"use client"

import { useState } from "react"
import { GameCard, type Game } from "@/components/game-card"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Puzzle",
  "Action",
  "Simulation",
  "HTML5",
  "Relaxing",
]

// Sample games data
const sampleGames: Game[] = [
  {
    id: "1",
    title: "Pixel Space Adventure",
    creator: "DanielLabs",
    thumbnail: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=640&h=360&fit=crop",
    category: "Action",
    slug: "pixel-space-adventure",
  },
  {
    id: "2",
    title: "Logic Puzzle Master",
    creator: "AIGameDev",
    thumbnail: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=640&h=360&fit=crop",
    category: "Puzzle",
    slug: "logic-puzzle-master",
  },
  {
    id: "3",
    title: "City Builder 2024",
    creator: "SimulationKing",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=640&h=360&fit=crop",
    category: "Simulation",
    slug: "city-builder-2024",
  },
  {
    id: "4",
    title: "Zen Garden",
    creator: "PeacefulGames",
    thumbnail: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=640&h=360&fit=crop",
    category: "Relaxing",
    slug: "zen-garden",
  },
  {
    id: "5",
    title: "Retro Runner",
    creator: "PixelMaster",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=640&h=360&fit=crop",
    category: "Action",
    slug: "retro-runner",
  },
  {
    id: "6",
    title: "Word Quest",
    creator: "BrainGames",
    thumbnail: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=640&h=360&fit=crop",
    category: "Puzzle",
    slug: "word-quest",
  },
  {
    id: "7",
    title: "Farm Life Sim",
    creator: "CozyDev",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=640&h=360&fit=crop",
    category: "Simulation",
    slug: "farm-life-sim",
  },
  {
    id: "8",
    title: "Memory Match Pro",
    creator: "CasualGamer",
    thumbnail: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=640&h=360&fit=crop",
    category: "Puzzle",
    slug: "memory-match-pro",
  },
]

export function GameGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredGames =
    activeCategory === "All"
      ? sampleGames
      : sampleGames.filter((game) => game.category === activeCategory)

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Featured AI Games
          </h2>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Game Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-lg text-muted-foreground">
              No games found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
