import { SiGithub, SiInstagram, SiLinkedin, SiTelegram } from "react-icons/si";
import Link from "next/link";

import { cn } from "@/shared/lib/utils";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";

const SOCIALS = [
  {
    link: "https://www.instagram.com/md.setiawan11/",
    label: "Instagram",
    Icon: SiInstagram,
  },
  {
    link: "https://github.com/mdsetiawan11",
    label: "GitHub",
    Icon: SiGithub,
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "animate-move-down flex items-center justify-between py-10",
        className,
      )}
    >
      <h1 className="text-2xl font-bold underline decoration-blue-300 underline-offset-8">
        Muhammad Dadang Setiawan
      </h1>

      <div className="flex items-center gap-5">
        {SOCIALS.map((social, index) => (
          <Link href={social.link} key={index} aria-label={social.label}>
            <social.Icon className="h-5 w-5 transition-all hover:scale-125" />
          </Link>
        ))}
      </div>
    </nav>
  );
};
