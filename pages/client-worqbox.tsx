"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Target,
  Award,
  Rocket,
  Quote,
  ExternalLink,
  Phone,
  RefreshCw,
  Shield,
  Gauge,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Header from "../components/header"

export default function ClientWorqbox() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null)
  const challengeRef = useRef<HTMLElement>(null)
  const solutionRef = useRef<HTMLElement>(null)
  const implementationRef = useRef<HTMLElement>(null)
  const resultsRef = useRef<HTMLElement>(null)
  const futureRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    setIsLoaded(true)

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll(".scroll-section")
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const projectStats = [
    { label: "Temps de migration", value: "3 mois", icon: Clock },
    { label: "Version cible", value: "Odoo 18", icon: RefreshCw },
    { label: "Utilisateurs migrés", value: "45", icon: Users },
    { label: "ROI atteint", value: "+180%", icon: TrendingUp },
  ]

  const challenges = [
    {
      title: "Odoo 15 obsolète",
      description: "Version ancienne avec limitations fonctionnelles et sécuritaires",
      impact: "Manque de nouvelles fonctionnalités et risques",
    },
    {
      title: "Performance dégradée",
      description: "Lenteurs système et bugs fréquents",
      impact: "Perte de productivité quotidienne",
    },
    {
      title: "Maintenance complexe",
      description: "Support limité et mises à jour impossibles",
      impact: "Coûts de maintenance élevés",
    },
  ]

  const solutions = [
    {
      module: "Migration Odoo 18",
      description: "Mise à niveau complète avec nouvelles fonctionnalités",
      benefit: "Performance améliorée de 85%",
    },
    {
      module: "Interface modernisée",
      description: "Nouvelle UX/UI intuitive et responsive",
      benefit: "Adoption utilisateur facilitée",
    },
    {
      module: "Sécurité renforcée",
      description: "Derniers standards de sécurité et conformité",
      benefit: "Protection des données optimale",
    },
    {
      module: "Nouvelles fonctionnalités",
      description: "Accès aux dernières innovations Odoo 18",
      benefit: "Avantage concurrentiel maintenu",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would go in Head component */}
      <title>Cas Client Worqbox - Migration Odoo 15 vers 18 | Blackswantechnology</title>

      {/* Header */}
      <Header scrollY={scrollY} isLoaded={isLoaded} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 md:pt-48 pb-20 px-6 lg:px-8 scroll-section">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <a href="/cas-client" className="hover:text-black transition-colors">
              Cas Client
            </a>
            <span>/</span>
            <span className="text-black">Worqbox</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#714b67]/10 border border-[#714b67]/20">
                <div className="w-2 h-2 bg-[#714b67] rounded-full mr-3"></div>
                <span className="text-sm font-medium text-[#714b67] tracking-wide">MIGRATION ODOO 15 → 18</span>
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
                  <span className="text-[#714b67]">Worqbox</span>
                  <span className="block text-3xl md:text-4xl text-gray-600 font-normal mt-2">
                    Migration Réussie vers Odoo 18
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comment nous avons migré Worqbox d'Odoo 15 vers Odoo 18, modernisant leur infrastructure ERP et
                  générant un ROI de 180% en moins de 6 mois.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#714b67] text-white hover:bg-[#714b67]/90 px-8 py-4 rounded-xl group">
                  Voir les Résultats
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-200 px-8 py-4 rounded-xl">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Visiter Worqbox
                </Button>
              </div>
            </div>

            {/* Right Content - Company Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#714b67] rounded-t-3xl"></div>

                {/* Company Logo */}
                <div className="w-20 h-20 bg-[#714b67] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">WQ</span>
                </div>

                {/* Company Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Worqbox</h3>
                    <p className="text-gray-600">Solutions de stockage et logistique</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Secteur</div>
                      <div className="font-semibold text-black">Logistique</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Taille</div>
                      <div className="font-semibold text-black">50+ employés</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Migration</div>
                      <div className="font-semibold text-[#714b67]">Odoo 15 → 18</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Localisation</div>
                      <div className="font-semibold text-black">Casablanca</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#714b67]">+85%</div>
                  <div className="text-sm text-gray-300">Performance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {projectStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#714b67]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#714b67]" />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section ref={challengeRef} className="py-20 px-6 lg:px-8 bg-gray-50 scroll-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">LES DÉFIS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Limitations d'<span className="text-gray-400">Odoo 15</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'ancienne version d'Odoo limitait la croissance de Worqbox avec des contraintes techniques et
              fonctionnelles majeures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="text-red-600 font-semibold text-sm">{challenge.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={solutionRef} className="py-20 px-6 lg:px-8 scroll-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#714b67]/10 border border-[#714b67]/20 mb-8">
              <div className="w-2 h-2 bg-[#714b67] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-[#714b67] tracking-wide">LA SOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Migration vers <span className="text-[#714b67]">Odoo 18</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Migration complète vers Odoo 18 avec nouvelles fonctionnalités et performances optimisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#714b67]/30 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#714b67]/10 rounded-xl flex items-center justify-center group-hover:bg-[#714b67] group-hover:scale-110 transition-all duration-300">
                    <RefreshCw className="w-6 h-6 text-[#714b67] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">{solution.module}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-700 font-semibold text-sm">{solution.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section ref={implementationRef} className="py-20 px-6 lg:px-8 bg-gray-50 scroll-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">MIGRATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Processus en <span className="text-blue-600">3 Phases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique pour garantir une migration sans interruption de service.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

            <div className="space-y-16">
              {[
                {
                  phase: "Phase 1",
                  title: "Audit & Préparation Migration",
                  duration: "4 semaines",
                  description: "Analyse complète de l'existant et préparation de la migration",
                  deliverables: ["Audit Odoo 15", "Plan de migration", "Environnement de test"],
                },
                {
                  phase: "Phase 2",
                  title: "Migration & Tests",
                  duration: "6 semaines",
                  description: "Migration des données et tests complets sur Odoo 18",
                  deliverables: ["Migration des données", "Tests fonctionnels", "Validation utilisateurs"],
                },
                {
                  phase: "Phase 3",
                  title: "Formation & Optimisation",
                  duration: "2 semaines",
                  description: "Formation sur les nouvelles fonctionnalités et optimisations",
                  deliverables: ["Formation équipes", "Optimisations", "Support continu"],
                },
              ].map((phase, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="inline-block max-w-md">
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="text-sm font-bold text-blue-600 mb-2">{phase.phase}</div>
                        <h3 className="text-xl font-bold text-black mb-2">{phase.title}</h3>
                        <div className="text-sm text-gray-500 mb-3">{phase.duration}</div>
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <div className="space-y-1">
                          {phase.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 px-6 lg:px-8 scroll-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 border border-green-200 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 tracking-wide">RÉSULTATS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Impact <span className="text-green-600">Transformateur</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La migration vers Odoo 18 a dépassé toutes les attentes de performance et d'efficacité.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { metric: "+85%", label: "Performance système", icon: Gauge, color: "green" },
              { metric: "+180%", label: "ROI en 6 mois", icon: TrendingUp, color: "blue" },
              { metric: "100%", label: "Données migrées", icon: Shield, color: "purple" },
            ].map((result, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <result.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">{result.metric}</div>
                <div className="text-gray-600">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-[#714b67] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <Quote className="w-12 h-12 text-white/60 mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                "La migration d'Odoo 15 vers Odoo 18 réalisée par Blackswantechnology a donné une nouvelle vie à notre
                système. Les performances et les nouvelles fonctionnalités ont transformé notre productivité."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">YS</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Mehdi ktiri</div>
                  <div className="text-white/80">Fondateur & CEO, Worqbox</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section ref={futureRef} className="py-20 px-6 lg:px-8 bg-gray-50 scroll-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-[#ff5c35] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">PROCHAINES ÉTAPES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Expansion <span className="text-[#ff5c35]">Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fort du succès de la migration Odoo 18, Worqbox nous confie maintenant leur stratégie marketing digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-16 h-16 bg-[#ff5c35]/10 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-[#ff5c35]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">HubSpot CRM Marketing</h3>
              <p className="text-gray-600 mb-6">
                Intégration d'une solution marketing automation pour optimiser la génération de leads et le nurturing
                des prospects.
              </p>
              <div className="space-y-3">
                {["Marketing Automation", "Lead Scoring", "Email Campaigns", "Analytics Avancés"].map(
                  (feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#ff5c35]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#714b67] to-[#ff5c35] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Intégration Complète</h3>
              <p className="text-white/90 mb-6">
                Connexion parfaite entre Odoo 18 ERP et HubSpot CRM pour une vue 360° du customer journey.
              </p>
              <div className="space-y-3">
                {["Sync Temps Réel", "Données Unifiées", "Workflows Automatisés", "Reporting Intégré"].map(
                  (feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt pour Votre <span className="text-[#714b67]">Migration</span> ?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Comme Worqbox, modernisez votre infrastructure ERP avec Odoo 18. Commençons votre migration dès aujourd'hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-[#714b67] text-white hover:bg-[#714b67]/90 px-8 py-4 rounded-xl group">
              Démarrer Ma Migration
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl"
            >
              <Phone className="mr-2 w-5 h-5" />
              Planifier un Appel
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">Partenaire Officiel Odoo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">200+ Migrations Réussies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          variant="outline"
          size="lg"
          className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white shadow-lg"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Retour aux Cas Client
        </Button>
      </div>
    </div>
  )
}
