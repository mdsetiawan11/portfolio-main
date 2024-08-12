import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  skills?: string[];
}

export function ProjectCard3d({
  title,
  type,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  skills,
}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem translateZ="50" className="mt-4 w-full">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={imageUrl}
              alt="Project Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </CardItem>
        <CardItem
          as="h3"
          translateZ="60"
          className="mt-4 scroll-m-20 text-2xl font-semibold tracking-tight"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm text-muted-foreground"
        >
          {type}
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="leading-7 [&:not(:first-child)]:mt-6"
        >
          {description}
        </CardItem>
        {skills && (
          <CardItem translateZ="40" className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </CardItem>
        )}
        <div className="mt-10 flex items-center justify-between">
          {githubUrl && (
            <CardItem translateZ={30}>
              <Link href={githubUrl} target="_blank" passHref>
                <Button variant="link">
                  Link To Github
                  <ExternalLink className="ml-2" />
                </Button>
              </Link>
            </CardItem>
          )}
          {demoUrl && (
            <CardItem translateZ={30}>
              <Link href={demoUrl} target="_blank" passHref>
                <Button>
                  Live URL
                  <ExternalLink className="ml-2" />
                </Button>
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
