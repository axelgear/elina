import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"

export default function SparePartsPage() {
  
  return (
    <main className="min-h-screen py-20 page-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">Genuine Spare Parts</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Keep your kitchen equipment running at peak performance with our comprehensive range of genuine replacement
            parts and components
          </p>
        </div>

       

        {/* Services Section */}
        <div className="glass-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Order Section */}
        <div className="section-background rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">How to Order Parts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Identify Your Part</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use your equipment model number or part number to find the correct replacement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Place Your Order</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Contact us with your part requirements and we'll provide a quote
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive your genuine parts with express shipping and installation support
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Service */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Emergency Parts Service</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              📅 Regular Hours: Monday – Saturday, 9:30 AM – 6:30 PM
            </p>
            <Button size="lg" className="btn-modern-primary">
              <Link href="/contact">Emergency Support</Link>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Need Help Finding Parts?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Our technical experts can help you identify and source the right replacement parts for your equipment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="btn-modern-primary">
                <Link href="/contact">Contact Parts Department</Link>
              </Button>
              <Button size="lg" className="btn-modern-outline">
                <Link href="/products-list">Browse Parts Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
