import { ExperienceCard } from "@/components/custom/experience-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import experiences from "@/shared/lib/experiences.json";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="flex flex-col items-start justify-start gap-4 py-16 sm:mx-24 sm:py-32 md:mx-32 lg:mx-64 xl:mx-96"
    >
      <h2 className="w-full scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
        Where I&apos;ve Worked
      </h2>
      <div className="flex flex-col gap-4 md:hidden">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.title}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
            skills={experience.skills}
          />
        ))}
      </div>
      <TracingBeam className="hidden px-6 md:flex md:flex-col">
        <div className="flex flex-col gap-4">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
