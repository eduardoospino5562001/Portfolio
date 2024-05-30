import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pokemon from "@/public/pokemon.png";
import git from "@/public/git.png";
import rick from "@/public/rick.png";
import tarea from "@/public/tarea.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mi",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Estudiante de Academlo",
    location: "Remoto",
    description:
      "Me estoy preparando para ser un desarrollador web versátil, aprendiendo tanto front-end como back-end en Academlo.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Estudiante de ingenieria Informatica",
    location: "Villavicencio-Meta",
    description:
      "Actualmente estoy cursando Ingeniería Informática en la Corporacion univertiraria Aunar, enfocándome en desarrollar habilidades sólidas en programación y explorando áreas como auditoría de sistemas, seguridad informática y desarrollo de aplicaciones.",
    icon: React.createElement(LuGraduationCap),
    date: "En curso, graduación prevista para finales de 2024",
  },
  {
    title: "Ingeniero Informático Pasante ",
    location: "Villavicencio-Meta",
    description:
      "Mantenimiento preventivo y correctivo de infraestructuras, aplicando conocimientos de programación para automatizar tareas y mejorar procesos. ",
    icon: React.createElement(FaReact),
    date: "2024 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Pokemon",
    description:
      "Como desarrollador, dediqué una semana a esta plataforma. Pokemon es una API RESTful que proporciona datos detallados sobre todos los Pokémon.",
    tags: ["React", "JavaScript", "Scss","Git"],
    imageUrl: pokemon,
    githubUrl: "https://github.com/eduardoospino5562001/pokemones.git",
    netlifyUrl: "https://frabjous-klepon-ceafdf.netlify.app/",
  },
  {
    title: "Buscador de usuario en Git",
    description:
      "Un sitio web que permite ingresar un nombre de usuario de GitHub y obtener información de su perfil",
    tags: ["React", "JavaScript", "Axios", "Git"],
    imageUrl: git,
    githubUrl: "https://github.com/eduardoospino5562001/Get-GitHub-profile-data.git",
    netlifyUrl: "https://beamish-tanuki-b1b85b.netlify.app/",
  },
  {
    title: "Rick and Morthy",
    description:
      "Permite ingresar nombre de personaje y obtener toda la informacion detallada de este.",
    tags: ["React", "JavaScript", "Axios", "Git"],
    imageUrl: rick,
    githubUrl: "https://github.com/eduardoospino5562001/rick-and-morty.git",
    netlifyUrl: "https://glistening-torte-c479d8.netlify.app/",
  },
  {
    title: "Lista de tareas",
    description:
      "Permite listar tareas pendientes deacuerdo a las necesidades del usuario requiera",
    tags: ["vue 3", "Git", "JavaScript"],
    imageUrl: tarea,
    githubUrl: "https://github.com/eduardoospino5562001/Lista-de-tareas.git",
    netlifyUrl: "https://fastidious-truffle-33724b.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Vue 3",
  "Node.js",
  "Git",
  "Python",
  "PostgreSQL",
  "Python",
  "Django",
] as const;
