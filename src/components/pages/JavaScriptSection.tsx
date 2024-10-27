'use client'

import { useState, useEffect } from 'react'

export default function JavaScriptSection() {
  const [count, setCount] = useState<number>(0)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
    const savedCount = localStorage.getItem('counterValue')
    if (savedCount !== null) {
      setCount(parseInt(savedCount, 10))
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('counterValue', count.toString())
    }
  }, [count, isClient])

  return (
    <section className="relative bg-gray-100 p-8 min-h-screen flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-center mb-8">JavaScript Study Examples</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Contador Simples</h2>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">
            Contador Atual: <span className="font-bold">{count}</span>
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setCount(prev => prev - 1)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              -1
            </button>
            <button
              onClick={() => setCount(prev => prev + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              +1
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
