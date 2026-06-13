// import { Button } from "@mui/material";

// export default function CTA() {
//   return (
//     <section className="pb-28">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="rounded-[36px] bg-[#084660] p-12 md:p-16">
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
//             <div>
//               <h2 className="text-4xl font-bold text-white">
//                 Construisons ensemble votre futur digital.
//               </h2>

//               <p className="text-white/70 mt-4 max-w-2xl">
//                 Une équipe passionnée prête à transformer
//                 vos idées en solutions concrètes.
//               </p>
//             </div>

//             <Button
//               variant="contained"
//               sx={{
//                 bgcolor: "#3B82F6",
//                 px: 4,
//                 py: 1.8,
//                 borderRadius: "14px",
//               }}
//             >
//               Contactez-nous
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[36px] bg-[#084660] p-12 md:p-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-4xl font-bold text-white">
                Construisons ensemble votre futur digital.
              </h2>

              <p className="text-white/70 mt-4 max-w-2xl">
                Une équipe passionnée prête à transformer vos idées en
                solutions concrètes.
              </p>
            </div>

            <Button
              variant="contained"
              onClick={() => navigate("/contact")}
              sx={{
                bgcolor: "#3B82F6",
                px: 4,
                py: 1.8,
                borderRadius: "14px",
              }}
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}