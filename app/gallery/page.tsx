"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GalleryLightbox from "@/components/gallery-lightbox"
import { galleryItems } from "@/lib/data"

type GalleryItemProps = {
  item: {
    id: string | number
    image: string
    title: string
    description: string
    category: string
  }
  onClick: () => void
}

export default function GalleryPage() {
  // Helper: return only the first item for each distinct project title
  const getUniqueByTitle = (items: typeof galleryItems) => {
    const seen = new Set<string>()
    return items.filter((item) => {
      if (seen.has(item.title)) return false
      seen.add(item.title)
      return true
    })
  }
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<{ id: number; src: string; alt: string }[]>([])

  // Updated gallery items with placeholder images
  

  const openLightbox = (projectTitle: string, clickedId: number) => {
    // Collect images that belong to the same project (identified by the title)
    const projectImages = galleryItems
      .filter((item) => item.title === projectTitle)
      .map((item) => ({ id: item.id, src: item.image, alt: item.title }))

    // Determine which image within the project set was clicked
    const clickedIndex = projectImages.findIndex((img) => img.id === clickedId)

    setLightboxImages(projectImages)
    setCurrentImageIndex(clickedIndex >= 0 ? clickedIndex : 0)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }



  return (
    <main className="min-h-screen py-20 page-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Our Gallery</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of premium kitchen equipment and installations
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="commercial" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="renovation" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Renovation
              </TabsTrigger>
              <TabsTrigger value="equipment" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Equipment
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getUniqueByTitle(galleryItems).map((item) => (
                <GalleryItem key={item.id} item={item} onClick={() => openLightbox(item.title, item.id)} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getUniqueByTitle(galleryItems.filter((item) => item.category === "commercial")).map((item) => (
                  <GalleryItem key={item.id} item={item} onClick={() => openLightbox(item.title, item.id)} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="renovation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getUniqueByTitle(galleryItems.filter((item) => item.category === "renovation")).map((item) => (
                  <GalleryItem key={item.id} item={item} onClick={() => openLightbox(item.title, item.id)} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="equipment" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getUniqueByTitle(galleryItems.filter((item) => item.category === "equipment")).map((item) => (
                  <GalleryItem key={item.id} item={item} onClick={() => openLightbox(item.title, item.id)} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <GalleryLightbox
          images={lightboxImages}
          initialIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
        />
      </div>
    </main>
  )
}

// Gallery Item Component
function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer modern-card"
      onClick={onClick}
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-white/90 text-sm">{item.description}</p>
        <div className="mt-3">
          <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
        </div>
      </div>
    </div>
  )
}
