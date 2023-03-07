import { writable } from "svelte/store";
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

export const criterias = writable<criteria[]>([])
export const topics = writable<topic[]>([])
export const ratings = writable<rating[][]>([]) //[id-topic][id-criteria]

//export default { criterias, topics, ratings }