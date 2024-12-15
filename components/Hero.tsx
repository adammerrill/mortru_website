import { Button } from "@/components/ui/button"
import { useReducedMotion } from "framer-motion"

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
}

/**
 * Hero component for the landing page.
 * Displays the main headline, a brief description, and a call-to-action button.
 *
 * @param {HeroProps} props - The props for the Hero component
 * @returns {JSX.Element} The rendered Hero component
 */
export default function Hero({ title, description, ctaText }: HeroProps) {
  const prefersReducedMotion = useReducedMotion()

  const animationClass = prefersReducedMotion ? "" : "animate-fade-in-up"

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-background" aria-labelledby="hero-title">
      <h1 id="hero-title" className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 ${animationClass}`}>
        {title}
      </h1>
      <p className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto ${animationClass} ${prefersReducedMotion ? "" : "animation-delay-200"}`}>
        {description}
      </p>
      <Button className={`text-lg px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground ${animationClass} ${prefersReducedMotion ? "" : "animation-delay-400"}`} aria-label={ctaText}>
        {ctaText}
      </Button>
    </section>
  )
}

