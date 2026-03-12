import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gamepad2, Puzzle, Building2, Leaf, Zap, Globe, Sparkles, Target } from "lucide-react"

export const metadata = {
  title: "Categories | AIGames123.com",
  description: "Browse AI-generated games by category. Find puzzle, action, simulation, and relaxing games.",
}

const categories = [
  {
    name: "Puzzle",
    description: "Challenge your mind with logic and problem-solving games",
    icon: Puzzle,
    count: 124,
    slug: "puzzle",
  },
  {
    name: "Action",
    description: "Fast-paced games that test your reflexes",
    icon: Zap,
    count: 89,
    slug: "action",
  },
  {
    name: "Simulation",
    description: "Build, manage, and create your own worlds",
    icon: Building2,
    count: 67,
    slug: "simulation",
  },
  {
    name: "Relaxing",
    description: "Calm and peaceful games to unwind",
    icon: Leaf,
    count: 45,
    slug: "relaxing",
  },
  {
    name: "HTML5",
    description: "Browser-based games with modern web tech",
    icon: Globe,
    count: 156,
    slug: "html5",
  },
  {
    name: "Arcade",
    description: "Classic arcade-style gameplay",
    icon: Gamepad2,
    count: 78,
    slug: "arcade",
  },
  {
    name: "Strategy",
    description: "Plan and execute your way to victory",
    icon: Target,
    count: 52,
    slug: "strategy",
  },
  {
    name: "AI Showcase",
    description: "Games that highlight AI capabilities",
    icon: Sparkles,
    count: 34,
    slug: "ai-showcase",
  },
]

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Browse by Category
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Discover AI-generated games organized by genre and style.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                    {category.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">
                    {category.count} games
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
