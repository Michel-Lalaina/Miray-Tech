
// Contact.tsx

import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Contact & Support
          </p>

          <h1 className="text-6xl font-bold mt-5 text-slate-900">
            Construisons quelque chose d’exceptionnel
          </h1>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            Miray Technology vous accompagne dans la création de solutions digitales
            modernes, performantes et scalables.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* INFOS */}
          <div className="bg-white rounded-[36px] p-10 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-10">Informations</h2>

            <div className="space-y-7">
              {[
                ["Email", "contact@miraytechnology.com"],
                ["Support", "support@miraytechnology.com"],
                ["Téléphone", "+212 XX XX XX XX XX"],
                ["Disponibilité", "Lun - Ven • 09:00 - 18:00"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-slate-400 text-sm">{label}</p>
                  <p className="font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>

            <Button
              onClick={handleOpen}
              variant="contained"
              fullWidth
              sx={{
                mt: 6,
                bgcolor: "#0f172a",
                py: 1.8,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { bgcolor: "#111827" },
              }}
            >
              Ouvrir le formulaire de contact
            </Button>
          </div>

          {/* CTA CARD */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[36px] p-10 shadow-2xl text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              Une idée ? Parlons-en.
            </h2>

            <p className="text-white/80 mb-10">
              Cliquez sur le bouton pour ouvrir un formulaire rapide et entrer en contact
              avec notre équipe.
            </p>

            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#1e293b",
                py: 1.6,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 700,
                "&:hover": { bgcolor: "#f1f5f9" },
              }}
            >
              Lancer une demande
            </Button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "24px",
            p: 2,
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: "20px" }}>
          Envoyer un message
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 12, top: 12 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <div className="space-y-5 mt-2">
            <TextField fullWidth label="Nom complet" />
            <TextField fullWidth label="Adresse email" />
            <TextField fullWidth label="Sujet" />
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
                mt: 2,
                bgcolor: "#0f172a",
                py: 1.6,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Envoyer le message
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}