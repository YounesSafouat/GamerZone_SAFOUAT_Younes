import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-[#ff5c35] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7c55] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ff7c55] rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Restez à la pointe de l'innovation</h3>
              <p className="text-white/80">
                Recevez nos dernières actualités, études de cas et conseils d'experts directement dans votre boîte mail.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Votre email professionnel"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white h-12"
                />
                <Button className="bg-white text-[#ff5c35] hover:bg-white/90 h-12 px-6 whitespace-nowrap">
                  S'inscrire
                </Button>
              </div>
              <p className="text-xs mt-2 text-white/70">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <div className="w-5 h-5 bg-black rounded-md"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff5c35] rounded-full"></div>
              </div>
              <span className="text-lg font-bold tracking-tight">Blackswantechnology</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Nous transformons les entreprises marocaines grâce à des solutions digitales innovantes et sur mesure.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#ff5c35]" />
                <span>Twin Center, Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-[#ff5c35]" />
                <span>+212 6 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-[#ff5c35]" />
                <span>contact@blackswantechnology.ma</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {["Accueil", "Services", "À Propos", "Témoignages", "Blog", "Carrières", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-[#ff5c35] rounded-full"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {[
                "HubSpot CRM",
                "Odoo ERP",
                "Intégration API",
                "Développement Web",
                "Marketing Digital",
                "Formation & Support",
                "Audit Digital",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-[#714b67] rounded-full"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6">Suivez-nous</h4>
            <div className="flex gap-4 mb-8">
              {[
                { icon: Facebook, color: "bg-blue-600" },
                { icon: Twitter, color: "bg-sky-500" },
                { icon: Linkedin, color: "bg-blue-700" },
                { icon: Instagram, color: "bg-pink-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>

            <h4 className="text-lg font-bold mb-4">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {["HubSpot Platinum", "Odoo Partner", "ISO 27001", "GDPR Compliant"].map((cert, index) => (
                <span key={index} className="bg-gray-800 text-xs text-gray-300 px-3 py-1.5 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Blackswantechnology. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
