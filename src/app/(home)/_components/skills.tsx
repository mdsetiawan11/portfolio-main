"use client";

import React from "react";
import {
  SiBootstrap,
  SiCodeigniter,
  SiCss3,
  SiDart,
  SiDotnet,
  SiFlutter,
  SiHtml5,
  SiMicrosoftsqlserver,
  SiPhp,
} from "react-icons/si";

import { HoverEffect } from "@/components/card-hover-effect";

import { Title } from "./title";

const SKILLS = [
  { text: "HTML5", Icon: SiHtml5 },
  { text: "PHP", Icon: SiPhp },
  { text: "CSS", Icon: SiCss3 },
  { text: "Bootstrap", Icon: SiBootstrap },
  { text: "Codeigniter", Icon: SiCodeigniter },
  { text: "Microsoft Sql Server", Icon: SiMicrosoftsqlserver },
  { text: ".NET", Icon: SiDotnet },
  { text: "Dart", Icon: SiDart },
  { text: "Flutter", Icon: SiFlutter },
];

export const Skills = () => (
  <section className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32">
    <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
      Skills
    </h2>
    <HoverEffect items={SKILLS}></HoverEffect>
  </section>
);
