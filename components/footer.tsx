"use client"

import Link from "next/link"
import Image from "next/image"
import { companyInfo } from "@/lib/data"
import Script from "next/script"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which logo to use based on theme
  const logoSrc = mounted
    ? theme === "dark" || resolvedTheme === "dark"
      ? "/images/logo-light.png" // Use light logo on dark background
      : "/images/logo-dark.png" // Use dark logo on light background
    : "/images/logo-light.png" // Default fallback
  return (
    <>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="Elina Logo"
                width={180}
                height={50}
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-300 dark:text-gray-400 mb-6">
                Leading manufacturer of premium kitchen equipment for commercial and residential spaces since 2018.
              </p>
              <div className="flex space-x-4">
                <Link
                  href={companyInfo.social.facebook}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link
                  href={companyInfo.social.twitter}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link
                  href={companyInfo.social.instagram}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href={companyInfo.social.linkedin}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Info - Address */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Location</h3>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-gray-300 dark:text-gray-400">
                  <div>{companyInfo.address.line1}</div>
                  <div>{companyInfo.address.line2}</div>
                  <div>
                    {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                  </div>
                  <div>{companyInfo.address.country}</div>
                </div>
              </div>
            </div>

            {/* Contact Info - Phone */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Call Us</h3>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-gray-300 dark:text-gray-400">
                  <div className="mb-2">
                    <span className="font-medium">Main:</span>
                    <br />
                    {companyInfo.phone.main}
                  </div>
                  <div>
                    <span className="font-medium">Sales:</span>
                    <br />
                    {companyInfo.phone.sales}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - Email */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Email Us</h3>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="text-gray-300 dark:text-gray-400">
                  <div className="mb-2">
                    <span className="font-medium">General:</span>
                    <br />
                    <a href={`mailto:${companyInfo.email.info}`} className="hover:text-white transition-colors">
                      {companyInfo.email.info}
                    </a>
                  </div>
                  <div>
                    <span className="font-medium">Sales:</span>
                    <br />
                    <a href={`mailto:${companyInfo.email.sales}`} className="hover:text-white transition-colors">
                      {companyInfo.email.sales}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved || Designed By:{" "}
                <a
                  href="https://github.com/axelgear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-300 dark:hover:text-gray-400"
                >
                  Rejith
                </a>
                .
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6 text-sm text-gray-400 dark:text-gray-500">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Zoho SalesIQ Chat Widget */}
      <Script id="zoho-salesiq-init" strategy="afterInteractive">
        {`
          window.$zoho = window.$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {ready: function(){}};
        `}
      </Script>
      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.com/widget?wc=siqf2e9c34f02e907e9c53c8fe28ef2289f01c95591dea6d921f7a086698b620b7c"
        strategy="afterInteractive"
        defer
      />
    </>
  )
}
