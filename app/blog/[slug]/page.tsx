import type { Metadata } from "next"
import BlogPost from "../../../pages/blog-post"

// Sample blog posts data
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

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Article non trouvé | Blackswantechnology",
      description: "Cet article n'existe pas ou a été déplacé.",
    }
  }

  return {
    title: `${post.title} | Blackswantechnology`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return <div>Article non trouvé</div>
  }

  return <BlogPost post={post} />
}
