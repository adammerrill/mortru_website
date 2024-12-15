'use client'

import { useState } from 'react'
import { MapPin, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { calculatePricePerSqFt, formatPrice, filterProperties } from '../utils/propertyUtils'

/**
 * Array of sample properties for demonstration purposes.
 */
const properties = [
  { id: 1, address: "123 Main St", price: 350000, bedrooms: 3, bathrooms: 2, sqft: 1800 },
  { id: 2, address: "456 Elm St", price: 425000, bedrooms: 4, bathrooms: 3, sqft: 2200 },
  { id: 3, address: "789 Oak St", price: 550000, bedrooms: 5, bathrooms: 4, sqft: 2800 },
  { id: 4, address: "101 Pine St", price: 300000, bedrooms: 2, bathrooms: 2, sqft: 1500 },
  { id: 5, address: "202 Cedar St", price: 475000, bedrooms: 4, bathrooms: 3, sqft: 2400 },
]

/**
 * SearchDemo component showcasing the property search functionality.
 * Allows users to toggle between map and list views of properties.
 *
 * @returns {JSX.Element} The rendered SearchDemo component
 */
export default function SearchDemo() {
  // State to manage the current view (map or list)
  const [view, setView] = useState<'map' | 'list'>('map')

  // Filter properties (for demonstration, we're not actually filtering here)
  const filteredProperties = filterProperties(properties, { minPrice: 300000 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted" aria-labelledby="search-demo-title">
      <h2 id="search-demo-title" className="text-3xl font-bold text-center text-foreground mb-12">Experience MorTru in Action</h2>
      <div className="max-w-6xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        {/* Search input and view toggle */}
        <div className="p-4 border-b flex justify-between items-center">
          <input
            type="text"
            placeholder="Enter location, ZIP code, or address"
            className="w-full max-w-md px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            aria-label="Search for properties"
          />
          <div className="flex space-x-2">
            <Button
              onClick={() => setView('map')}
              aria-pressed={view === 'map'}
              aria-label="Switch to map view"
              variant={view === 'map' ? 'default' : 'outline'}
              size="sm"
            >
              <MapPin className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => setView('list')}
              aria-pressed={view === 'list'}
              aria-label="Switch to list view"
              variant={view === 'list' ? 'default' : 'outline'}
              size="sm"
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* Property view (map or list) */}
        <div className="h-[600px] relative">
          {view === 'map' ? (
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="Map view of properties"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="p-4 space-y-4 h-full overflow-y-auto">
              {filteredProperties.map((property) => (
                <div key={property.id} className="border rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow duration-200 bg-background">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{property.address}</h3>
                    <p className="text-primary font-bold">{formatPrice(property.price)}</p>
                    <p className="text-sm text-muted-foreground">{property.bedrooms} beds • {property.bathrooms} baths • {property.sqft} sqft</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(calculatePricePerSqFt(property))}/sqft</p>
                  </div>
                  <Image
                    src={`/placeholder.svg?height=80&width=120`}
                    alt={`Property at ${property.address}`}
                    width={120}
                    height={80}
                    className="rounded-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

