export type StageStatus = "done" | "active" | "upcoming";
export type SignalTone = "alert" | "warning" | "neutral";
export type PortfolioTone = "good" | "warning" | "alert";
export type DependencyState = "Cleared" | "Blocking" | "Pending";

export type MatterStage = {
  title: string;
  detail: string;
  status: StageStatus;
};

export type BrainSignal = {
  label: string;
  value: string;
  tone: SignalTone;
};

export type PortfolioItem = {
  matter: string;
  owner: string;
  state: string;
  eta: string;
  tint: PortfolioTone;
};

export type ActivityItem = {
  time: string;
  text: string;
};

export type DependencyItem = {
  name: string;
  state: DependencyState;
  note: string;
};

export type Scenario = {
  id: string;
  label: string;
  shortLabel: string;
  riskLabel: string;
  confidence: string;
  headline: string;
  heroTitle: string;
  heroBody: string;
  buyerQuestion: string;
  buyerAnswer: string;
  autoUpdate: string;
  summaryLabel: string;
  summaryValue: string;
  stages: MatterStage[];
  signals: BrainSignal[];
  portfolio: PortfolioItem[];
  activity: ActivityItem[];
  dependencies: DependencyItem[];
  draftedUpdate: string;
  suggestedAction: string;
};

export const painPoints = [
  "Clients do not know what is happening, so they assume nothing is happening.",
  "Lawyers burn hours rewriting the same status update in slightly different words.",
  "Delays are discovered too late because nobody can see dependencies clearly.",
] as const;

