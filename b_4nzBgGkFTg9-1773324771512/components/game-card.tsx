"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export interface Game {
  id: string
  title: string
  creator: string
  thumbnail: string
  category: string
  slug: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/40">
          <div className="flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-100">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-card-foreground transition-colors group-hover:text-primary">
          {game.title}
        </h3>
        <p className="text-sm text-muted-foreground">by @{game.creator}</p>
        <div className="mt-auto pt-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {game.category}
          </Badge>
        </div>
      </div>
    </Link>
  )
}
