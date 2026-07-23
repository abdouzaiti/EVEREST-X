"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { TrendingUp, User, Calendar, Activity, GraduationCap, Award, Flame, Utensils, Clock, Check, ArrowUpRight, Loader2, Globe, Shield, ArrowRight } from "lucide-react";

export type FrameSequenceStep = {
  from: number;
  to: number;
  color: string;
  num: string;
  total: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  label: string;
  link?: string;
};

export type FrameSequenceHeroProps = {
  frameCount: number;
  framePath: (i: number) => string;
  eagerCount?: number;
  scrollHeight?: string;
  brand?: React.ReactNode;
  navLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  title?: React.ReactNode;
  subtitle?: string;
  steps: FrameSequenceStep[];
  className?: string;
};

const cx = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");

// --- LIVE HTML SCREEN MOCKUPS FOR MACBOOK DEVICEMOCKUPS ---

// Mosta Run Club Community Mockup
const MrcCommunityMockup = () => (
  <div className="h-full w-full bg-[#0d0907] p-2 sm:p-3 flex flex-col font-sans text-white text-[8px] xs:text-[9px] select-none">
    {/* Top Nav */}
    <div className="flex items-center justify-between border-b border-orange-500/10 pb-1 mb-1.5">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        <span className="font-bold tracking-wider text-[7px] text-slate-300">MOSTA RUN CLUB</span>
      </div>
      <span className="px-1.5 py-0.5 rounded-sm bg-orange-500/10 text-orange-400 font-mono text-[6px] tracking-widest">COMMUNITY APP</span>
    </div>

    {/* Metric Overview */}
    <div className="grid grid-cols-3 gap-1 mb-2">
      <div className="bg-white/5 p-1 rounded-sm border border-white/5">
        <div className="text-slate-400 text-[6px]">Membres</div>
        <div className="font-bold font-mono text-orange-400">512 coureurs</div>
      </div>
      <div className="bg-white/5 p-1 rounded-sm border border-white/5">
        <div className="text-slate-400 text-[6px]">Distance Totale</div>
        <div className="font-bold font-mono text-emerald-400">15,480 KM</div>
      </div>
      <div className="bg-white/5 p-1 rounded-sm border border-white/5">
        <div className="text-slate-400 text-[6px]">Running Club</div>
        <div className="font-bold font-mono text-slate-300">MOSTA/ORAN</div>
      </div>
    </div>

    {/* Live Chart Section */}
    <div className="bg-white/5 p-1.5 rounded-sm border border-white/5 flex-grow flex flex-col justify-between mb-2">
      <div className="flex justify-between items-center text-[6px] text-slate-400">
        <span>ACTIVITÉ COLLECTIVE (KILOMÈTRES)</span>
        <span className="text-orange-400 font-bold flex items-center gap-0.5"><TrendingUp size={6} /> +18.6%</span>
      </div>
      <div className="h-10 w-full mt-1">
        <svg viewBox="0 0 100 30" className="w-full h-full text-orange-500">
          <path
            d="M 0 28 Q 15 22 30 14 T 60 12 T 90 6 T 100 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 0 28 Q 15 22 30 14 T 60 12 T 90 6 T 100 3 L 100 30 L 0 30 Z"
            fill="url(#comm-grad)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="comm-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    {/* Bottom status */}
    <div className="flex justify-between text-[6px] text-slate-500 font-mono">
      <span>STATUT : LIVE SESSIONS</span>
      <span>READY TO RUN</span>
    </div>
  </div>
);

// Mosta Run Club Shop Mockup
const MrcShopMockup = () => (
  <div className="h-full w-full bg-[#080d16] p-2 sm:p-3 flex flex-col font-sans text-slate-100 text-[8px] xs:text-[9px] select-none">
    {/* Top Nav */}
    <div className="flex items-center justify-between border-b border-blue-900/40 pb-1 mb-1.5">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="font-bold tracking-wider text-[7px] text-blue-400">MRC SHOP</span>
      </div>
      <span className="px-1 py-0.5 rounded-sm bg-blue-500/10 text-blue-400 font-mono text-[6px]">BOUTIQUE OFFICIELLE</span>
    </div>

    {/* Grid Content */}
    <div className="grid grid-cols-12 gap-1.5 flex-grow">
      {/* Product Highlight */}
      <div className="col-span-7 bg-blue-950/20 border border-blue-500/10 rounded-sm p-1.5 flex flex-col justify-between">
        <div>
          <span className="text-[5px] text-blue-400 font-mono block">BEST SELLER</span>
          <div className="font-bold text-[9px] text-white mt-0.5">Maillot Officiel MRC 2026</div>
          <p className="text-[7px] text-slate-400 mt-0.5 flex items-center gap-1">
            Édition Limitée ultra-respirante
          </p>
        </div>
        <button className="w-full bg-blue-500 text-black py-0.5 rounded-sm text-[6px] font-bold mt-1 shadow-sm flex items-center justify-center gap-0.5">
          AJOUTER AU PANIER · 4,500 DA
        </button>
      </div>

      {/* Accessories list */}
      <div className="col-span-5 space-y-1">
        <div className="bg-white/5 p-1 rounded-sm border border-white/5">
          <span className="text-slate-400 text-[6px] block">Stock Disponible</span>
          <span className="font-bold font-mono text-emerald-400 text-[9px]">EN STOCK</span>
          <div className="h-1 bg-emerald-500/20 rounded-full overflow-hidden mt-1">
            <div className="bg-emerald-500 h-full w-[80%]" />
          </div>
        </div>
        <div className="bg-white/5 p-1 rounded-sm border border-white/5 flex justify-between items-center">
          <div>
            <span className="text-slate-400 text-[6px] block">Casquette MRC</span>
            <span className="font-bold font-mono text-white">1,800 DA</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        </div>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="mt-1.5 text-center text-[5px] text-blue-600 tracking-wider uppercase font-mono">
      LIVRAISON SUR TOUTE L'ALGÉRIE
    </div>
  </div>
);