export const valueProps = [
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

export const scenarios: Scenario[] = [
  {
    id: "delay",
    label: "Delay predicted",
    shortLabel: "Delay risk",
    riskLabel: "Delay risk",
    confidence: "82%",
    headline: "Estimated completion shifted by 4 days",
    heroTitle: "Tell clients why their move is stuck before they ask.",
    heroBody:
      "The system spots the blocker, predicts the delay, drafts the client update, and routes the next action to the right person without waiting for the panic email.",
    buyerQuestion: "Why is my house not completed yet?",
    buyerAnswer:
      "Completion is waiting on a lender valuation note. Keith expects this to land within two working days, and there is nothing you need to do right now.",
    autoUpdate:
      "Auto-update ready: reassure buyer, chase lender, and preserve trust before inbound calls begin.",
    summaryLabel: "Predicted slip",
    summaryValue: "+4 days vs. target",
    stages: [
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
    ],
    signals: [
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
    ],
    portfolio: [
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
    ],
    activity: [
      {
        time: "09:12",
        text: "Search pack submitted to Camden Council",
      },
      {
        time: "10:03",
        text: "Buyer asked to upload proof of funds",
      },
      {
        time: "10:11",
        text: "AI flagged valuation note as likely delay source",
      },
      {
        time: "10:15",
        text: "Client update drafted with plain-English explanation",
      },
      {
        time: "10:22",
        text: "Keith ops queue reprioritized lender chase",
      },
    ],
    dependencies: [
      {
        name: "Local authority search",
        state: "Cleared",
        note: "Returned within expected window.",
      },
      {
        name: "Lender valuation note",
        state: "Blocking",
        note: "Critical path item with predicted two-day lag.",
      },
      {
        name: "Proof of funds",
        state: "Pending",
        note: "Buyer uploaded draft file, awaiting review.",
      },
    ],
    draftedUpdate:
      "Hi Ella, your purchase is currently waiting on Halifax's valuation note. We expect that back within two working days, and there is nothing you need to do right now. We'll update you the moment it lands.",
    suggestedAction: "Send lender chase now",
  },
  {
    id: "recovery",
    label: "Recovery mode",
    shortLabel: "Recovering",
    riskLabel: "Recovering",
    confidence: "89%",
    headline: "Completion timeline recovered by 3 days",
    heroTitle: "Show how Keith turns a wobble into visible momentum.",
    heroBody:
      "The product does not just report risk. It shows the team exactly what changed, communicates it clearly to the client, and rebuilds confidence while the deal gets back on track.",
    buyerQuestion: "Is my purchase moving again now?",
    buyerAnswer:
      "Yes. The lender valuation note has arrived and Keith has pushed your file into contract review. Exchange is back within this week if no new blockers appear.",
    autoUpdate:
      "Auto-update ready: celebrate progress, reset expectations, and reduce anxious check-ins.",
    summaryLabel: "Time recovered",
    summaryValue: "-3 days back",
    stages: [
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
        detail: "Valuation note received and cleared.",
        status: "done",
      },
      {
        title: "Contract review",
        detail: "Keith legal team is reviewing draft contracts now.",
        status: "active",
      },
      {
        title: "Exchange and completion",
        detail: "Projected for 15 June if review finishes today.",
        status: "upcoming",
      },
    ],
    signals: [
      {
        label: "System insight",
        value: "Delay risk reduced after lender response landed",
        tone: "neutral",
      },
      {
        label: "Time recovered",
        value: "-3 days back on target",
        tone: "warning",
      },
      {
        label: "Suggested move",
        value: "Notify buyer, then push contract review to same-day turnaround",
        tone: "neutral",
      },
    ],
    portfolio: [
      {
        matter: "Maple House / Buyer side",
        owner: "Sam Tucker",
        state: "Recovering",
        eta: "15 Jun",
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
        state: "Needs review",
        eta: "16 Jun",
        tint: "warning",
      },
    ],
    activity: [
      {
        time: "11:02",
        text: "Lender valuation note received and auto-linked to matter",
      },
      {
        time: "11:04",
        text: "Delay forecast recalculated from +4 days to +1 day",
      },
      {
        time: "11:06",
        text: "Buyer reassurance update drafted and queued",
      },
      {
        time: "11:12",
        text: "Contract review escalated into same-day legal lane",
      },
      {
        time: "11:16",
        text: "Completion ETA refreshed across client and ops views",
      },
    ],
    dependencies: [
      {
        name: "Local authority search",
        state: "Cleared",
        note: "Returned and incorporated into file.",
      },
      {
        name: "Lender valuation note",
        state: "Cleared",
        note: "Arrived and removed from the critical path.",
      },
      {
        name: "Contract review",
        state: "Pending",
        note: "Now the main dependency for exchange readiness.",
      },
    ],
    draftedUpdate:
      "Good news: Halifax's valuation note has now arrived and your purchase is moving into contract review. We are back on track for exchange this week if the final legal review stays clear.",
    suggestedAction: "Approve client update",
  },
  {
    id: "completion",
    label: "Completion ready",
    shortLabel: "Ready to complete",
    riskLabel: "Ready",
    confidence: "96%",
    headline: "All blockers cleared for exchange and completion",
    heroTitle: "Make the final stretch feel calm, premium, and certain.",
    heroBody:
      "At the best moment, the product still matters: it gives clients certainty, keeps the legal team aligned, and turns the most stressful week into a controlled experience.",
    buyerQuestion: "Are we finally ready to complete?",
    buyerAnswer:
      "Yes. Searches, lender conditions, and contract review are all complete. Keith is preparing exchange and completion steps for your confirmed date.",
    autoUpdate:
      "Auto-update ready: celebrate readiness, confirm next steps, and make the final week feel premium.",
    summaryLabel: "Completion confidence",
    summaryValue: "Ready to exchange",
    stages: [
      {
        title: "Offer accepted",
        detail: "Buyer and seller aligned in 11 hours.",
        status: "done",
      },
      {
        title: "Search pack requested",
        detail: "Searches returned and signed off.",
        status: "done",
      },
      {
        title: "Mortgage conditions",
        detail: "Lender approved final conditions.",
        status: "done",
      },
      {
        title: "Contract review",
        detail: "Contracts reviewed and cleared.",
        status: "done",
      },
      {
        title: "Exchange and completion",
        detail: "Ready for exchange with completion booked for 14 June.",
        status: "active",
      },
    ],
    signals: [
      {
        label: "Current state",
        value: "No blockers remain on the transaction",
        tone: "neutral",
      },
      {
        label: "Completion confidence",
        value: "Ready to exchange and confirm moving date",
        tone: "warning",
      },
      {
        label: "Suggested move",
        value: "Send final prep checklist and confirm completion funds",
        tone: "neutral",
      },
    ],
    portfolio: [
      {
        matter: "Maple House / Buyer side",
        owner: "Sam Tucker",
        state: "Ready",
        eta: "14 Jun",
        tint: "good",
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
        state: "At risk",
        eta: "18 Jun",
        tint: "warning",
      },
    ],
    activity: [
      {
        time: "14:01",
        text: "Final contract review cleared by Keith legal",
      },
      {
        time: "14:06",
        text: "Completion statement shared with buyer",
      },
      {
        time: "14:08",
        text: "Exchange readiness confirmed across both sides",
      },
      {
        time: "14:11",
        text: "Moving checklist delivered automatically to client",
      },
      {
        time: "14:17",
        text: "Completion funds reminder scheduled for tomorrow morning",
      },
    ],
    dependencies: [
      {
        name: "Local authority search",
        state: "Cleared",
        note: "No outstanding issues remain.",
      },
      {
        name: "Lender valuation note",
        state: "Cleared",
        note: "Conditions met and approved.",
      },
      {
        name: "Contract review",
        state: "Cleared",
        note: "Exchange is now the active step, not a dependency.",
      },
    ],
    draftedUpdate:
      "Everything is now in place for exchange and completion. Keith has cleared searches, lender conditions, and contract review, and we will guide you through the final steps toward your confirmed completion date.",
    suggestedAction: "Send completion checklist",
  },
];
