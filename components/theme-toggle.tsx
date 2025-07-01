"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const isDark = (theme === "dark") || (theme === "system" && resolvedTheme === "dark")

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative overflow-hidden transition-all duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Sun className={`h-5 w-5 transition-all duration-500 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
