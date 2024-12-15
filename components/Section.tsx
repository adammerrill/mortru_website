import { motion } from 'framer-motion'

interface SectionProps {
  title: string
  children: React.ReactNode
}

/**
 * Section component for creating animated page sections
 * @param {SectionProps} props - The props for the Section component
 * @returns {JSX.Element} The rendered Section component
 */
export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <motion.section
      className="min-h-screen py-12 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {children}
      </div>
    </motion.section>
  )
}

