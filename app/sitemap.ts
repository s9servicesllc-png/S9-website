import { serviceAreas } from "@/lib/serviceAreas"

export default function sitemap() {
  const baseUrl = "https://yourdomain.com"

  const staticPages = [
    "",
    "/roofing",
    "/siding",
    "/windows",
    "/doors",
    "/insurance-claims",
    "/gallery",
    "/reviews",
    "/contact",
  ]

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }))

  const serviceAreaUrls = serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
  }))

  return [...staticUrls, ...serviceAreaUrls]
}
