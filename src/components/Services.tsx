import CodeIcon from "@mui/icons-material/Code";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CampaignIcon from "@mui/icons-material/Campaign";
import CloudIcon from "@mui/icons-material/Cloud";

const services = [
  {
    title: "Développement",
    icon: <CodeIcon />,
    desc: "Applications web, mobile et SaaS modernes.",
  },
  {
    title: "IA & Automatisation",
    icon: <SmartToyIcon />,
    desc: "Solutions intelligentes pour gagner du temps.",
  },
  {
    title: "Media & Branding",
    icon: <CampaignIcon />,
    desc: "Contenus digitaux et identité de marque.",
  },
  {
    title: "Cloud Solutions",
    icon: <CloudIcon />,
    desc: "Infrastructure scalable et sécurisée.",
  },
];

export default function Services() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#3776ec] font-semibold">
            NOS EXPERTISES
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Ce que nous faisons
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#184D4F]/10 flex items-center justify-center text-[#082659]">
                {service.icon}
              </div>

              <h3 className="font-bold text-xl mt-6">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}