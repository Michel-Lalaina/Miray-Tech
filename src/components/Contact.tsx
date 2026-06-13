import {
  Button,
  TextField,
} from "@mui/material";

export default function Contact() {
  return (
        
    <section className="min-h-screen bg-[#F8FAFC] py-20">
    
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#3B82F6] font-semibold">
            Contact & Support
          </p>

          <h1 className="text-5xl font-bold mt-4 text-slate-900">
            Parlons de votre projet.
          </h1>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            Notre équipe Miray Technology est disponible pour répondre
            à vos questions, discuter de vos besoins et vous accompagner
            dans vos projets digitaux.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100">

            <h2 className="text-2xl font-bold mb-8">
              Informations de contact
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-slate-400 text-sm">
                  Email
                </p>

                <p className="font-semibold">
                  contact@miraytechnology.com
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Support
                </p>

                <p className="font-semibold">
                  support@miraytechnology.com
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Téléphone
                </p>

                <p className="font-semibold">
                  +212 XX XX XX XX XX
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  Disponibilité
                </p>

                <p className="font-semibold">
                  Lundi - Vendredi • 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100">

            <h2 className="text-2xl font-bold mb-8">
              Envoyer un message
            </h2>

            <div className="space-y-5">

              <TextField
                fullWidth
                label="Nom complet"
              />

              <TextField
                fullWidth
                label="Adresse email"
              />

              <TextField
                fullWidth
                label="Sujet"
              />

              <TextField
                fullWidth
                multiline
                rows={5}
                label="Votre message"
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#084660",
                  py: 1.8,
                  borderRadius: "12px",
                }}
              >
                Envoyer la demande
              </Button>

            </div>
          </div>

        </div>
      </div>
    </section>

  );
}