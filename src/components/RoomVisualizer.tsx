"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Layout, Palette, Sun, Moon, Maximize2, Info, Send, ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  {
    id: "living",
    name: "Living Room",
    nameAm: "መኖሪያ ክፍል",
    image: "/images/hero.png",
    hotspots: [
      { x: 35, y: 55, item: "Oslo Sectional Sofa", price: "ETB 145,000", inStock: true },
      { x: 65, y: 70, item: "Acacia Coffee Table", price: "ETB 28,000", inStock: true },
      { x: 80, y: 45, item: "Arc Floor Lamp", price: "ETB 12,000", inStock: false },
    ],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    nameAm: "መኝታ ክፍል",
    image: "/images/bedroom.png",
    hotspots: [
      { x: 48, y: 50, item: "Heritage King Bed", price: "ETB 98,000", inStock: true },
      { x: 20, y: 60, item: "Walnut Nightstand", price: "ETB 18,000", inStock: true },
      { x: 75, y: 40, item: "Bole Wardrobe", price: "ETB 65,000", inStock: true },
    ],
  },
  {
    id: "office",
    name: "Executive Office",
    nameAm: "ቢሮ",
    image: "/images/office.png",
    hotspots: [
      { x: 50, y: 55, item: "Architect Desk Pro", price: "ETB 55,000", inStock: true },
      { x: 25, y: 50, item: "Ergonomic Chair", price: "ETB 32,000", inStock: true },
      { x: 80, y: 35, item: "Modular Bookshelf", price: "ETB 40,000", inStock: false },
    ],
  },
  {
    id: "dining",
    name: "Dining Room",
    nameAm: "ምግብ ክፍል",
    image: "/images/dining.png",
    hotspots: [
      { x: 50, y: 60, item: "Zen Dining Table", price: "ETB 82,000", inStock: true },
      { x: 30, y: 65, item: "Wicker Side Chair ×6", price: "ETB 48,000", inStock: true },
    ],
  },
];

const palettes = [
  { id: "ivory", name: "Natural Ivory", color: "#F5F0E8", text: "#122620" },
  { id: "obsidian", name: "Obsidian", color: "#1A1A1A", text: "#FDFCF8" },
  { id: "sage", name: "Sage Garden", color: "#8FB9A8", text: "#122620" },
  { id: "gold", name: "Heritage Gold", color: "#C5A039", text: "#fff" },
  { id: "terracotta", name: "Terracotta", color: "#C17B5A", text: "#fff" },
  { id: "slate", name: "Steel Slate", color: "#4A5568", text: "#fff" },
];

const lightingModes = ["Natural", "Evening", "Studio"];