// Les Bijoux d'Oran Mockup
const LesBijouxDoranMockup = () => (
  <div className="h-full w-full bg-[#100e0c] p-2 sm:p-3 flex flex-col font-sans text-amber-100 text-[8px] xs:text-[9px] select-none border border-amber-900/10">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-amber-950/40 pb-1 mb-1.5">
      <div className="flex items-center gap-1">
        <span className="font-serif italic tracking-widest text-[8px] text-amber-400">LES BIJOUX D'ORAN</span>
      </div>
      <span className="text-[5px] font-serif tracking-widest text-amber-600 uppercase border border-amber-900/30 px-1">HAUTE JOAILLERIE</span>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-12 gap-1.5 flex-grow">
      {/* Featured item */}
      <div className="col-span-7 flex flex-col justify-between">
        <div>
          <span className="text-[5px] text-amber-600 tracking-wider uppercase font-mono block">CRÉATION UNIQUE</span>
          <div className="font-serif font-bold text-[8px] text-amber-100 mt-0.5 italic leading-tight">
            Parure d'Or Traditionnelle Ciselée
          </div>
        </div>
        <div className="border-t border-amber-950/30 pt-1 mt-1 text-[6px] text-stone-400 font-serif leading-relaxed">
          Or pur 18 carats façonné à la main par nos maîtres artisans oranais.
        </div>
      </div>

      {/* Appointment box */}
      <div className="col-span-5 bg-amber-950/10 border border-amber-900/20 rounded-sm p-1.5 flex flex-col justify-between text-center">
        <div>
          <span className="text-[5px] text-amber-500 font-serif tracking-widest block">CONSULTATION</span>
          <span className="font-bold font-mono text-white text-[8px] mt-0.5 block">Prendre RDV</span>
          <span className="text-[5.5px] text-amber-200/70 block mt-0.5 font-mono">En Boutique</span>
        </div>
        <div className="bg-amber-500/10 text-amber-400 border border-amber-500/20 py-0.5 rounded-sm text-[5.5px] font-bold flex items-center justify-center gap-0.5 mt-1 font-mono uppercase">
          RESERVER
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-1.5 text-center text-[5px] text-amber-700 tracking-widest uppercase font-mono border-t border-amber-950/20 pt-1">
      L'ÉLÉGANCE INTEMPORELLE DU PATRIMOINE
    </div>
  </div>
);

// Ecole El Nadjah Mockup
const EcoleElNadjahMockup = () => (
  <div className="h-full w-full bg-[#0a0515] p-2 sm:p-3 flex flex-col font-sans text-purple-100 text-[8px] xs:text-[9px] select-none">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-purple-950 pb-1 mb-1.5">
      <div className="flex items-center gap-1.5">
        <GraduationCap size={8} className="text-purple-400" />
        <span className="font-bold tracking-wider text-[7px] text-purple-300">ÉCOLE EL NADJAH</span>
      </div>
      <div className="flex items-center gap-1 text-[6px] text-purple-400 font-mono">
        PORTAIL COLLABORATIF
      </div>
    </div>

    {/* Content Bento Grid */}
    <div className="grid grid-cols-2 gap-1.5 flex-grow">
      {/* Learning Progress Ring */}
      <div className="bg-purple-950/20 border border-purple-500/10 rounded-sm p-1.5 flex items-center gap-2">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-purple-950"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-purple-400"
              strokeWidth="3.5"
              strokeDasharray="95, 100"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute text-[7px] font-mono font-bold text-white">95%</div>
        </div>
        <div>
          <span className="text-[5px] text-purple-400 block font-mono">RÉUSSITE</span>
          <span className="font-bold text-[8px] text-white">Admissions</span>
        </div>
      </div>

      {/* Espace parents */}
      <div className="bg-purple-950/20 border border-purple-500/10 rounded-sm p-1.5 flex flex-col justify-between">
        <div>
          <span className="text-[5px] text-purple-400 block font-mono">ESPACE PARENTS</span>
          <div className="font-bold text-[7px] text-white truncate">Notes & Bulletins</div>
        </div>
        <div className="w-full bg-purple-500 text-black py-0.5 rounded-sm text-[6px] font-bold text-center mt-1">
          ACCÉDER
        </div>
      </div>
    </div>

    {/* Badges footer */}
    <div className="mt-1.5 flex justify-between items-center text-[6px] text-slate-500 font-mono">
      <span>100% EN LIGNE</span>
      <span className="flex items-center gap-0.5 text-purple-400"><Award size={6} /> EXCELLENCE</span>
    </div>
  </div>
);

