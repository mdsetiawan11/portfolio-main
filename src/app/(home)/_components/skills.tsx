"use client";

import React from "react";
import {
  SiBootstrap,
  SiCodeigniter,
  SiCsharp,
  SiCss3,
  SiDart,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import { HoverEffect } from "@/components/card-hover-effect";

import { Title } from "./title";

const SKILLS = [
  { text: "React", Icon: SiReact },
  { text: "NextJs", Icon: SiNextdotjs },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "C#", Icon: SiCsharp },
  { text: ".NET", Icon: SiDotnet },
  { text: "Microsoft Sql Server", Icon: SiMicrosoftsqlserver },
  { text: "Dart", Icon: SiDart },
  { text: "Flutter", Icon: SiFlutter },
  { text: "Firebase", Icon: SiFirebase },
];

export const Skills = () => (
  <section className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32">
    <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
      Skills
    </h2>
    <HoverEffect items={SKILLS}></HoverEffect>
  </section>
);
