"use client";
import {
  SiDart,
  SiDotnet,
  SiFlutter,
  SiJavascript,
  SiJquery,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";

import { MovingBorderButton } from "@/components/moving-border";
import { Meteors } from "@/components/meteors";

import { Title } from "./title";
import { TextGenerateEffect } from "@/components/ui/text-generate";

const CURRENT_STACK = [
  { icon: SiDotnet },
  { icon: SiMicrosoftsqlserver },
  { icon: SiJquery },
  { icon: SiDart },
  { icon: SiFlutter },
] as const;

export const Hero = () => {
  return (
    <div className="animate-move-up flex min-h-[60vh] flex-col items-center justify-between gap-14 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <h2 className="text-4xl font-bold lg:text-7xl">Nice to meet you! 👋</h2>
        <TextGenerateEffect
          words={`I'm a software developer passionate about building web and mobile applications..`}
        />

        <Link href="mailto:fzpromds@gmail.com" className="group inline-block">
          <Title text="Contact Me 📭" tag="p" />
        </Link>
      </div>
      <div className="relative">
        <div className="">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-[#09090B] px-4 py-8 shadow-xl">
              <div className="z-10 mb-4 flex items-center justify-center gap-3">
                {CURRENT_STACK.map((current, index) => {
                  const Icon = current.icon;
                  return <Icon key={index} className="h-7 w-7" />;
                })}
              </div>

              <div className="mb-4 flex items-end justify-center gap-1">
                <p className="relative z-50 text-xl font-bold text-white">
                  Currently, i&apos;m @
                </p>
                <Link href="https://www.bpk.go.id/">
                  <span className="text-2xl font-bold text-white transition-colors hover:text-yellow-500">
                    bpk-ri
                  </span>
                </Link>
              </div>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                The state institution within Indonesia&apos;s constitutional
                system that has the authority to examine the management and
                accountability of state finances.
              </p>

              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
