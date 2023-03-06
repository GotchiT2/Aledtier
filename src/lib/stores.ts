import { writable } from "svelte/store";

export const criterias = writable<string[]>([])
export const topics = writable<string[]>([])

//export default { criterias, topics, ratings }