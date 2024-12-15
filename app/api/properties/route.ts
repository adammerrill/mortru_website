import { NextResponse } from 'next/server'
import cors from 'cors'

const corsMiddleware = cors({
  origin: ['https://yourdomain.com', 'http://localhost:3000'], // Replace with your actual origins
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200
})

export async function GET(request: Request) {
  try {
    await new Promise((resolve, reject) => {
      corsMiddleware(request as any, NextResponse as any, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = parseInt(searchParams.get('limit') || '10', 10)

    // Mock data for demonstration purposes
    const allProperties = [
      { id: 1, address: "123 Main St", price: 350000, bedrooms: 3, bathrooms: 2 },
      { id: 2, address: "456 Elm St", price: 425000, bedrooms: 4, bathrooms: 3 },
      { id: 3, address: "789 Oak St", price: 550000, bedrooms: 5, bathrooms: 4 },
      { id: 4, address: "101 Pine St", price: 600000, bedrooms: 6, bathrooms: 4 },
      { id: 5, address: "222 Maple St", price: 700000, bedrooms: 4, bathrooms: 3 },
      { id: 6, address: "333 Birch St", price: 475000, bedrooms: 3, bathrooms: 2 },
      { id: 7, address: "444 Cherry St", price: 525000, bedrooms: 4, bathrooms: 3 },
      { id: 8, address: "555 Walnut St", price: 650000, bedrooms: 5, bathrooms: 4 },
      { id: 9, address: "666 Willow St", price: 380000, bedrooms: 3, bathrooms: 2 },
      { id: 10, address: "777 Poplar St", price: 450000, bedrooms: 4, bathrooms: 3 },

    ]

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const paginatedProperties = allProperties.slice(startIndex, endIndex)

    return NextResponse.json({
      properties: paginatedProperties,
      currentPage: page,
      totalPages: Math.ceil(allProperties.length / limit)
    })
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

