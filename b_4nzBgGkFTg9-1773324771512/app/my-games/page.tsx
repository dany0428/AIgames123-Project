import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus, Gamepad2 } from "lucide-react"

export const metadata = {
  title: "My Games | AIGames123.com",
  description: "Manage your uploaded AI-generated games on AIGames123.com.",
}

export default function MyGamesPage() {
  // This would typically come from auth/database
  const isLoggedIn = false
  const games: unknown[] = []

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                My Games
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Manage and track your uploaded games.
              </p>
            </div>
            <Button asChild>
              <Link href="/upload">
                <Plus className="mr-2 h-4 w-4" />
                Upload New Game
              </Link>
            </Button>
          </div>

          {/* Content */}
          {!isLoggedIn ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Gamepad2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-card-foreground">
                Sign in to view your games
              </h2>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Create an account or sign in to upload games and track your creations.
              </p>
              <div className="mt-6 flex gap-4">
                <Button asChild variant="outline">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">Create Account</Link>
                </Button>
              </div>
            </div>
          ) : games.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Gamepad2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-card-foreground">
                No games uploaded yet
              </h2>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Upload your first AI-generated game and share it with the world.
              </p>
              <Button asChild className="mt-6">
                <Link href="/upload">
                  <Plus className="mr-2 h-4 w-4" />
                  Upload Your First Game
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Game cards would go here */}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
