export type LanyardWSMessage =
  | {
      op: 1
      d: {
        heartbeat_interval: number
      }
    }
  | {
      op: 0
      d: Lanyard
    }

// context: unknown === unnecessary types
export type Lanyard = {
  active_on_discord_desktop: boolean
  active_on_discord_mobile: boolean
  active_on_discord_web: boolean
  activities: Activities
  discord_status: Status
  discord_user: User
  kv: KV
  listening_to_spotify: boolean
  spotify: unknown
}

type Activities = {
  application_id: string
  assets: {
    large_image: string
    large_text: string
    small_image: string
    small_text: string
  }
  created_at: number
  details: string
  end: number
  id: string
  name: string
  state: string
  timestamps: {
    start: string
  }
  type: number
}[]

type Status = "online" | "idle" | "dnd" | "offline"

type User = {
  avatar: string
  avatar_decoration_data: unknown
  bot: boolean
  clan: unknown
  disccriminator: string
  display_name: string
  global_name: string
  id: string
  public_flags: number
  username: string
}

type KV = {
  [key: string]: string
}
