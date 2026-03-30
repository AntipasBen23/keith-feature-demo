const caseStages = [
  {
    title: "Offer accepted",
    detail: "Buyer and seller aligned in 11 hours.",
    status: "done",
  },
  {
    title: "Search pack requested",
    detail: "Local authority request sent automatically.",
    status: "done",
  },
  {
    title: "Mortgage conditions",
    detail: "Waiting on lender's final valuation note.",
    status: "active",
  },
  {
    title: "Contract review",
    detail: "Draft pack assembled and ready for legal review.",
    status: "upcoming",
  },
  {
    title: "Exchange and completion",
    detail: "Projected for 18 June if current blocker clears.",
    status: "upcoming",
  },
] as const;

const brainSignals = [
  {
    label: "Primary blocker",
    value: "Lender valuation note delayed",
    tone: "alert",
  },
  {
    label: "Predicted slip",
    value: "+4 days vs. target",
    tone: "warning",
  },
  {
    label: "Suggested move",
    value: "Trigger lender chase and notify buyer instantly",
    tone: "neutral",
  },
] as const;

const portfolio = [
  {
    matter: "Maple House / Buyer side",
    owner: "Sam Tucker",
    state: "At risk",
    eta: "18 Jun",
    tint: "warning",
  },
  {
    matter: "14 Cedar Mews / Seller side",
    owner: "A. Shovel",
    state: "On track",
    eta: "12 Jun",
    tint: "good",
  },
  {
    matter: "Riverside Loft / Buyer side",
    owner: "J. Patel",
    state: "Blocked",
    eta: "Unknown",
    tint: "alert",
  },
] as const;

const activityFeed = [
  "09:12 Search pack submitted to Camden Council",
  "10:03 Buyer asked to upload proof of funds",
  "10:11 AI flagged valuation note as likely delay source",
  "10:15 Client update sent: 'No action needed from you today'",
  "10:22 Keith ops queue reprioritized lender chase",
] as const;

const dependencies = [
  {
    name: "Local authority search",
    state: "Cleared",
    note: "Returned within expected window.",
  },
  {
    name: "Lender valuation note",
    state: "Blocking",
    note: "Critical path item with predicted 2-day lag.",
  },
  {
    name: "Proof of funds",
    state: "Pending",
    note: "Buyer uploaded draft file, awaiting review.",
  },
] as const;

const painPoints = [
  "Clients do not know what is happening, so they assume nothing is happening.",
  "Lawyers burn hours rewriting the same status update in slightly different words.",
  "Delays are discovered too late because nobody can see dependencies clearly.",
] as const;

const valueProps = [
  {
    title: "Explain the delay instantly",
    body: "Translate legal process into plain English so a buyer can see exactly why completion has not happened yet.",
  },
  {
    title: "Coordinate the next move",
    body: "Surface the one action that will unblock progress instead of burying teams in admin and follow-ups.",
  },
  {
    title: "Make every case feel active",
    body: "Continuous updates, risk flags, and clear ETAs make the product feel alive, competent, and trustworthy.",
  },
] as const;

function statusClass(status: string) {
  switch (status) {
    case "done":
      return "border-white/15 bg-white text-black";
    case "active":
      return "border-[#c7a46a]/60 bg-[#c7a46a]/15 text-white";
    default:
      return "border-white/10 bg-white/[0.03] text-white/70";
  }
}

function portfolioClass(tint: string) {
  switch (tint) {
    case "good":
      return "text-[#8bc18a]";
    case "warning":
      return "text-[#f0c27b]";
    default:
      return "text-[#ff9f93]";
  }
}

