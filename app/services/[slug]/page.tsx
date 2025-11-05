import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Image src={service.image} alt={service.title} width={120} height={120} className="rounded-3xl w-[120px] h-[120px]" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-lightblack mb-6">{service.summary}</p>
            {service.details.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-black mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}