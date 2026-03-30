import type {
  DependencyState,
  PortfolioTone,
  SignalTone,
  StageStatus,
} from "./data";

export function stageClass(status: StageStatus) {
  switch (status) {
    case "done":
      return "border-white/15 bg-white text-black";
    case "active":
      return "border-[#c7a46a]/60 bg-[#c7a46a]/15 text-white";
    default:
      return "border-white/10 bg-white/[0.03] text-white/70";
  }
}

export function portfolioClass(tint: PortfolioTone) {
  switch (tint) {
    case "good":
      return "text-[#8bc18a]";
    case "warning":
      return "text-[#f0c27b]";
    default:
      return "text-[#ff9f93]";
  }
}

export function signalClass(tone: SignalTone) {
  switch (tone) {
    case "alert":
      return "border-[#ff9f93]/30 bg-[#ff9f93]/10";
    case "warning":
      return "border-[#f0c27b]/30 bg-[#f0c27b]/10";
    default:
      return "border-white/10 bg-white/[0.03]";
  }
}

export function dependencyBadgeClass(state: DependencyState) {
  switch (state) {
    case "Cleared":
      return "border border-[#8bc18a]/30 bg-[#8bc18a]/10 text-[#8bc18a]";
    case "Blocking":
      return "border border-[#ff9f93]/30 bg-[#ff9f93]/10 text-[#ff9f93]";
    default:
      return "border border-[#f0c27b]/30 bg-[#f0c27b]/10 text-[#f0c27b]";
  }
}
