"use client";

import { useState } from "react";
import { painPoints, scenarios, valueProps } from "./data";
import {
  dependencyBadgeClass,
  portfolioClass,
  signalClass,
  stageClass,
} from "./styles";

type ViewMode = "client" | "brain" | "ops";

export function InteractiveDemo() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const [viewMode, setViewMode] = useState<ViewMode>("brain");
  const [updateSent, setUpdateSent] = useState(false);

  const scenario =
    scenarios.find((item) => item.id === scenarioId) ?? scenarios[0];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(199,164,106,0.18),_transparent_28%),linear-gradient(180deg,_#050505_0%,_#090909_40%,_#050505_100%)] text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-white/45">
              Conveyancing Intelligence Demo
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Conveyancing that finally feels visible
            </h1>
          </div>
          <div className="hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60 sm:block">
            Frontend concept demo
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="max-w-sm text-sm uppercase tracking-[0.35em] text-[#c7a46a]">
                A live intelligence layer for every property transaction
              </p>
              <div className="space-y-4">
                <h2 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  {scenario.heroTitle}
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  {scenario.heroBody}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Scenario
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  {scenario.shortLabel}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Switch between risk, recovery, and completion-ready states.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Value proof
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Live output
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  The UI rewrites the client story and ops priorities
                  immediately.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Product quality
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Feels built
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Product thinking, UX judgment, and engineering taste in one
                  small build.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#c7a46a]/25 bg-[linear-gradient(180deg,_rgba(199,164,106,0.14),_rgba(255,255,255,0.03))] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-[#f0c27b]">
                    Demo controls
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    Change the transaction state and watch the product adapt
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  {scenario.summaryLabel}: {scenario.summaryValue}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {scenarios.map((item) => {
                  const isActive = item.id === scenario.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setScenarioId(item.id);
                        setUpdateSent(false);
                      }}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        isActive
                          ? "border-[#c7a46a]/60 bg-[#c7a46a]/15 text-white"
                          : "border-white/10 bg-black/20 text-white/68 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {(["client", "brain", "ops"] as const).map((mode) => {
                  const isActive = mode === viewMode;

                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                        isActive
                          ? "border-white/15 bg-white text-black"
                          : "border-white/10 bg-black/20 text-white/60 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {mode} view
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/10 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    Live matter
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    Maple House Purchase
                  </h3>
                  <p className="mt-2 text-sm text-white/55">
                    Buyer: Ella Watts | Lender: Halifax | Target completion: 14
                    Jun
                  </p>
                </div>
                <div className="rounded-full border border-[#f0c27b]/30 bg-[#f0c27b]/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#f0c27b]">
                  {scenario.riskLabel}
                </div>
              </div>
            </div>

            <div className="space-y-6 p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                      Transaction brain
                    </p>
                    <p className="mt-2 text-lg font-medium tracking-[-0.03em]">
                      {scenario.headline}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Confidence
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#c7a46a]">
                      {scenario.confidence}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {scenario.signals.map((signal) => (
                    <div
                      key={signal.label}
                      className={`rounded-2xl border p-4 ${signalClass(signal.tone)}`}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                        {signal.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/82">
                        {signal.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {viewMode === "brain" ? (
                <div className="grid gap-3">
                  {scenario.stages.map((stage, index) => (
                    <div
                      key={stage.title}
                      className={`grid gap-3 rounded-[1.35rem] border p-4 sm:grid-cols-[auto_1fr] ${stageClass(stage.status)}`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current/15 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-base font-medium tracking-[-0.02em]">
                          {stage.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-current/70">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {viewMode === "client" ? (
                <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="rounded-[1.25rem] border border-[#c7a46a]/30 bg-[#c7a46a]/10 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#f0c27b]">
                      Buyer question
                    </p>
                    <p className="mt-3 text-xl font-medium tracking-[-0.03em]">
                      {scenario.buyerQuestion}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      {scenario.buyerAnswer}
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                      Drafted update
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      {updateSent ? scenario.draftedUpdate : scenario.autoUpdate}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUpdateSent((value) => !value)}
                    className="rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#f3ebe0]"
                  >
                    {updateSent ? "Reset to system summary" : scenario.suggestedAction}
                  </button>
                </div>
              ) : null}

              {viewMode === "ops" ? (
                <div className="space-y-4">
                  {scenario.portfolio.map((entry) => (
                    <div
                      key={entry.matter}
                      className="grid gap-4 rounded-[1.4rem] border border-white/10 bg-black/25 p-5 sm:grid-cols-[1.2fr_auto_auto]"
                    >
                      <div>
                        <p className="text-base font-medium tracking-[-0.03em]">
                          {entry.matter}
                        </p>
                        <p className="mt-1 text-sm text-white/52">
                          Owner: {entry.owner}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/38">
                          Status
                        </p>
                        <p className={`mt-2 text-sm font-medium ${portfolioClass(entry.tint)}`}>
                          {entry.state}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/38">
                          ETA
                        </p>
                        <p className="mt-2 text-sm text-white/78">{entry.eta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              The real problem
            </p>
            <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em]">
              Conveyancing feels broken because nobody can see the system, only
              fragments of it.
            </h3>

            <div className="mt-6 space-y-4">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.4rem] border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/72"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  Live event stream
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Watch the transaction rewrite itself
                </h3>
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55">
                scenario driven
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {scenario.activity.map((item) => (
                <div
                  key={`${item.time}-${item.text}`}
                  className="grid gap-3 rounded-[1.35rem] border border-white/10 bg-black/25 px-4 py-4 sm:grid-cols-[auto_1fr]"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-[#c7a46a]">
                    {item.time}
                  </p>
                  <p className="text-sm leading-6 text-white/74">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Dependency map
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Show the deal as a living system, not a pile of documents.
            </h3>
            <div className="mt-6 space-y-4">
              {scenario.dependencies.map((item) => (
                <div
                  key={item.name}
                  className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 p-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <p className="text-base font-medium tracking-[-0.02em]">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      {item.note}
                    </p>
                  </div>
                  <div className="flex items-start sm:justify-end">
                    <div
                      className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${dependencyBadgeClass(item.state)}`}
                    >
                      {item.state}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#c7a46a]/25 bg-[linear-gradient(180deg,_rgba(199,164,106,0.16),_rgba(255,255,255,0.03))] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f0c27b]">
              Why this matters
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              This is the product layer that makes a modern law firm feel
              unmistakably modern.
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/78">
              Most legal tech stops at internal tooling. This goes one layer
              higher: the intelligence, explanations, and coordination system
              clients actually feel. That is the difference between claiming a
              firm is tech-enabled and making it obvious in every transaction.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                  Signature moment
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.03em]">
                  A buyer asks one question and the product answers it before
                  any human has to.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                  Positioning edge
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.03em]">
                  Not another case tracker. A premium transaction operating
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))] p-6 sm:grid-cols-3 sm:p-8">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
            >
              <p className="text-lg font-medium tracking-[-0.03em]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                {item.body}
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
