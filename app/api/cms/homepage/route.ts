import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const homepageContent = await prisma.cmsContent.findUnique({
      where: { page: 'homepage' },
    })

    if (!homepageContent) {
      return NextResponse.json({
        title: "Empower Your Home Search with AI",
        description: "MorTru revolutionizes home buying by empowering homebuyers with AI-driven search tools, enabling mortgage lenders to provide personalized financing options, and helping real estate agents match qualified buyers with their perfect homes through our intelligent mortgage matching platform."
      })
    }

    return NextResponse.json(homepageContent)
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return NextResponse.json(
      { 
        error: 'Error fetching homepage content',
        title: "Empower Your Home Search with AI",
        description: "MorTru revolutionizes home buying with AI-driven tools and intelligent mortgage matching."
      }, 
      { status: 500 }
    )
  }
}

