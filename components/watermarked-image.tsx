"use client"

import Image from "next/image"
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
  width,
  height,
  className,
  sizes,
  priority,
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
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          sizes={sizes}
          priority={priority}
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          priority={priority}
          onError={() => setHasError(true)}
        />
      )}
      {/* Watermark overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3">
        <span className="rounded bg-foreground/60 px-2 py-1 text-xs font-semibold tracking-wide text-background backdrop-blur-sm">
          Doctor Weider
        </span>
      </div>
    </div>
  )
}
