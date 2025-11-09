'use client'

import { useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

interface VideoPlayerProps {
  videoUrl?: string
  title: string
  poster?: string
}

export default function VideoPlayer({ videoUrl, title, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  // If no video URL provided, show placeholder
  if (!videoUrl) {
    return (
      <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">Video Coming Soon</p>
            <p className="text-sm text-gray-400">This lesson video will be available soon</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <video
          className="absolute inset-0 w-full h-full"
          src={videoUrl}
          poster={poster}
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(e) => {
            const video = e.currentTarget
            setProgress((video.currentTime / video.duration) * 100)
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const video = document.querySelector('video')
                if (video) {
                  isPlaying ? video.pause() : video.play()
                }
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <button
              onClick={() => {
                const video = document.querySelector('video')
                if (video) {
                  video.muted = !isMuted
                  setIsMuted(!isMuted)
                }
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <div className="text-sm">{title}</div>
          </div>
          <button className="hover:opacity-80 transition-opacity">
            <Maximize className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
          <div
            className="bg-primary-500 h-1 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

