"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The New Arcade.
            <br />
            <span className="text-primary">AI-Generated</span>, Instantly Playable.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-muted-foreground">
            Discover and play games created by AI. Upload your own HTML games and share them with the world.
          </p>

          {/* Search Bar */}
          <div className="relative mx-auto mt-10 max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search games..."
              className="h-12 rounded-full border-border bg-card pl-12 pr-4 text-base shadow-sm transition-shadow focus:shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
