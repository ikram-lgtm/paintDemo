"use client";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "motion/react";
export function ArrowLink({ href, label = "En savoir plus", className = "" }:
  { href: string; label?: string; className?: string }) {
  return <motion.a href={href} whileHover={{ scale: 1.06, rotate: -5 }} whileTap={{ scale: .94 }}
    className={`round-arrow ${className}`} aria-label={label}><LuArrowUpRight size={23}/></motion.a>;
}
