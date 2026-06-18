// components/Footer.tsx

import {
  Facebook,
  LinkedIn,
  Instagram,
  X,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#1E3A8A]">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-300/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* CTA */}
          <div className="py-20 border-b border-white/10">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <p className="uppercase tracking-[4px] text-blue-100 text-sm font-semibold">
                  Miray Technology
                </p>

                <h2 className="text-4xl font-bold text-white mt-3 max-w-2xl">
                  Prêt à accélérer votre transformation digitale ?
                </h2>

                <p className="text-blue-100 mt-4 max-w-xl">
                  Créons ensemble une solution moderne, performante
                  et pensée pour accompagner votre croissance.
                </p>
              </div>

              <button className="px-8 py-4 bg-white text-blue-700 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
                Commencer un projet
              </button>
            </div>
          </div>

          {/* Main Footer */}
          <div className="py-20 grid lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    M
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl">
                    Miray Technology
                  </h3>

                  <p className="text-blue-100 text-sm">
                    Digital Innovation Partner
                  </p>
                </div>
              </div>

              <p className="text-blue-100 mt-6 max-w-md leading-relaxed">
                Nous concevons des applications web, plateformes
                SaaS et solutions digitales à forte valeur ajoutée
                pour accompagner les entreprises dans leur croissance.
              </p>

              <div className="flex gap-4 mt-8">
                {[
                  Facebook,
                  LinkedIn,
                  Instagram,
                  X,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white"
                  >
                    <Icon fontSize="small" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Services
              </h4>

              <ul className="space-y-4 text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Développement Web
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Applications SaaS
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    UI / UX Design
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Consulting IT
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Entreprise
              </h4>

              <ul className="space-y-4 text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition">
                    À propos
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Nos projets
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Carrières
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                Contact
              </h4>

              <ul className="space-y-4 text-blue-100">
                <li>contact@miraytechnology.com</li>
                <li>support@miraytechnology.com</li>
                <li>+212 XX XX XX XX XX</li>
                <li>Lun - Ven • 09h00 - 18h00</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} Miray Technology.
              Tous droits réservés.
            </p>

            <div className="flex gap-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition">
                Politique de confidentialité
              </a>

              <a href="#" className="hover:text-white transition">
                Conditions d'utilisation
              </a>

              <a href="#" className="hover:text-white transition">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}