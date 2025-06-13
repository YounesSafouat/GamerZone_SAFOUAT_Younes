"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Play,
  Shield,
  Award,
  Users,
  Zap,
  Settings,
  BarChart3,
  Quote,
  TrendingUp,
  AlertTriangle,
  Target,
  Lightbulb,
  Rocket,
  ChevronDown,
  MapPin,
  CheckCircle,
  Star,
  HeadphonesIcon,
  Database,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import Footer from "@/components/footer"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const isVisible = true
  const scrollProgress = 100

  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null)
  const challengeRef = useRef<HTMLElement>(null)
  const solutionRef = useRef<HTMLElement>(null)
  const transformationRef = useRef<HTMLElement>(null)
  const successRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
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
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Parallax Background Effects */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255, 92, 53, 0.08) 0%, 
              rgba(113, 75, 103, 0.06) 25%, 
              rgba(255, 92, 53, 0.04) 50%, 
              transparent 70%)`,
          }}
        >
          <div
            className="absolute w-96 h-96 rounded-full border border-gray-200/30 animate-ping"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              animationDuration: "3s",
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full border border-gray-300/40 animate-ping"
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
              animationDuration: "2s",
              animationDelay: "0.5s",
            }}
          />
        </div>

        {/* Animated Grid Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-40 animate-pulse"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-30 animate-pulse delay-500"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40 animate-pulse delay-1500"></div>
          </div>
        </div>

        {/* Header Component */}
        <Header scrollY={scrollY} isLoaded={isLoaded} />

        <main className="relative z-10 px-6 lg:px-8 pt-32 md:pt-40">
          <div className="max-w-6xl mx-auto w-full pt-8">
            <div className="text-center">
              <div
                className={`inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200 mb-12 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${200 * scrollProgress}ms`,
                  transform: `translateY(${isVisible ? 0 : 40}px) scale(${isVisible ? 1 : 0.9})`,
                }}
              >
                <div className="w-2 h-2 bg-[#ff5c35] rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide">
                  PARTENAIRES OFFICIELS ODOO & HUBSPOT
                </span>
              </div>

              {/* Platform Logos */}
              <div
                className={`flex items-center justify-center gap-8 mb-12 transition-all duration-1000`}
                style={{
                  transitionDelay: `${300 * scrollProgress}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 40}px) scale(${isVisible ? 1 : 0.8})`,
                }}
              >
                {/* Odoo Logo */}
                <div className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                    <img src="odoo.png" alt="odoo" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 font-medium">ERP Solutions</div>
                  </div>
                </div>

              

                {/* HubSpot Logo */}
                <div className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                    <img src="hubspot.png" alt="hubspot" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 font-medium">CRM Solutions</div>
                  </div>
                </div>
              </div>

              <h1
                className={`text-5xl md:text-7xl font-bold text-black mb-8 leading-tight tracking-tight transition-all duration-1000`}
                style={{
                  transitionDelay: `${400 * scrollProgress}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 60}px) scale(${isVisible ? 1 : 0.8})`,
                }}
              >
                Solutions Digitales
                <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-[#714b67]  to-[#ff5c35]">
                  Sur Mesure
                </span>
              </h1>

              <p
                className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000`}
                style={{
                  transitionDelay: `${600 * scrollProgress}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 40}px)`,
                }}
              >
                Nous implémentons <span className="text-[#714b67] font-semibold">Odoo ERP</span> ou{" "}
                <span className="text-[#ff5c35] font-semibold">HubSpot CRM</span> selon vos besoins spécifiques.
                <span className="block mt-2 text-lg text-gray-500">
                  Analyse personnalisée • Solutions adaptées • Accompagnement complet
                </span>
              </p>

              {/* Service Benefits */}
              <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto transition-all duration-1000`}
                style={{
                  transitionDelay: `${700 * scrollProgress}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 40}px)`,
                }}
              >
                <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-[#714b67]/10 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-[#714b67]" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-black text-sm">ERP Odoo</div>
                    <div className="text-xs text-gray-500">Gestion Intégrée</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-[#ff5c35]/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#ff5c35]" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-black text-sm">CRM HubSpot</div>
                    <div className="text-xs text-gray-500">Marketing & Ventes</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-black text-sm">Analyse Complète</div>
                    <div className="text-xs text-gray-500">Besoins Spécifiques</div>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000`}
                style={{
                  transitionDelay: `${800 * scrollProgress}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 40}px)`,
                }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#714b67] to-[#ff5c35] text-white hover:from-[#714b67]/90 hover:to-[#ff5c35]/90 shadow-2xl shadow-black/20 hover:shadow-3xl transition-all duration-500 px-10 py-6 text-lg font-medium hover:scale-105 group rounded-2xl"
                >
                  Découvrir nos Solutions
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 group rounded-2xl"
                >
                  <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Voir la Démo
                </Button>
              </div>

              {/* Integration Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  { number: "200+", label: "Intégrations Réussies", icon: CheckCircle },
                  { number: "99.9%", label: "Uptime Garanti", icon: Shield },
                  { number: "24/7", label: "Support Expert", icon: HeadphonesIcon },
                  { number: "< 48h", label: "Mise en Service", icon: Rocket },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 rounded-3xl bg-white/50 backdrop-blur-xl border border-gray-100 hover:border-gray-200 transition-all duration-1000 hover:scale-105 hover:shadow-xl group`}
                    style={{
                      transitionDelay: `${(1000 + index * 200) * scrollProgress}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: `translateY(${isVisible ? 0 : 60}px) scale(${isVisible ? 1 : 0.8})`,
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#714b67]/20 to-[#ff5c35]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div
                className={`mt-16 flex items-center justify-center gap-8 transition-all duration-1000`}
                style={{
                  transitionDelay: `${1200 * scrollProgress}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 40}px)`,
                }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Star className="w-4 h-4 text-[#714b67]" />
                  <span>Partenaire Officiel Odoo</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Award className="w-4 h-4 text-[#ff5c35]" />
                  <span>HubSpot Platinum Partner</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>Basé à Casablanca</span>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </main>

        {/* Chapter 2: The Challenge */}
        <section ref={challengeRef} id="defi" className="relative z-10 py-32 px-6 lg:px-8 bg-gray-50 scroll-section mt-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 scroll-fade-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 mb-12 shadow-lg">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide">CHAPITRE 2 : LE DÉFI</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
                Le Chaos <span className="text-gray-400">Organisé</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Avant la transformation, il y a toujours le chaos. Voici les défis que nous résolvons quotidiennement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertTriangle,
                  title: "Données Fragmentées",
                  description: "Informations éparpillées dans des systèmes isolés, créant des silos organisationnels.",
                  impact: "-40% Efficacité",
                },
                {
                  icon: TrendingUp,
                  title: "Opportunités Perdues",
                  description: "Leads non qualifiés, processus manuels, et décisions basées sur des intuitions.",
                  impact: "-60% Conversions",
                },
                {
                  icon: Users,
                  title: "Équipes Déconnectées",
                  description: "Collaboration limitée, workflows inefficaces, et perte de temps considérable.",
                  impact: "+3h Perdues/Jour",
                },
              ].map((challenge, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl scroll-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-3xl"></div>
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <challenge.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{challenge.description}</p>
                  <div className="text-gray-800 font-bold text-lg">{challenge.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter 3: The Solution */}
        <section ref={solutionRef} id="solution" className="relative z-10 py-32 px-6 lg:px-8 scroll-section">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 scroll-fade-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200 mb-12">
                <div className="w-2 h-2 bg-[#ff5c35] rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide">CHAPITRE 3 : LA SOLUTION</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
                L'Art de <span className="text-[#ff5c35]">l'Intégration</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Nous transformons le chaos en symphonie grâce à une approche méthodique et des outils de classe mondiale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Settings,
                  title: "HubSpot",
                  subtitle: "Le Cerveau Commercial",
                  description:
                    "CRM intelligent, automatisation marketing, et analytics prédictifs pour une croissance mesurable.",
                  color: "#ff5c35",
                  features: ["CRM Avancé", "Marketing Automation", "Sales Pipeline"],
                },
                {
                  icon: BarChart3,
                  title: "Odoo",
                  subtitle: "L'Épine Dorsale",
                  description:
                    "ERP complet unifiant tous vos processus métier dans une plateforme cohérente et évolutive.",
                  color: "#714b67",
                  features: ["ERP Modulaire", "Gestion Intégrée", "Workflows Personnalisés"],
                },
                {
                  icon: Zap,
                  title: "Intégration",
                  subtitle: "La Magie Opère",
                  description: "Synchronisation parfaite créant un écosystème digital où chaque donnée trouve sa place.",
                  color: "#000000",
                  features: ["Sync Temps Réel", "API Natives", "Données Unifiées"],
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl scroll-scale-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                    style={{ backgroundColor: solution.color }}
                  ></div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{solution.title}</h3>
                  <h4 className="text-sm font-medium text-gray-500 mb-4 tracking-wide uppercase">{solution.subtitle}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: solution.color }}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter 4: Transformation Process */}
        <section
          ref={transformationRef}
          id="transformation"
          className="relative z-10 py-32 px-6 lg:px-8 bg-gray-50 scroll-section"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 scroll-fade-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 mb-12 shadow-lg">
                <div className="w-2 h-2 bg-[#714b67] rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide">CHAPITRE 4 : TRANSFORMATION</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
                Notre <span className="text-[#714b67]">Méthodologie</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Un processus éprouvé en 4 étapes pour garantir le succès de votre transformation digitale.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

              <div className="space-y-24">
                {[
                  {
                    step: "01",
                    title: "Audit & Stratégie",
                    description:
                      "Analyse approfondie de votre écosystème actuel et définition d'une roadmap personnalisée.",
                    icon: Target,
                    side: "left",
                  },
                  {
                    step: "02",
                    title: "Architecture & Design",
                    description:
                      "Conception de l'architecture technique et des workflows optimisés pour vos besoins spécifiques.",
                    icon: Lightbulb,
                    side: "right",
                  },
                  {
                    step: "03",
                    title: "Implémentation",
                    description: "Déploiement méthodique avec formation continue et accompagnement de vos équipes.",
                    icon: Settings,
                    side: "left",
                  },
                  {
                    step: "04",
                    title: "Optimisation",
                    description:
                      "Monitoring continu, ajustements et évolutions pour maximiser votre retour sur investissement.",
                    icon: Rocket,
                    side: "right",
                  },
                ].map((phase, index) => (
                  <div key={index} className="flex items-center">
                    {phase.side === "left" ? (
                      <>
                        <div className="flex-1 text-right pr-12">
                          <div className="inline-block max-w-md">
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-xl scroll-slide-right">
                              <div className="text-sm font-bold text-gray-400 mb-2 tracking-wider">
                                ÉTAPE {phase.step}
                              </div>
                              <h3 className="text-2xl font-bold text-black mb-4">{phase.title}</h3>
                              <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center relative z-10 shadow-lg scroll-scale-up">
                          <phase.icon className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="flex-1 pl-12"></div>
                      </>
                    ) : (
                      <>
                        <div className="flex-1 pr-12"></div>
                        <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center relative z-10 shadow-lg scroll-scale-up">
                          <phase.icon className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="flex-1 text-left pl-12">
                          <div className="inline-block max-w-md">
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-xl scroll-slide-left">
                              <div className="text-sm font-bold text-gray-400 mb-2 tracking-wider">
                                ÉTAPE {phase.step}
                              </div>
                              <h3 className="text-2xl font-bold text-black mb-4">{phase.title}</h3>
                              <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5: Success Stories */}
        <section ref={successRef} className="relative z-10 py-32 px-6 lg:px-8 scroll-section">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 scroll-fade-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200 mb-12">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide">CHAPITRE 5 : SUCCÈS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
                Histoires de <span className="text-black">Réussite</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chaque transformation raconte une histoire unique. Voici quelques-unes de nos plus belles réussites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmed Mansouri",
                  role: "CEO, TechCorp",
                  quote:
                    "Notre transformation digitale a révolutionné notre approche commerciale. Résultats exceptionnels.",
                  result: "+900% Leads",
                  avatar: "AM",
                },
                {
                  name: "Salma Benali",
                  role: "Directrice, InnovateMA",
                  quote: "L'intégration Odoo a unifié tous nos processus. Une efficacité opérationnelle remarquable.",
                  result: "-70% Temps Gestion",
                  avatar: "SB",
                },
                {
                  name: "Youssef Kadiri",
                  role: "CTO, GlobalTrade",
                  quote: "Accompagnement exceptionnel et résultats au-delà de nos espérances. Partenaire de confiance.",
                  result: "+150% ROI",
                  avatar: "YK",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl scroll-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-3xl"></div>
                  <Quote className="w-8 h-8 text-gray-300 mb-6" />
                  <p className="text-gray-700 mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-black">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-black">{testimonial.result}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section ref={ctaRef} className="relative z-10 py-32 px-6 lg:px-8 bg-black scroll-section">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-12 scroll-fade-up">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white/80 tracking-wide">ÉPILOGUE : VOTRE HISTOIRE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight scroll-fade-up">
              Prêt à Écrire Votre <span className="text-[#ff5c35]">Légende</span> ?
            </h2>
            <p className="text-xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed scroll-fade-up">
              Chaque grande transformation commence par une conversation. Commençons la vôtre.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 scroll-scale-up">
              <Button
                size="lg"
                className="bg-[#ff5c35] text-white hover:bg-[#ff5c35]/90 shadow-2xl shadow-[#ff5c35]/20 hover:shadow-3xl transition-all duration-500 px-10 py-6 text-lg font-medium hover:scale-105 group rounded-2xl"
              >
                Commencer Ma Transformation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-black hover:text-white hover:bg-white/10 px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-2xl"
              >
                <Globe className="mr-3 w-5 h-5" />
                Planifier un Appel
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Globe, title: "Casablanca", subtitle: "Maroc" },
                { icon: Shield, title: "5+ Années", subtitle: "D'Excellence" },
                { icon: Award, title: "Platinum", subtitle: "HubSpot & Odoo" },
              ].map((item, index) => (
                <div key={index} className="p-6 scroll-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <item.icon className="w-8 h-8 text-white/60 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>
  )
}
