"use client"

import { useState } from "react"

interface WatermarkedImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
}

export function WatermarkedImage({
  src,
  alt,
  fill,
  className,
}: WatermarkedImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted">
        <span className="text-sm text-muted-foreground">Imagen no disponible</span>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <img
        src={src}
        alt={alt}
        className={fill ? `absolute inset-0 h-full w-full object-cover ${className || ""}` : className}
        onError={() => setHasError(true)}
        loading="lazy"
      />
      {/* Watermark overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3">
        <span className="rounded bg-foreground/60 px-2 py-1 text-xs font-semibold tracking-wide text-background backdrop-blur-sm">
          Doctor Weider
        </span>
      </div>
    </div>
  )
}
