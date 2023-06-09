import { MediaType } from "./media-type"

export type ModuleType = {
  id: number
  name: string
  objective: string
  selected: boolean
  totalTime: string
  medias: Array<MediaType>

}
