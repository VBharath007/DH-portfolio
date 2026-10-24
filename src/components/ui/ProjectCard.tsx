"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="group relative w-full flex flex-col p-3 sm:p-4 rounded-2xl bg-[#121426]/90 border border-white/15 border-t-white/30 backdrop-blur-xl shadow-xl shadow-black/40 hover:bg-[#181a32] hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer"
    >
      {/* Uniform Sized Architectural Image Frame (Strict 16:10 aspect ratio across every card) */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-black/40 border border-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
      </div>

      {/* Clean Showcase Info (Uniform height, no click/explore/view details buttons) */}
      <div className="pt-3 pb-1">
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono tracking-wider uppercase text-neutral-400 mb-1">
          <span className="text-emerald-400 font-semibold">{project.category}</span>
          <span className="truncate text-right">
            {project.location ? `${project.location.split(",")[0]} • ` : ""}
            {project.year || "Completed"}
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
      </div>
    </article>
  );
};
