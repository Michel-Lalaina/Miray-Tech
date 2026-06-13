export default function Stats() {
  const stats = [
    { value: "50+", label: "Projets réalisés" },
    { value: "15+", label: "Clients accompagnés" },
    { value: "24/7", label: "Support technique" },
    { value: "100%", label: "Sur mesure" },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100"
            >
              <h3 className="text-4xl font-bold text-[#1e47d8]">
                {stat.value}
              </h3>

              <p className="text-gray-500 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}