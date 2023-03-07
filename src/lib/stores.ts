import { writable } from "svelte/store";
import { TIER_LETTERS } from "../domain/Tier";

export type criteria = {
  id: number,
  label: string
}

export type topic = {
  id: number,
  label: string
  average: number
}

export type rating = {
  id: number,
  rate: number
}

const tierLabelsDefaultValues = [...TIER_LETTERS]


export const criterias = writable<criteria[]>([])
export const topics = writable<topic[]>([])
export const ratings = writable<rating[][][]>([]) //[id-topic][id-criteria][id-player]

export const tierLabels = writable<string[]>(tierLabelsDefaultValues)

// averageCriteria
// averageTopic