function signalClass(tone: string) {
  switch (tone) {
    case "alert":
      return "border-[#ff9f93]/30 bg-[#ff9f93]/10";
    case "warning":
      return "border-[#f0c27b]/30 bg-[#f0c27b]/10";
    default:
      return "border-white/10 bg-white/[0.03]";
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(199,164,106,0.18),_transparent_28%),linear-gradient(180deg,_#050505_0%,_#090909_40%,_#050505_100%)] text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-white/45">
              Keith x Transaction Brain
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Conveyancing that finally feels visible
            </h1>
          </div>
          <div className="hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60 sm:block">
            Frontend concept demo
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="max-w-sm text-sm uppercase tracking-[0.35em] text-[#c7a46a]">
                A live intelligence layer for every property transaction
              </p>
              <div className="space-y-4">
                <h2 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  Tell clients why their move is stuck before they ask.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  Keith&apos;s opportunity is not just faster legal work. It is
                  turning conveyancing from a black box into a calm, proactive,
                  premium product experience for buyers, sellers, and the legal
                  team behind them.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Clients
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Less grumpy
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Plain-English progress, blockers, and next steps without
                  anxious email chains.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Lawyers
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Less stressed
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  One queue for risks, dependencies, and status changes across
                  active matters.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Deals
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Faster movement
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Automated nudges and a visible critical path make delays
                  easier to prevent.
                </p>
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
                    Buyer: Ella Watts • Lender: Halifax • Target completion:
                    14 Jun
                  </p>
                </div>
                <div className="rounded-full border border-[#f0c27b]/30 bg-[#f0c27b]/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#f0c27b]">
                  Delay risk
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
                      Estimated completion shifted by 4 days
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Confidence
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#c7a46a]">
                      82%
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {brainSignals.map((signal) => (
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

              <div className="grid gap-3">
                {caseStages.map((stage, index) => (
                  <div
                    key={stage.title}
                    className={`grid gap-3 rounded-[1.35rem] border p-4 sm:grid-cols-[auto_1fr] ${statusClass(stage.status)}`}
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
                  Ops command view
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  One queue. Every risk. No mystery.
                </h3>
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55">
                19 active matters
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {portfolio.map((entry) => (
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
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Client experience
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              A house move dashboard that answers the only question buyers
              really care about.
            </h3>
            <div className="mt-6 rounded-[1.5rem] border border-[#c7a46a]/30 bg-[#c7a46a]/10 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#f0c27b]">
                What the buyer sees
              </p>
              <p className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                Why is my house not completed yet?
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/78">
                Completion is waiting on a lender valuation note. Keith expects
                this to land within two working days, and there is nothing you
                need to do right now. We&apos;ll message you the moment that blocker
                clears.
              </p>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/42">
                Automated reassurance
              </p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Instead of silence, clients get steady, context-aware updates
                that reduce panic and cut repetitive inbound email volume.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0f0f0f] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  Live event stream
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  Make progress visible in real time
                </h3>
              </div>
              <div className="h-3 w-3 rounded-full bg-[#8bc18a] shadow-[0_0_20px_rgba(139,193,138,0.9)]" />
            </div>

            <div className="mt-6 space-y-3">
              {activityFeed.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/74"
                >
                  {item}
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
              {dependencies.map((item) => (
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
                      className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                        item.state === "Cleared"
                          ? "border border-[#8bc18a]/30 bg-[#8bc18a]/10 text-[#8bc18a]"
                          : item.state === "Blocking"
                            ? "border border-[#ff9f93]/30 bg-[#ff9f93]/10 text-[#ff9f93]"
                            : "border border-[#f0c27b]/30 bg-[#f0c27b]/10 text-[#f0c27b]"
                      }`}
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
              Why this matters for Keith
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              This is the product layer that makes a modern law firm feel
              unmistakably modern.
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/78">
              Most legal tech stops at internal tooling. This goes one layer
              higher: the intelligence, explanations, and coordination system
              clients actually feel. That is the difference between saying
              Keith is tech-enabled and making it obvious in every transaction.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                  Signature moment
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.03em]">
                  A buyer asks one question and Keith answers it before any
                  human has to.
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
