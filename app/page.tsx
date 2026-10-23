"use client";

import { useState } from "react";

const filters = [
  {
    name: "Grayscale",
    description: "Turn color into timeless monochrome.",
    icon: "◐",
  },
  {
    name: "Invert colors",
    description: "Flip every shade for a bold new look.",
    icon: "◒",
  },
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1020] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <header className="flex items-center justify-between py-5 sm:py-7">
          <div>
            <span className="text-xl font-bold text-[#A78BFA]">Pixel</span>
            <span className="text-xl font-bold text-[#22D3EE]">Lab</span>
          </div>
          <span className="hidden text-sm text-slate-400 sm:block">
            Image tools made simple
          </span>
        </header>

        <section className="py-10 text-center sm:py-14 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">
            Simple image editing
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Transform your images with{" "}
            <span className="text-[#A78BFA]">PixelLab</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Upload an image and experiment with simple visual filters directly
            in your browser.
          </p>
        </section>

        <section className="mx-auto max-w-3xl">
          <div className="rounded-2xl border-2 border-dashed border-slate-600 bg-[#171D31] p-7 text-center transition-colors duration-300 hover:border-[#22D3EE]/70 sm:p-10 lg:p-12">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#22D3EE]/10">
              <span className="text-2xl text-[#22D3EE]">↑</span>
            </div>
            <h2 className="text-xl font-semibold">Upload an image</h2>
            <p className="mt-2 text-sm text-slate-400">
              Drag and drop an image here, or choose a file
            </p>
            <button type="button" className="mt-6 rounded-lg bg-[#A78BFA] px-5 py-2.5 font-semibold text-[#0B1020] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#22D3EE] hover:shadow-lg hover:shadow-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] active:translate-y-0">
              Choose image
            </button>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl sm:mt-16" aria-labelledby="filters-heading">
          <div className="mb-6 flex flex-col items-center gap-2 text-center sm:mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">Quick filters</p>
            <h2 id="filters-heading" className="text-2xl font-bold sm:text-3xl">
              Give your image a new perspective
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {filters.map((filter) => {
              const isSelected = selectedFilter === filter.name;
              return (
                <button
                  key={filter.name}
                  type="button"
                  onClick={() => setSelectedFilter(isSelected ? null : filter.name)}
                  aria-pressed={isSelected}
                  className={`group relative flex min-h-52 flex-col overflow-hidden rounded-2xl border bg-[#171D31] p-6 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] sm:p-7 ${isSelected ? "border-[#22D3EE] shadow-lg shadow-cyan-950/70" : "border-slate-700 hover:-translate-y-1 hover:border-[#A78BFA] hover:shadow-xl hover:shadow-indigo-950/50"}`}
                >
                  <span aria-hidden="true" className="absolute -right-5 -top-7 text-9xl font-black leading-none text-slate-100/[0.04] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">{filter.icon}</span>
                  <span className="mb-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#A78BFA]/15 text-2xl text-[#A78BFA] transition-colors duration-300 group-hover:bg-[#22D3EE]/15 group-hover:text-[#22D3EE]">{filter.icon}</span>
                  <span className="relative mt-8 block">
                    <span className="block text-lg font-semibold">{filter.name}</span>
                    <span className="mt-1.5 block text-sm leading-6 text-slate-400">{filter.description}</span>
                  </span>
                  <span className="relative mt-5 text-sm font-semibold text-[#22D3EE] transition-transform duration-200 group-hover:translate-x-1">
                    {isSelected ? "Selected" : "Try this filter"} →
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

