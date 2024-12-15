import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Perfect Property?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join thousands of satisfied users who have found their ideal homes using MorTru.
      </p>
      <Button className="text-lg px-8 py-3 rounded-full bg-background text-foreground hover:bg-background/90">
        Get Started Now
      </Button>
    </section>
  )
}

