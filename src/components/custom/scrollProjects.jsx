import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const IMAGES_ROW_A = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "E-commerce",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Booking Site",
  },
];

export function ScrollProjects() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={2} className="py-4">
          {IMAGES_ROW_A.map((item) => (
            <div className="text-center space-y-4" key={item.id}>
              <img
                src={`${item.src}&ixlib=rb-4.0.3`}
                alt="Unsplash sample"
                width={440}
                height={260}
                loading="lazy"
                decoding="async"
                className="mx-4 inline-block h-72 rounded-lg object-cover shadow-sm"
              />
              <p>{item.description}</p>
            </div>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}
