import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TIME™ - Elite Intelligence. Zero Limits.",
  description: "Deployable SaaS platform with auth, search dashboard, alerts, and API access.",
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}