import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UploadForm } from "@/components/upload-form"

export const metadata = {
  title: "Upload Game | AIGames123.com",
  description: "Upload your AI-generated game to AIGames123.com and share it with the world.",
}

export default function UploadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Upload Your AI-Generated Game
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
              Share your creation with the world. Fill out the details below and upload your game files.
            </p>
          </div>

          {/* Upload Form */}
          <UploadForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