// Everest Academy Mockup
const EverestAcademyMockup = () => (
  <div className="h-full w-full bg-[#030d1a] p-2 sm:p-3 flex flex-col font-sans text-teal-100 text-[8px] xs:text-[9px] select-none">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-teal-950 pb-1 mb-1.5">
      <div className="flex items-center gap-1.5">
        <GraduationCap size={8} className="text-teal-400" />
        <span className="font-bold tracking-wider text-[7px] text-teal-300">EVEREST ACADEMY</span>
      </div>
      <div className="flex items-center gap-1 text-[6px] text-teal-400 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" /> E-LEARNING HUB
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-12 gap-1.5 flex-grow">
      {/* Course Highlights */}
      <div className="col-span-7 bg-teal-950/20 border border-teal-500/10 rounded-sm p-1.5 flex flex-col justify-between">
        <div>
          <span className="text-[5px] text-teal-400 font-mono block">FORMATION ACTIVE</span>
          <div className="font-bold text-[8.5px] text-white mt-0.5 truncate">Dev Full-Stack & Architecture</div>
          <p className="text-[6px] text-slate-400 mt-0.5">
            Module 4 : Systèmes distribués & Sécurité
          </p>
        </div>
        <div className="w-full bg-teal-500 text-black py-0.5 rounded-sm text-[6px] font-bold text-center mt-1">
          REPRENDRE LE COURS
        </div>
      </div>

      {/* Stats list */}
      <div className="col-span-5 space-y-1">
        <div className="bg-white/5 p-1 rounded-sm border border-white/5">
          <span className="text-slate-400 text-[6.5px] block">Progression Générale</span>
          <span className="font-bold font-mono text-teal-400 text-[9px]">94%</span>
          <div className="h-1 bg-teal-500/20 rounded-full overflow-hidden mt-1">
            <div className="bg-teal-500 h-full w-[94%]" />
          </div>
        </div>
        <div className="bg-white/5 p-1 rounded-sm border border-white/5 flex justify-between items-center">
          <div>
            <span className="text-slate-400 text-[6.5px] block">Quiz Réussis</span>
            <span className="font-bold font-mono text-white">42 / 45</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-1.5 flex justify-between items-center text-[6px] text-slate-500 font-mono">
      <span>CAMPUS EN LIGNE V2</span>
      <span className="flex items-center gap-0.5 text-teal-400"><Award size={6} /> CERTIFICATION PRO</span>
    </div>
  </div>
);

// BC Clean Service Mockup
const BcCleanMockup = () => (
  <div className="h-full w-full bg-[#040c14] p-2 sm:p-3 flex flex-col font-sans text-cyan-100 text-[8px] xs:text-[9px] select-none">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-cyan-950 pb-1 mb-1.5">
      <div className="flex items-center gap-1.5">
        <Activity size={8} className="text-cyan-400" />
        <span className="font-bold tracking-wider text-[7px] text-cyan-300">BC CLEAN SERVICE</span>
      </div>
      <div className="flex items-center gap-1 text-[6px] text-cyan-400 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" /> BOOKING SYSTEM
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-12 gap-1.5 flex-grow">
      {/* Featured Service Plan */}
      <div className="col-span-7 bg-cyan-950/20 border border-cyan-500/10 rounded-sm p-1.5 flex flex-col justify-between">
        <div>
          <span className="text-[5px] text-cyan-400 font-mono block">ENTRETIEN CORPORATE</span>
          <div className="font-bold text-[8.5px] text-white mt-0.5 truncate">Nettoyage Industriel Premium</div>
          <p className="text-[6.5px] text-slate-400 mt-0.5">
            Planification automatisée hebdomadaire
          </p>
        </div>
        <button className="w-full bg-cyan-500 text-black py-0.5 rounded-sm text-[6px] font-bold mt-1 shadow-sm flex items-center justify-center gap-0.5">
          OBTENIR UN DEVIS INSTANTANÉ
        </button>
      </div>

      {/* Services list */}
      <div className="col-span-5 space-y-1">
        <div className="bg-white/5 p-1 rounded-sm border border-white/5">
          <span className="text-slate-400 text-[6px] block">Rétention Client</span>
          <span className="font-bold font-mono text-cyan-400 text-[9px]">95%</span>
          <div className="h-1 bg-cyan-500/20 rounded-full overflow-hidden mt-1">
            <div className="bg-cyan-500 h-full w-[95%]" />
          </div>
        </div>
        <div className="bg-white/5 p-1 rounded-sm border border-white/5 flex justify-between items-center">
          <div>
            <span className="text-slate-400 text-[6px] block">Disponibilité</span>
            <span className="font-bold font-mono text-white">24h/7j - Urgent</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-1.5 flex justify-between items-center text-[5.5px] text-slate-500 font-mono">
      <span>BC CLEAN CORE APPS</span>
      <span className="text-cyan-400 font-bold uppercase">SERVICE FIABLE & GARANTI</span>
    </div>
  </div>
);

