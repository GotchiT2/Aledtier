import { writable } from "svelte/store";
export type criteria = {
  id: number,
  label: string
}

export type topic = {
  id: number,
  label: string
}

export const criterias = writable<criteria[]>([])
export const topics = writable<topic[]>([])

//export default { criterias, topics, ratings }