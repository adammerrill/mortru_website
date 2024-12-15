'use client'

import { useState, useEffect } from 'react'
import { Section } from './Section'
import { motion } from 'framer-motion'

interface CMSPreviewProps {
  initialData: {
    title: string;
    description: string;
  };
}

export function CMSPreview({ initialData }: CMSPreviewProps) {
  const [data, setData] = useState(initialData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/cms/homepage')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(latestData => {
        if (latestData.error) {
          throw new Error(latestData.error)
        }
        setData(latestData)
      })
      .catch(error => {
        console.error('Error fetching CMS data:', error)
        setError('Failed to load latest content. Displaying default content.')
      })
  }, [])

  return (
    <Section title={data.title}>
      {error && (
        <motion.p
          className="text-red-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
      <motion.p 
        className="text-xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {data.description}
      </motion.p>
    </Section>
  )
}

