"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, Image as ImageIcon, FileCode, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const categories = [
  { value: "puzzle", label: "Puzzle" },
  { value: "action", label: "Action" },
  { value: "simulation", label: "Simulation" },
  { value: "html5", label: "HTML5" },
  { value: "relaxing", label: "Relaxing" },
  { value: "strategy", label: "Strategy" },
  { value: "arcade", label: "Arcade" },
]

export function UploadForm() {
  const [gameFile, setGameFile] = useState<File | null>(null)
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const onGameDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setGameFile(acceptedFiles[0])
    }
  }, [])

  const onThumbnailDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setThumbnailFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setThumbnailPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const gameDropzone = useDropzone({
    onDrop: onGameDrop,
    accept: {
      "text/html": [".html"],
      "application/zip": [".zip"],
    },
    maxFiles: 1,
  })

  const thumbnailDropzone = useDropzone({
    onDrop: onThumbnailDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    maxFiles: 1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", { title, description, category, gameFile, thumbnailFile })
    alert("Game submitted successfully! (This is a demo)")
  }

  const removeGameFile = () => setGameFile(null)
  const removeThumbnail = () => {
    setThumbnailFile(null)
    setThumbnailPreview(null)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step 1: Game Details */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-card-foreground">
          Step 1: Game Details
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-base">
              Game Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Enter your game title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-base">
              Description <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your game, how to play, and what makes it special..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-32 resize-none text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-base">
              Category <span className="text-destructive">*</span>
            </Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Step 2: Upload Files */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-card-foreground">
          Step 2: Upload Files
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Game File Upload */}
          <div className="space-y-2">
            <Label className="text-base">
              HTML/Game File <span className="text-destructive">*</span>
            </Label>
            {gameFile ? (
              <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 truncate">
                  <p className="truncate font-medium text-card-foreground">
                    {gameFile.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {(gameFile.size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={removeGameFile}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div
                {...gameDropzone.getRootProps()}
                className={cn(
                  "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 p-8 text-center transition-colors hover:border-primary hover:bg-secondary/50",
                  gameDropzone.isDragActive && "border-primary bg-primary/5"
                )}
              >
                <input {...gameDropzone.getInputProps()} />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 font-medium text-card-foreground">
                  Drop your game file here
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  or click to browse (.html, .zip)
                </p>
              </div>
            )}
          </div>

          {/* Thumbnail Upload */}
          <div className="space-y-2">
            <Label className="text-base">
              Game Thumbnail <span className="text-destructive">*</span>
            </Label>
            {thumbnailPreview ? (
              <div className="relative overflow-hidden rounded-lg border border-border">
                <div className="aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="h-full w-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={removeThumbnail}
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm transition-colors hover:bg-destructive hover:text-destructive-foreground"
                  aria-label="Remove thumbnail"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div
                {...thumbnailDropzone.getRootProps()}
                className={cn(
                  "flex aspect-video cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 p-8 text-center transition-colors hover:border-primary hover:bg-secondary/50",
                  thumbnailDropzone.isDragActive && "border-primary bg-primary/5"
                )}
              >
                <input {...thumbnailDropzone.getInputProps()} />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 font-medium text-card-foreground">
                  Upload Thumbnail (16:9 Image)
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  PNG, JPG, or WebP
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Step 3: Submit */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-card-foreground">
          Step 3: Preview & Submit
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
          <Button type="button" variant="ghost" className="order-2 sm:order-1">
            Cancel
          </Button>
          <Button
            type="submit"
            className="order-1 sm:order-2"
            disabled={!title || !description || !category || !gameFile || !thumbnailFile}
          >
            Upload & Preview
          </Button>
        </div>
      </div>
    </form>
  )
}
