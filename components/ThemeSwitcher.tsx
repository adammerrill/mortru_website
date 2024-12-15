'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Palette, Laptop, Eye, ChevronUp } from 'lucide-react'

/**
 * Available accent colors for the theme
 * Each color is defined by its name and HSL value
 */
const accentColors = [
  { name: 'default', value: '221.2 83.2% 53.3%' },
  { name: 'pink', value: '346.8 77.2% 49.8%' },
  { name: 'blue', value: '221.2 83.2% 53.3%' },
  { name: 'green', value: '142.1 76.2% 36.3%' },
  { name: 'purple', value: '262.1 83.3% 57.8%' },
  { name: 'slate', value: '215.4 16.3% 46.9%' }
]

/**
 * Main ThemeSwitcher component
 * Manages theme selection, accent color picking, and responsive layout
 */
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [accentColor, setAccentColor] = useState('221.2 83.2% 53.3%')
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // State management:
  // - mounted: Ensures component is only rendered client-side to prevent hydration issues
  // - accentColor: Stores the currently selected accent color
  // - isColorPickerOpen: Controls the visibility of the color picker dropdown
  // - isExpanded: Manages the expanded state of the mobile view

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', accentColor)
    document.documentElement.style.setProperty('--ring', accentColor)
  }, [accentColor])

  // Apply the selected accent color to the document root
  // This allows for dynamic color scheme changes without refreshing the page

  if (!mounted) return null

  /**
   * Handles theme change and closes the expanded mobile view
   * @param {string} newTheme - The new theme to be set (light, dark, or system)
   */
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    setIsExpanded(false)
  }

  /**
   * Toggles the color picker visibility and closes the expanded mobile view
   */
  const toggleColorPicker = () => {
    setIsColorPickerOpen(!isColorPickerOpen)
    setIsExpanded(false)
  }

  /**
   * Renders a theme icon button
   * @param {string} iconTheme - The theme associated with the icon (light, dark, system, or palette)
   * @returns {JSX.Element} - The rendered icon button
   */
  const renderThemeIcon = (iconTheme: string) => {
    const icons = {
      light: Sun,
      dark: Moon,
      system: Laptop,
      palette: Palette,
    }
    const Icon = icons[iconTheme as keyof typeof icons]
    return (
      <button
        onClick={() => iconTheme === 'palette' ? toggleColorPicker() : handleThemeChange(iconTheme)}
        className={`p-2 rounded-full transition-colors ${
          theme === iconTheme 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-primary/10 text-primary hover:bg-primary/20'
        }`}
        aria-label={`Set ${iconTheme} theme`}
      >
        <Icon size={16} />
      </button>
    )
  }

  // Main container with relative positioning for dropdown menus
  return (
    <div className="theme-machine relative">
      {/* Mobile View:
       * Displays a toggle button that expands into a dropdown menu on smaller screens */}
      <div className="sm:hidden">
        {/* Mobile toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mobile-toggle p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-expanded={isExpanded}
          aria-label="Toggle theme options"
        >
          {isExpanded ? <ChevronUp size={16} /> : <Eye size={16 } />}
        </button>
        {/* Mobile dropdown menu */}
        {isExpanded && (
          <div className="mobile-dropdown absolute left-2 mt-2 p-2 bg-background border border-input rounded-lg shadow-lg flex flex-col gap-2 min-w-[48px]">
            {renderThemeIcon('system')}
            {renderThemeIcon('light')}
            {renderThemeIcon('dark')}
            {renderThemeIcon('palette')}
          </div>
        )}
      </div>

      {/* Desktop View:
       * Displays all theme options and color palette button inline */}
      <div className="hidden sm:flex items-center space-x-2 bg-background border border-input rounded-full p-1">
        {renderThemeIcon('system')}
        {renderThemeIcon('light')}
        {renderThemeIcon('dark')}
        {renderThemeIcon('palette')}
      </div>

      {/* Color Picker Dropdown:
       * Appears when the palette button is clicked, allowing accent color selection */}
      {isColorPickerOpen && (
        <div className="color-picker absolute right-0 mt-2 p-2 bg-background border border-input rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-2">
            {accentColors.map((color) => (
              <button
                key={color.name}
                className="w-6 h-6 rounded-full border border-input transition-transform hover:scale-110"
                style={{ backgroundColor: `hsl(${color.value})` }}
                onClick={() => {
                  setAccentColor(color.value)
                  setIsColorPickerOpen(false)
                }}
                aria-label={`Set accent color to ${color.name}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// CSS classes explained:
// - theme-machine: Container for the entire component
// - mobile-toggle: Styling for the mobile toggle button
// - mobile-dropdown: Styling and animation for the mobile dropdown menu
// - sm:hidden: Hides element on screens wider than the 'sm' breakpoint
// - hidden sm:flex: Hides on mobile, displays as flex on screens wider than 'sm' breakpoint
// - color-picker: Styling and positioning for the color picker dropdown

