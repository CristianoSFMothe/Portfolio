import Image from "next/image";

const sections = [
  {
    title: "Login",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fitqggfjpavkm0g7wor7r.png",
  },
  {
    title: "Home",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fitqggfjpavkm0g7wor7r.png",
  },
];

export const ProjectSection = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>

          <Image 
            src={section.image}
            width={1080}
            height={672}
            alt={section.title}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};
