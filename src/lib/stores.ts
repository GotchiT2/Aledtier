import { browser } from '$app/environment';
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

function initStore(storeName: string) {
  return browser && localStorage
  ? JSON.parse(localStorage.getItem(storeName) as any) ?? [] as any
  : []
}

export const criterias = writable<criteria[]>(initStore('criterias'))
export const topics = writable<topic[]>(initStore('topics'))
export const ratings = writable<rating[][][]>(initStore('ratings')) //[id-topic][id-criteria][id-player]

saveStore(criterias, 'criterias')
saveStore(topics, 'topics')
saveStore(ratings, 'ratings')

function saveStore(store: any, storeName: string) {
  store.subscribe((storeContent: any) => {
    if(browser) localStorage.setItem(storeName, JSON.stringify(storeContent))
  })
}

export const tierLabels = writable<string[]>(tierLabelsDefaultValues)

// averageCriteria
// averageTopic
