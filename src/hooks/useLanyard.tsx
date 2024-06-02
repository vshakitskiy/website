import { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"
import { Lanyard, LanyardWSMessage } from "types/lanyard"

const useLanyard = (userId: string) => {
  const [state, setState] = useState<Lanyard | null>(null)

  const { sendJsonMessage, lastJsonMessage } = useWebSocket<LanyardWSMessage>(
    "wss://api.lanyard.rest/socket",
    {
      onOpen: () => {
        console.log("Connected to Lanyard via socket.")
      },
      onClose: () => {
        console.log("Disconnected from Lanyard.")
      },
    }
  )

  useEffect(() => {
    if (!lastJsonMessage) return

    if (lastJsonMessage.op === 1) {
      sendJsonMessage({
        op: 2,
        d: {
          subscribe_to_id: userId,
        },
      })

      setInterval(
        () => sendJsonMessage({ op: 3 }),
        lastJsonMessage.d.heartbeat_interval
      )
    }

    if (lastJsonMessage.op === 0) {
      setState(lastJsonMessage.d)
    }
  }, [lastJsonMessage])

  return state
}

export default useLanyard
