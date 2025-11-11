import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const IMAGES_ROW_A = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dkahnzsax/image/upload/v1762872653/Screenshot_2025-11-11_201512_vx7mvm.png",
    description: "SelfLancer | Freelancing Platform",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dkahnzsax/image/upload/v1762872653/Screenshot_2025-11-11_201229_zsynoq.png",
    description: "WanderSphere | Travel Booking Site",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dkahnzsax/image/upload/v1762872653/Screenshot_2025-11-11_201354_icvx5d.png",
    description: "Ace Productions | Marketing Agency",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dkahnzsax/image/upload/v1762872651/Screenshot_2025-11-11_201634_z82zpb.png",
    description: "Quindle Store | Shopping Site",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dkahnzsax/image/upload/v1762872649/Screenshot_2025-11-11_201044_j0x56z.png",
    description: "Ace Productions | Marketing Agency(Updated)",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dkahnzsax/image/upload/v1762872650/Screenshot_2025-11-11_201135_zyv2uy.png",
    description: "Portfolio Website",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dkahnzsax/image/upload/v1762872649/Screenshot_2025-11-11_201607_aldxkp.png",
    description: "Quadstack | Your reliable Partner",
  },
];

export function ScrollProjects() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={2} direction={2} className="py-4">
          {IMAGES_ROW_A.map((item) => (
            <div className="text-center space-y-4" key={item.id}>
              <img
                src={`${item.src}`}
                alt={item.description}
                width={520}
                height={300}
                loading="lazy"
                decoding="async"
                className="mx-4 inline-block rounded-lg object-cover shadow-sm"
              />
              <p>{item.description}</p>
            </div>
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2} direction={-1} className="py-4">
          {IMAGES_ROW_A.map((item) => (
            <div className="text-center space-y-4" key={item.id}>
              <img
                src={`${item.src}`}
                alt={item.description}
                width={520}
                height={300}
                loading="lazy"
                decoding="async"
                className="mx-4 inline-block rounded-lg object-cover shadow-sm"
              />
              <p>{item.description}</p>
            </div>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