// Rahi9 Logistics Mockup
const Rahi9Mockup = () => (
  <div className="h-full w-full bg-[#0a0705] p-2 sm:p-3 flex flex-col font-sans text-amber-100 text-[8px] xs:text-[9px] select-none">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-amber-950/40 pb-1 mb-1.5">
      <div className="flex items-center gap-1.5">
        <TrendingUp size={8} className="text-amber-500" />
        <span className="font-bold tracking-wider text-[7px] text-amber-400">RAHI9 LOGISTICS</span>
      </div>
      <div className="flex items-center gap-1 text-[6px] text-amber-500 font-mono uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Tracking Live
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-12 gap-1.5 flex-grow">
      {/* Route tracker card */}
      <div className="col-span-7 bg-amber-950/20 border border-amber-500/10 rounded-sm p-1.5 flex flex-col justify-between">
        <div>
          <span className="text-[5px] text-amber-500 font-mono block">COLIS EN COURS #RH-9482</span>
          <div className="font-bold text-[8.5px] text-white mt-0.5 truncate">Oran ➔ Alger Express</div>
          <p className="text-[6.5px] text-slate-400 mt-0.5">
            Arrivée estimée : 14:45 (Aujourd'hui)
          </p>
        </div>
        {/* Dynamic mini route SVG */}
        <div className="h-4 w-full bg-black/30 rounded-sm border border-white/5 flex items-center p-1">
          <svg viewBox="0 0 100 10" className="w-full h-full text-amber-500">
            <path d="M 5 5 L 95 5" stroke="#1f1a16" strokeWidth="2" strokeLinecap="round" />
            <path d="M 5 5 L 65 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="5" cy="5" r="2.5" fill="#f59e0b" />
            <circle cx="65" cy="5" r="2.5" fill="#f59e0b" className="animate-ping" />
            <circle cx="65" cy="5" r="1.8" fill="#ffffff" />
            <circle cx="95" cy="5" r="2.5" fill="#2d2218" />
          </svg>
        </div>
      </div>

      {/* Analytics stats */}
      <div className="col-span-5 space-y-1">
        <div className="bg-white/5 p-1 rounded-sm border border-white/5">
          <span className="text-slate-400 text-[6px] block">Précision Route</span>
          <span className="font-bold font-mono text-amber-400 text-[9px]">99.2%</span>
        </div>
        <div className="bg-white/5 p-1 rounded-sm border border-white/5 flex justify-between items-center">
          <div>
            <span className="text-slate-400 text-[6px] block">Livreurs Actifs</span>
            <span className="font-bold font-mono text-white">48 en route</span>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-1.5 flex justify-between items-center text-[5px] text-slate-500 font-mono">
      <span>SOCIÉTÉ DE LIVRAISON RAHI9</span>
      <span className="text-amber-500 font-mono">READY</span>
    </div>
  </div>
);

// Fallback Default Mockup
const DefaultMockup = () => (
  <div className="h-full w-full bg-[#030712] p-3 flex flex-col items-center justify-center text-center">
    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-blue-400 text-lg shadow-inner mb-1.5">✦</div>
    <div className="font-sans font-bold text-[9px] tracking-wide text-white">EVERESTX PREMIUM APPS</div>
    <div className="font-mono text-[6px] text-slate-500 mt-1">SECURE PORTFOLIO GATEWAY</div>
  </div>
);

// --- REAL VERCEL PROJECT SCREENSHOT RENDERING COMPONENT ---

interface RealProjectScreenshotProps {
  url: string;
  title: string;
}

const RealProjectScreenshot = ({ url, title }: RealProjectScreenshotProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Normalize display domain (e.g. mrc-shop.vercel.app)
  const displayUrl = url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  // thum.io delivers fast, optimized, free, and cached real-time website screenshots.
  const screenshotUrl = `https://image.thum.io/get/width/1024/crop/800/maxAge/12/${url}`;
  const fallbackScreenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;

  const [currentSrc, setCurrentSrc] = useState(screenshotUrl);

  const handleImageError = () => {
    if (currentSrc !== fallbackScreenshotUrl) {
      setCurrentSrc(fallbackScreenshotUrl);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full bg-slate-950 flex flex-col font-sans select-none overflow-hidden relative">
      {/* Mock Browser Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Window controls */}
        <div className="flex gap-1 shrink-0">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF5F56]" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFBD2E]" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#27C93F]" />
        </div>
        
        {/* Address bar */}
        <div className="flex-grow max-w-[200px] sm:max-w-md mx-auto bg-slate-950/80 rounded-md py-0.5 px-1.5 sm:px-2 border border-slate-800 flex items-center justify-between text-[5px] sm:text-[6.5px] text-slate-400 font-mono">
          <div className="flex items-center gap-1 truncate max-w-[85%]">
            <Shield size={6} className="text-emerald-500 shrink-0" />
            <span className="text-emerald-500 font-bold shrink-0">https://</span>
            <span className="truncate">{displayUrl}</span>
          </div>
          <Globe size={6} className="text-slate-500 shrink-0" />
        </div>

        {/* Live indicator badge */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0 bg-emerald-500/10 border border-emerald-500/20 px-1 py-0.5 rounded text-[4.5px] sm:text-[5px] text-emerald-400 font-bold font-mono uppercase tracking-widest">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden xs:inline">Vercel Live</span>
        </div>
      </div>

      {/* Screenshot Container */}
      <div className="flex-grow w-full relative bg-slate-950 overflow-hidden group">
        {loading && (
          <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center gap-1.5 z-20">
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-spin" />
            <span className="text-[5.5px] sm:text-[6.5px] text-slate-400 font-mono tracking-widest uppercase">PREVIEWING SITE...</span>
          </div>
        )}

        {error ? (
          <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-3 text-center z-20">
            <Globe className="w-5 h-5 text-slate-600 mb-1" />
            <div className="font-bold text-[7.5px] sm:text-[8px] text-slate-300 truncate max-w-full">{title}</div>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-1.5 px-2 py-0.5 bg-blue-600 text-white text-[6px] font-bold rounded hover:bg-blue-500 flex items-center gap-0.5"
            >
              Ouvrir le Site <ArrowRight size={5} />
            </a>
          </div>
        ) : (
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={currentSrc}
              alt={title}
              onLoad={() => setLoading(false)}
              onError={handleImageError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-[6000ms] ease-in-out group-hover:scale-105"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
            
            {/* Hover visual visit badge */}
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-1.5 right-1.5 bg-black/85 hover:bg-blue-600 text-white font-mono text-[4.5px] sm:text-[5px] font-bold px-1 py-0.5 rounded border border-white/10 flex items-center gap-0.5 transition-colors duration-200 z-10 shadow-lg cursor-pointer"
            >
              <span>VISITER</span>
              <ArrowRight size={4.5} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// --- VECTOR MACBOOK DEVICE WRAPPER ---

interface MacbookVectorProps {
  color: string;
  projectIndex: number;
  facing: "front" | "back";
  glow?: boolean;
}

const MacbookVector = ({ color, projectIndex, facing, glow = false }: MacbookVectorProps) => {
  // 1. BACK LID FACING (Lid closed facing user)
  if (facing === "back") {
    let bgGradient = "from-slate-700 via-slate-800 to-slate-900"; // midnight
    let shadowColor = "rgba(15, 23, 42, 0.4)";
    let logoGlow = "text-blue-400 shadow-blue-500/30";
    
    if (color === "silver") {
      bgGradient = "from-slate-200 via-slate-300 to-slate-400";
      shadowColor = "rgba(100, 116, 139, 0.3)";
      logoGlow = "text-slate-500 shadow-slate-400/20";
    } else if (color === "blue") {
      bgGradient = "from-blue-800 via-slate-900 to-slate-950";
      shadowColor = "rgba(30, 58, 138, 0.4)";
      logoGlow = "text-blue-400 shadow-blue-400/30";
    } else if (color === "pink") {
      bgGradient = "from-pink-300 via-pink-400 to-pink-500";
      shadowColor = "rgba(236, 72, 153, 0.3)";
      logoGlow = "text-pink-500 shadow-pink-500/20";
    } else if (color === "yellow") {
      bgGradient = "from-amber-200 via-yellow-400 to-yellow-500";
      shadowColor = "rgba(234, 179, 8, 0.3)";
      logoGlow = "text-amber-500 shadow-yellow-500/20";
    }

    return (
      <div
        className={`w-full h-full rounded-[24px] bg-gradient-to-b ${bgGradient} p-[3px] flex items-center justify-center relative border border-white/10`}
        style={{ boxShadow: `0 20px 40px -10px ${shadowColor}` }}
      >
        {/* Sleek metal inner ring reflection */}
        <div className="absolute inset-1.5 rounded-[20px] border border-white/5 pointer-events-none" />
        
        {/* Glowing Central Star logo */}
        <div className={`relative w-12 h-12 rounded-full bg-black/15 flex items-center justify-center backdrop-blur-sm ${glow ? 'animate-pulse' : ''}`}>
          <span className={`text-2xl font-bold select-none ${logoGlow}`}>✦</span>
        </div>
      </div>
    );
  }

  // 2. FRONT OPEN FACING (Lid open showing active dashboard mockups)
  return (
    <div className="w-full h-full flex flex-col justify-between relative select-none">
      {/* Upper Display Lid with Rounded Bezel */}
      <div className="w-full aspect-[16/10] bg-[#0c0c0e] rounded-[18px] border-[5px] sm:border-[6px] border-[#1e1e1f] relative shadow-2xl overflow-hidden flex flex-col">
        {/* Anti-glare screen highlight */}
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

        {/* Webcam Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] sm:w-[90px] h-[9px] sm:h-[11px] bg-[#1e1e1f] rounded-b-[6px] z-30 flex items-center justify-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-blue-500/70" /> {/* Camera Lens */}
          <span className="w-0.5 h-0.5 rounded-full bg-emerald-500/60 animate-pulse" /> {/* Active LED */}
        </div>

        {/* Live Mockup Router */}
        <div className="w-full h-full overflow-hidden flex-grow relative text-white bg-black">
          {projectIndex === 0 && <RealProjectScreenshot url="https://mrc-community.vercel.app/" title="Mosta Run Club Community" />}
          {projectIndex === 1 && <RealProjectScreenshot url="https://mrc-shop.vercel.app/" title="Mosta Run Club Shop" />}
          {projectIndex === 2 && <RealProjectScreenshot url="https://bidjou.vercel.app/" title="Les Bijoux d'Oran" />}
          {projectIndex === 3 && <RealProjectScreenshot url="https://ecole-nadjah.vercel.app/" title="École El Nadjah" />}
          {projectIndex === 4 && <RealProjectScreenshot url="https://everest-academy-smoky.vercel.app/" title="Everest Academy" />}
          {projectIndex === 5 && <RealProjectScreenshot url="https://bc-clean-service.vercel.app/" title="BC Clean Service" />}
          {projectIndex === 6 && <RealProjectScreenshot url="https://rahiq-murex.vercel.app/" title="Rahi9 Logistics" />}
          {projectIndex >= 7 && <DefaultMockup />}
        </div>
      </div>

      {/* Perspective Aluminum Base Panel (Keyboard and hinge deck) */}
      <div className="w-[106%] -ml-[3%] h-[14px] relative z-20 -mt-[4px] flex flex-col items-center">
        {/* Aluminum Deck Top Layer */}
        <div className={`w-full h-[6px] rounded-t-[3.5px] bg-gradient-to-b ${color === 'silver' ? 'from-slate-200 via-slate-300 to-slate-400' : 'from-slate-700 via-slate-800 to-slate-900'} border-t border-white/10`} />
        {/* Front shadow lip with lip indent */}
        <div className="w-full h-[8px] rounded-b-[7px] bg-black/60 relative flex justify-center">
          {/* Display opening thumb slot notch */}
          <div className="w-[50px] sm:w-[70px] h-[3px] bg-black/80 rounded-b-[3px] -mt-[4px]" />
        </div>
      </div>
    </div>
  );
};

// --- CORE HERO COMPONENT ---

export function FrameSequenceHero({
  frameCount,
  framePath,
  eagerCount = 140,
  scrollHeight = "600vh",
  brand,
  navLinks = [],
  ctaLabel,
  ctaHref = "#",
  title,
  subtitle,
  steps,
  className,
}: FrameSequenceHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const spacerRef = useRef<HTMLDivElement | null>(null);
  const [subHidden, setSubHidden] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  // Framer Motion scroll and spring hooks for ultra-fluid MacBook transitions
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 22 });

  useEffect(() => {
    const updateStates = (latest: number) => {
      setProgress(latest);
      setSubHidden(latest > 0.05);

      let idx = -1;
      for (let i = 0; i < steps.length; i++) {
        const s = steps[i];
        if (latest >= s.from && latest < s.to) {
          idx = i;
          break;
        }
      }
      if (idx === -1) {
        if (latest >= 0.9) {
          idx = steps.length - 1;
        } else {
          idx = 0;
        }
      }
      setActiveIdx(idx);
    };

    // Initialize with current value
    updateStates(smoothProgress.get());

    // Subscribe to changes smoothly
    const unsubscribe = smoothProgress.on("change", updateStates);
    return () => unsubscribe();
  }, [smoothProgress, steps]);

  // 3D perspective transforms for the 7 floating MacBook layers
  // Stack layouts for Scroll Progress Progress (0 -> 1)
  
  // 1. Yellow Laptop (Mosta Run Club Community - Index 0)
  const yellowY = useTransform(smoothProgress, [0, 0.14, 0.20], [0, 0, -320]);
  const yellowScale = useTransform(smoothProgress, [0, 0.14, 0.20], [1, 1, 1.25]);
  const yellowRotate = useTransform(smoothProgress, [0, 0.14, 0.20], [0, 0, -10]);
  const yellowOpacity = useTransform(smoothProgress, [0, 0.14, 0.20, 1], [1, 1, 0, 0]);

  // 2. Soft Pink Laptop (Mosta Run Club Shop - Index 1)
  const pinkY = useTransform(smoothProgress, [0, 0.14, 0.28, 0.34], [140, 0, 0, -320]);
  const pinkScale = useTransform(smoothProgress, [0, 0.14, 0.28, 0.34], [0.88, 1, 1, 1.25]);
  const pinkRotate = useTransform(smoothProgress, [0, 0.14, 0.28, 0.34], [-12, 0, 0, 10]);
  const pinkOpacity = useTransform(smoothProgress, [0, 0.14, 0.28, 0.34, 1], [0.55, 1, 1, 0, 0]);

  // 3. Deep Blue Laptop (Les Bijoux d'Oran - Index 2)
  const blueY = useTransform(smoothProgress, [0, 0.14, 0.28, 0.43, 0.49], [220, 150, 0, 0, -320]);
  const blueScale = useTransform(smoothProgress, [0, 0.14, 0.28, 0.43, 0.49], [0.8, 0.88, 1, 1, 1.25]);
  const blueRotate = useTransform(smoothProgress, [0, 0.14, 0.28, 0.43, 0.49], [-18, -12, 0, 0, -10]);
  const blueOpacity = useTransform(smoothProgress, [0, 0.14, 0.28, 0.43, 0.49, 1], [0.35, 0.35, 1, 1, 0, 0]);

  // 4. Silver Laptop (École El Nadjah - Index 3)
  const silverY = useTransform(smoothProgress, [0, 0.28, 0.43, 0.57, 0.63], [290, 220, 150, 0, -320]);
  const silverScale = useTransform(smoothProgress, [0, 0.28, 0.43, 0.57, 0.63], [0.74, 0.8, 0.88, 1, 1.25]);
  const silverRotate = useTransform(smoothProgress, [0, 0.28, 0.43, 0.57, 0.63], [-22, -18, -12, 0, 10]);
  const silverOpacity = useTransform(smoothProgress, [0, 0.28, 0.43, 0.57, 0.63, 1], [0.2, 0.2, 0.35, 1, 0, 0]);

  // 5. Midnight Laptop (Everest Academy - Index 4)
  const midY = useTransform(smoothProgress, [0, 0.43, 0.57, 0.71, 0.77], [350, 290, 220, 0, -320]);
  const midScale = useTransform(smoothProgress, [0, 0.43, 0.57, 0.71, 0.77], [0.68, 0.74, 0.8, 1, 1.25]);
  const midRotate = useTransform(smoothProgress, [0, 0.43, 0.57, 0.71, 0.77], [-26, -22, -18, 0, -10]);
  const midOpacity = useTransform(smoothProgress, [0, 0.43, 0.57, 0.71, 0.77, 1], [0.15, 0.15, 0.25, 1, 0, 0]);

  // 6. Yellow Laptop 2 (BC Clean Service - Index 5)
  const yellow2Y = useTransform(smoothProgress, [0, 0.57, 0.71, 0.86, 0.92], [410, 350, 290, 0, -320]);
  const yellow2Scale = useTransform(smoothProgress, [0, 0.57, 0.71, 0.86, 0.92], [0.62, 0.68, 0.74, 1, 1.25]);
  const yellow2Rotate = useTransform(smoothProgress, [0, 0.57, 0.71, 0.86, 0.92], [-30, -26, -22, 0, 10]);
  const yellow2Opacity = useTransform(smoothProgress, [0, 0.57, 0.71, 0.86, 0.92, 1], [0.1, 0.1, 0.15, 1, 0, 0]);

  // 7. Midnight Laptop 2 (Rahi9 - Index 6)
  const mid2Y = useTransform(smoothProgress, [0, 0.71, 0.86, 1], [470, 410, 350, 0]);
  const mid2Scale = useTransform(smoothProgress, [0, 0.71, 0.86, 1], [0.56, 0.62, 0.68, 1]);
  const mid2Rotate = useTransform(smoothProgress, [0, 0.71, 0.86, 1], [-34, -30, -26, 0]);
  const mid2Opacity = useTransform(smoothProgress, [0, 0.71, 0.86, 1], [0.05, 0.05, 0.15, 1]);

  return (
    // Set direct continuous light background color on the entire scroll track container
    <div
      ref={containerRef}
      className={cx("fsh-root relative w-full bg-[#f6f7f9] text-slate-900 border-b border-brand-secondary/40", className)}
      style={{
        background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f6f7f9 100%)",
      }}
    >
      {/* Transparent overlay for scroll track */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Pinned stage — always full viewport, background matched to avoid voids */}
      <div
        className="fsh-stage w-full h-screen sticky top-0 flex flex-col items-center justify-between py-6 sm:py-8 px-4 sm:px-6 overflow-hidden"
        style={{
          background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f6f7f9 100%)",
        }}
      >
        {/* Celestial Copy (Title / Subtitle at top of sticky stage) */}
        {(title || subtitle) && (
          <div className="fsh-copy flex flex-col items-center text-center mt-12 z-20 pointer-events-none">
            {title && (
              <h1 className="fsh-title text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-slate-900">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className={cx("fsh-sub text-sm sm:text-lg text-slate-500 font-medium tracking-wide mt-2 transition-all duration-300", subHidden && "fsh-sub-hidden opacity-0")}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* 3D Laptop Perspective Assembly Stack */}
        <div className="fsh-canvas-wrap relative w-full flex-grow flex items-center justify-center max-h-[46vh] z-10 overflow-visible mt-4 mb-16">
          {/* Layer 7: Midnight MacBook 2 (Rahi9 - Index 6) */}
          <motion.div
            style={{
              y: mid2Y,
              scale: mid2Scale,
              rotate: mid2Rotate,
              opacity: mid2Opacity,
              zIndex: 1,
            }}
            className="absolute w-[290px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[640px] aspect-[84/54] transform-gpu origin-center pointer-events-none"
          >
            <MacbookVector color="midnight" projectIndex={6} facing={activeIdx >= 6 ? "front" : "back"} />
          </motion.div>

          {/* Layer 6: Yellow MacBook 2 (BC Clean Service - Index 5) */}
          <motion.div
            style={{
              y: yellow2Y,
              scale: yellow2Scale,
              rotate: yellow2Rotate,
              opacity: yellow2Opacity,
              zIndex: 2,
            }}
            className="absolute w-[290px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[640px] aspect-[84/54] transform-gpu origin-center pointer-events-none"
          >
            <MacbookVector color="pink" projectIndex={5} facing={activeIdx >= 5 ? "front" : "back"} />
          </motion.div>

          {/* Layer 5: Midnight MacBook (Everest Academy - Index 4) */}
          <motion.div
            style={{
              y: midY,
              scale: midScale,
              rotate: midRotate,
              opacity: midOpacity,
              zIndex: 3,
            }}
            className="absolute w-[290px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[640px] aspect-[84/54] transform-gpu origin-center pointer-events-none"
          >
            <MacbookVector color="midnight" projectIndex={4} facing={activeIdx >= 4 ? "front" : "back"} />
          </motion.div>

          {/* Layer 4: Silver MacBook (École El Nadjah - Index 3) */}
          <motion.div
            style={{
              y: silverY,
              scale: silverScale,
              rotate: silverRotate,
              opacity: silverOpacity,
              zIndex: 4,
            }}
            className="absolute w-[290px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[640px] aspect-[84/54] transform-gpu origin-center pointer-events-none"
          >
            <MacbookVector color="silver" projectIndex={3} facing={activeIdx >= 3 ? "front" : "back"} />
          </motion.div>

          {/* Layer 3: Deep Blue MacBook (Les Bijoux d'Oran - Index 2) */}
          <motion.div
            style={{
              y: blueY,
              scale: blueScale,
              rotate: blueRotate,
              opacity: blueOpacity,
              zIndex: 5,
            }}
            className="absolute w-[290px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[640px] aspect-[84/54] transform-gpu origin-center pointer-events-none"
          >
            <MacbookVector color="blue" projectIndex={2} facing={activeIdx >= 2 ? "front" : "back"} />
          </motion.div>

          {/* Layer 2: Soft Pink MacBook (Mosta Run Club Shop - Index 1) */}
          <motion.div
            style={{
              y: pinkY,
              scale: pinkScale,
              rotate: pinkRotate,
              opacity: pinkOpacity,
              zIndex: 6,
            }}
            className="absolute w-[290px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[640px] aspect-[84/54] transform-gpu origin-center pointer-events-none"
          >
            <MacbookVector color="pink" projectIndex={1} facing={activeIdx >= 1 ? "front" : "back"} />
          </motion.div>

          {/* Layer 1: Yellow MacBook (Mosta Run Club Community - Index 0) */}
          <motion.div
            style={{
              y: yellowY,
              scale: yellowScale,
              rotate: yellowRotate,
              opacity: yellowOpacity,
              zIndex: 7,
            }}
            className="absolute w-[290px] xs:w-[380px] sm:w-[480px] md:w-[580px] lg:w-[640px] aspect-[84/54] transform-gpu origin-center pointer-events-none"
          >
            <MacbookVector color="yellow" projectIndex={0} facing={activeIdx >= 0 ? "front" : "back"} />
          </motion.div>
        </div>

        {/* Dynamic Morphing Card (Bottom-Left Side Panel exactly like screenshot!) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex justify-start items-end z-30 select-none pb-4 pointer-events-none">
          <div className="w-full sm:w-[400px] pointer-events-auto">
            <AnimatePresence mode="wait">
              {steps[activeIdx] && (
                <motion.article
                  key={activeIdx}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  style={{ ["--c" as any]: steps[activeIdx].color }}
                  className="bg-white/95 rounded-[24px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-200/80 backdrop-blur-md flex flex-col"
                >
                  <div className="fsh-card-inner">
                    <div className="fsh-card-head flex justify-between items-center mb-4">
                      <span className="fsh-card-num font-mono text-xs font-semibold text-slate-500">
                        <strong className="text-slate-900 text-sm">{steps[activeIdx].num}</strong> / {steps[activeIdx].total}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs shadow-sm font-bold">
                        ✦
                      </span>
                    </div>

                    <h3 className="fsh-card-title text-xl sm:text-2xl font-sans font-extrabold text-slate-900 tracking-tight mb-2">
                      {steps[activeIdx].title}
                    </h3>
                    <p className="fsh-card-desc text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                      {steps[activeIdx].description}
                    </p>

                    {steps[activeIdx].link && (
                      <div className="mb-6 -mt-3">
                        <a
                          href={steps[activeIdx].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-950 text-white rounded-xl text-xs font-semibold hover:bg-slate-850 transition-all duration-200 shadow-sm hover:shadow"
                        >
                          Visiter le site
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    )}

                    <div className="fsh-card-foot flex items-center gap-4">
                      {/* Timeline Horizontal Progress Ticks */}
                      <div className="fsh-ticks flex-grow h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-1 p-[2px]">
                        {steps.map((_, j) => {
                          const done = j < activeIdx;
                          const cur = j === activeIdx;
                          return (
                            <i key={j} className="fsh-tick flex-1 h-full rounded-full overflow-hidden relative">
                              <span
                                className="block h-full bg-slate-950 rounded-full"
                                style={{
                                  transform: `scaleX(${done ? 1 : cur ? 1 : 0})`,
                                  transformOrigin: "left center",
                                  transition: done ? "none" : "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                              />
                            </i>
                          );
                        })}
                      </div>
                      <span className="fsh-card-label font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {steps[activeIdx].label}
                      </span>
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Global horizontal linear progress bar at very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-200/30">
          <span
            className="block h-full bg-slate-950 transition-all duration-75"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Empty scroll spacer: gives the page its scroll distance */}
      <div ref={spacerRef} className="fsh-spacer" style={{ height: scrollHeight }} />
    </div>
  );
}
