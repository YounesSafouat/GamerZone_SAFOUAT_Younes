"use client"

import { useEffect, useState, useRef } from "react"

export default function MotherboardEffect() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Circuit nodes
    const nodes: { x: number; y: number; size: number; pulse: number; pulseSpeed: number }[] = []

    // Create a grid of nodes
    const gridSize = 120
    for (let x = 0; x < Math.ceil(window.innerWidth / gridSize); x++) {
      for (let y = 0; y < Math.ceil(window.innerHeight / gridSize); y++) {
        // Add some randomness to position
        const offsetX = Math.random() * 40 - 20
        const offsetY = Math.random() * 40 - 20

        // Only add some nodes (not all grid positions)
        if (Math.random() > 0.7) {
          nodes.push({
            x: x * gridSize + offsetX,
            y: y * gridSize + offsetY,
            size: Math.random() * 2 + 1,
            pulse: 0,
            pulseSpeed: Math.random() * 0.02 + 0.01,
          })
        }
      }
    }

    // Circuit lines
    const lines: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = []

    // Connect some nodes with lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Only connect nodes that are close enough
        if (distance < gridSize * 1.5 && Math.random() > 0.7) {
          lines.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            opacity: Math.random() * 0.1 + 0.05,
          })
        }
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw lines
      for (const line of lines) {
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.strokeStyle = `rgba(113, 75, 103, ${line.opacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw and update nodes
      for (const node of nodes) {
        // Update pulse
        node.pulse += node.pulseSpeed
        if (node.pulse > 1) node.pulse = 0

        // Calculate distance from mouse
        const dx = mousePosition.x - node.x
        const dy = mousePosition.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Nodes react to mouse proximity
        let nodeSize = node.size
        let nodeOpacity = 0.2

        if (distance < 150) {
          // Scale based on distance (closer = bigger)
          const scale = 1 - distance / 150
          nodeSize = node.size + scale * 3
          nodeOpacity = 0.2 + scale * 0.6
        }

        // Draw node with pulse effect
        const pulseSize = nodeSize * (1 + Math.sin(node.pulse * Math.PI * 2) * 0.3)

        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(113, 75, 103, ${nodeOpacity})`
        ctx.fill()
      }

      // Draw mouse interaction effect
      ctx.beginPath()
      ctx.arc(mousePosition.x, mousePosition.y, 100, 0, Math.PI * 2)
      const gradient = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        100,
      )
      gradient.addColorStop(0, "rgba(113, 75, 103, 0.15)")
      gradient.addColorStop(1, "rgba(113, 75, 103, 0)")
      ctx.fillStyle = gradient
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [mounted, mousePosition])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />
}
