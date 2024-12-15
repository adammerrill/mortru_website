import { CMSPreview } from './components/CMSPreview'

const initialData = {
  title: "Empower Your Home Search with AI",
  description: "MorTru revolutionizes home buying by empowering homebuyers with AI-driven search tools, enabling mortgage lenders to provide personalized financing options, and helping real estate agents match qualified buyers with their perfect homes through our intelligent mortgage matching platform."
}

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <CMSPreview initialData={initialData} />
    </div>
  )
}

