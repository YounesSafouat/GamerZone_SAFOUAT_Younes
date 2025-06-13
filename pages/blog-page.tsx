"use client"

import { Button } from "@/components/ui/button"
import { Search, Calendar, Clock, ChevronRight, ArrowRight, Filter, User, BookOpen, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import Header from "../components/header"

// Sample blog data - static, no DB required
const blogCategories = [
  { name: "Tous", count: 24 },
  { name: "Odoo ERP", count: 10, color: "#714b67" },
  { name: "HubSpot CRM", count: 8, color: "#ff5c35" },
  { name: "Transformation Digitale", count: 6 },
  { name: "Études de Cas", count: 5 },
  { name: "Tutoriels", count: 3 },
]

const blogPosts = [
  {
    slug: "odoo-15-to-18-migration",
    title: "Comment migrer d'Odoo 15 vers Odoo 18 sans perdre vos données",
    excerpt:
      "Découvrez notre méthodologie éprouvée pour migrer votre ERP Odoo vers la dernière version tout en préservant l'intégrité de vos données.",
    category: "Odoo ERP",
    image: "/placeholder.svg?height=600&width=800",
    author: "Younes SAFOUAT",
    authorRole: "Expert Odoo",
    date: "12 juin 2025",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "hubspot-automation-tips",
    title: "5 automatisations HubSpot qui vont révolutionner votre marketing",
    excerpt:
      "Explorez les workflows d'automatisation les plus puissants de HubSpot pour optimiser vos campagnes marketing et augmenter vos conversions.",
    category: "HubSpot CRM",
    image: "/placeholder.svg?height=600&width=800",
    author: "Younes SAFOUAT",
    authorRole: "Spécialiste Marketing",
    date: "5 juin 2025",
    readTime: "6 min",
  },
  {
    slug: "odoo-hubspot-integration",
    title: "Intégration Odoo-HubSpot : le guide complet",
    excerpt:
      "Comment connecter votre ERP Odoo avec votre CRM HubSpot pour créer un écosystème digital parfaitement synchronisé.",
    category: "Transformation Digitale",
    image: "/placeholder.svg?height=600&width=800",
    author: "Younes SAFOUAT",
    authorRole: "Architecte Solutions",
    date: "28 mai 2025",
    readTime: "12 min",
  },
  {
    slug: "worqbox-case-study",
    title: "Comment Worqbox a optimisé sa logistique avec Odoo 18",
    excerpt:
      "Étude de cas détaillée sur la transformation digitale de Worqbox et les résultats obtenus après la migration vers Odoo 18.",
    category: "Études de Cas",
    image: "/placeholder.svg?height=600&width=800",
    author: "Younes SAFOUAT",
    authorRole: "Chef de Projet",
    date: "20 mai 2025",
    readTime: "10 min",
  },
  {
    slug: "hubspot-dashboard-kpis",
    title: "Les KPIs essentiels à suivre dans votre dashboard HubSpot",
    excerpt:
      "Guide pratique pour configurer un tableau de bord HubSpot efficace avec les indicateurs clés de performance qui comptent vraiment.",
    category: "HubSpot CRM",
    image: "/placeholder.svg?height=600&width=800",
    author: "Younes SAFOUAT",
    authorRole: "Analyste CRM",
    date: "15 mai 2025",
    readTime: "7 min",
  },
  {
    slug: "odoo-analytical-accounting",
    title: "Comment configurer la comptabilité analytique dans Odoo",
    excerpt:
      "Tutoriel pas à pas pour mettre en place une comptabilité analytique performante dans Odoo et optimiser votre reporting financier.",
    category: "Tutoriels",
    image: "/placeholder.svg?height=600&width=800",
    author: "Younes SAFOUAT",
    authorRole: "Consultante Odoo",
    date: "8 mai 2025",
    readTime: "9 min",
  },
]

export default function BlogPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    let filtered = blogPosts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "Tous") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory])

  // Function to get category color
  const getCategoryColor = (categoryName:any) => {
    const category = blogCategories.find((cat) => cat.name === categoryName)
    return category?.color || "#000000"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header scrollY={scrollY} isLoaded={isLoaded} />

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-48 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200 mb-8">
              <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">NOTRE BLOG</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
              Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#714b67] to-[#ff5c35]">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos derniers articles, guides pratiques et études de cas sur Odoo ERP, HubSpot CRM et la
              transformation digitale.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-gray-300 focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.find((post) => post.featured) && (
        <section className="pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">Article à la Une</h2>
              <a href="/blog" className="text-gray-600 hover:text-black transition-colors flex items-center text-sm">
                Voir tous les articles <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {filteredPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.slug}
                  className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-medium"
                      style={{ backgroundColor: getCategoryColor(post.category) }}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} de lecture</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-4 group-hover:text-[#714b67] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-black">{post.author}</div>
                          <div className="text-sm text-gray-500">{post.authorRole}</div>
                        </div>
                      </div>
                      <a href={`/blog/${post.slug}`}>
                        <Button className="bg-black text-white hover:bg-gray-900 group">
                          Lire l'article{" "}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 space-y-8">
              {/* Categories Filter */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-bold text-black">Catégories</h3>
                </div>
                <div className="space-y-2">
                  {blogCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                        selectedCategory === category.name
                          ? "bg-gray-50 border-2 border-gray-200"
                          : "hover:bg-gray-50 border-2 border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: category.color || "#000000" }}
                        ></div>
                        <span className="font-medium text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-bold text-black">Articles Populaires</h3>
                </div>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-[#714b67] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter - Static only, no functionality */}
              <div className="bg-gradient-to-br from-[#714b67] to-[#ff5c35] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-bold">Newsletter</h3>
                </div>
                <p className="text-white/90 mb-4 text-sm">
                  Recevez nos derniers articles et conseils directement dans votre boîte mail.
                </p>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/70 mb-3"
                />
                <Button className="w-full bg-white text-[#714b67] hover:bg-white/90">S'abonner</Button>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-black">
                  {filteredPosts.length} Article{filteredPosts.length > 1 ? "s" : ""}{" "}
                  {selectedCategory !== "Tous" ? `dans ${selectedCategory}` : ""}
                </h2>
                <div className="text-sm text-gray-500">
                  <span>Trier par: </span>
                  <select title="selector" className="ml-2 bg-transparent border-b border-gray-300 focus:outline-none">
                    <option>Plus récents</option>
                    <option>Plus populaires</option>
                    <option>Plus lus</option>
                  </select>
                </div>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Aucun article trouvé</h3>
                  <p className="text-gray-600">Essayez de modifier vos critères de recherche.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts
                    .filter((post) => !post.featured)
                    .map((post) => (
                      <div
                        key={post.slug}
                        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-medium"
                            style={{ backgroundColor: getCategoryColor(post.category) }}
                          >
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#714b67] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600" />
                              </div>
                              <div className="text-sm">
                                <span className="font-medium text-black">{post.author}</span>
                              </div>
                            </div>
                            <a
                              href={`/blog/${post.slug}`}
                              className="text-[#714b67] font-medium text-sm flex items-center group-hover:underline"
                            >
                              Lire <ArrowRight className="ml-1 w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Pagination - Static only, no functionality */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-200">
                    Précédent
                  </Button>
                  <Button variant="outline" size="sm" className="bg-black text-white border-black">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    3
                  </Button>
                  <span className="px-2">...</span>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    8
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    Suivant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Vous avez des questions sur nos solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#714b67] to-[#ff5c35]">
              Odoo ou HubSpot
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos experts sont disponibles pour vous accompagner dans votre transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg font-medium rounded-xl"
            >
              Contacter un Expert
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:bg-gray-50 px-8 py-6 text-lg font-medium rounded-xl"
            >
              Voir nos Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
