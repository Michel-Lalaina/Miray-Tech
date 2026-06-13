import { Button, Chip } from "@mui/material";
import logo from "../assets/logo.jpeg";
import { motion } from "framer-motion";
import { CheckCircle } from "@mui/icons-material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8ab6e8] via-[#3375a1] to-[#1a3280]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Chip
              label="MIRAY TECHNOLOGY"
              sx={{
                bgcolor: "rgba(255,255,255,.08)",
                color: "white",
                mb: 3,
              }}
            />

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Nous créons les
              <span className="block text-[#2428ea]">
                technologies de demain.
              </span>
            </h1>

            <p className="text-white text-xl mt-8 max-w-xl">
              Miray Technology accompagne les entrepreneurs et entreprises avec des solutions innovantes en développement logiciel, intelligence artificielle, médias digitaux et
              transformation numérique.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  bgcolor: "#3B82F6",
                  borderRadius: "14px",
                  px: 4,
                  py: 1.5,
                }}
              >
                Découvrir Miray
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,.2)",
                  color: "white",
                  borderRadius: "14px",
                  px: 4,
                }}
              >
                Nos Services
              </Button>
            </div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            {/* Glow background tech */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3F7D52]/20 via-[#7C3AED]/10 to-[#3B82F6]/20 blur-3xl rounded-[40px]" />

            {/* CARD */}
            <div className="relative bg-white/90 backdrop-blur-xl rounded-[36px] p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] border border-white/60 overflow-hidden">

              {/* Decorative tech shapes */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#3F7D52]/20 to-[#7C3AED]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#3B82F6]/20 to-[#3F7D52]/10 rounded-full blur-2xl" />

              {/* HEADER */}
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-sm tracking-widest text-[#3B82F6] font-semibold">
                    SOLUTIONS DIGITALES
                  </p>

                  <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#3F7D52] via-[#3B82F6] to-[#7C3AED] bg-clip-text text-transparent">
                    360°
                  </h3>

                  <p className="text-slate-600 mt-2 text-sm font-semibold">
                    Innovation • Performance • Scalabilité
                  </p>
                </div>

                {/* Floating tech icon */}

                <motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
  className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center p-3 shadow-xl border border-white/20"
>
  <img
    src={logo}
    alt="Miray Technology"
    className="w-full h-full object-contain"
  />
</motion.div>
                {/* <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3F7D52] to-[#7C3AED] shadow-lg shadow-[#3F7D52]/30"
                /> */}
              </div>

              {/* LIST */}
              <div className="space-y-5">
                {[
                  "Développement Web & Mobile",
                  "Intelligence Artificielle",
                  "Production Média",
                  "Cloud & Infrastructure",
                  "Marketing Digitale",

                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-slate-700 group-hover:text-[#4c3f7d] transition font-medium">
                      {item}
                    </span>

                    <CheckCircle
                      className="text-[#1055a3] group-hover:scale-110 transition"
                    />
                  </motion.div>
                ))}
              </div>

              {/* bottom line glow */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3F7D52] via-[#3B82F6] to-[#7C3AED] opacity-40" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}