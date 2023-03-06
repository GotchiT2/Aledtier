export const TIER_LETTERS = ["SSS", "S", "A", "B", "C", "D", "E", "F", "G"] as const;
export type TierLetter = typeof TIER_LETTERS[number];