export default function RoomVisualizer() {
  const [room, setRoom] = useState(rooms[0]);
  const [palette, setPalette] = useState(palettes[0]);
  const [lighting, setLighting] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const lightingStyles = [
    { filter: "brightness(1)", overlay: "transparent" },
    { filter: "brightness(0.7) sepia(0.2)", overlay: "rgba(255,180,80,0.08)" },
    { filter: "brightness(1.1) contrast(1.05)", overlay: "transparent" },
  ];

  const changeRoom = (r: typeof rooms[0]) => {
    setIsTransitioning(true);
    setActiveHotspot(null);
    setTimeout(() => { setRoom(r); setIsTransitioning(false); }, 400);
  };

  return (
    <section id="visualizer" className="section-padding bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">Interactive Design</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-emerald">
            Room <span className="text-gradient">Visualizer</span>
          </h2>
          <p className="text-emerald/40 mt-4 max-w-lg">Click any glowing hotspot to discover the furniture in the scene. Adjust lighting and color palette in real-time.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left Controls */}
          <div className="lg:col-span-3 space-y-6">

            {/* Room Selector */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/30 mb-3 flex items-center gap-2"><Layout size={12} /> Room</p>
              <div className="grid grid-cols-2 gap-2">
                {rooms.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => changeRoom(r)}
                    className={`relative aspect-video rounded-2xl overflow-hidden border-2 transition-all ${room.id === r.id ? "border-gold shadow-lg shadow-gold/10 scale-[1.03]" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <Image src={r.image} alt={r.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-emerald/40 flex items-end p-2">
                      <span className="text-[8px] font-black text-white uppercase tracking-widest">{r.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Palette */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/30 mb-3 flex items-center gap-2"><Palette size={12} /> Palette</p>
              <div className="grid grid-cols-3 gap-2">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPalette(p)}
                    title={p.name}
                    style={{ backgroundColor: p.color }}
                    className={`h-10 rounded-xl border-2 transition-all ${palette.id === p.id ? "border-emerald scale-110 shadow-md" : "border-transparent"}`}
                  />
                ))}
              </div>
              <p className="text-[10px] font-bold text-emerald/40 mt-2">{palette.name}</p>
            </div>

            {/* Lighting */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/30 mb-3 flex items-center gap-2">
                {lighting === 1 ? <Moon size={12} /> : <Sun size={12} />} Lighting
              </p>
              <div className="flex gap-2">
                {lightingModes.map((mode, i) => (
                  <button key={mode} onClick={() => setLighting(i)}
                    className={`flex-1 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${lighting === i ? "bg-emerald text-white" : "bg-white text-emerald/40 hover:bg-emerald/5"}`}>
                    {mode}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Main Viewer */}
          <div className="lg:col-span-9">
            <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-sand shadow-2xl border border-emerald/5">

              {/* Image */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
                style={{ filter: lightingStyles[lighting].filter }}
              >
                <Image src={room.image} alt={room.name} fill className="object-cover" priority />
              </div>

              {/* Palette tint overlay */}
              <div
                className="absolute inset-0 mix-blend-color transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: palette.color, opacity: 0.15 }}
              />
              {/* Lighting overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500"
                style={{ backgroundColor: lightingStyles[lighting].overlay }}
              />

              {/* Hotspots */}
              {room.hotspots.map((hs, i) => (
                <div key={i} className="absolute" style={{ left: `${hs.x}%`, top: `${hs.y}%` }}>
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                    className="relative group"
                  >
                    <span className="absolute inset-0 w-5 h-5 bg-white/40 rounded-full animate-ping" />
                    <span className="relative flex w-5 h-5 items-center justify-center bg-white rounded-full shadow-lg border-2 border-gold">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                    </span>
                  </button>

                  {/* Hotspot tooltip */}
                  {activeHotspot === i && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 bg-white rounded-2xl shadow-2xl border border-emerald/5 p-4 z-20">
                      <div className="text-[9px] font-black text-gold uppercase tracking-widest mb-1">Featured Item</div>
                      <div className="font-display font-bold text-emerald text-sm mb-2">{hs.item}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black text-emerald">{hs.price}</span>
                        <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${hs.inStock ? "bg-emerald/10 text-emerald" : "bg-red-50 text-red-500"}`}>
                          {hs.inStock ? "In Stock" : "Order Only"}
                        </span>
                      </div>
                      <a
                        href={`https://t.me/taologos?text=I'm interested in: ${encodeURIComponent(hs.item)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 w-full py-2 bg-emerald text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold transition-all"
                      >
                        <Send size={10} /> Inquire on Telegram
                      </a>
                    </div>
                  )}
                </div>
              ))}

              {/* Status bar */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 backdrop-blur-xl px-5 py-2 rounded-full border border-emerald/5 shadow-lg">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                <span className="text-[9px] font-black text-emerald uppercase tracking-widest">{room.name} · {palette.name} · {lightingModes[lighting]}</span>
                <Info size={12} className="text-emerald/30" />
              </div>

              {/* Room navigation arrows */}
              <button onClick={() => changeRoom(rooms[(rooms.indexOf(room) - 1 + rooms.length) % rooms.length])}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all shadow-lg border border-emerald/5">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => changeRoom(rooms[(rooms.indexOf(room) + 1) % rooms.length])}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-emerald hover:bg-gold hover:text-white transition-all shadow-lg border border-emerald/5">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Feature tags */}
            <div className="mt-5 flex flex-wrap gap-3">
              {["4 Room Types", "6 Color Palettes", "3 Lighting Modes", "Clickable Hotspots", "Live Overlay"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white border border-emerald/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-emerald/40 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
