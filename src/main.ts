import 'phaser'

import GameConfig from '@/game/gameConfig'
import Game from '@/game/Game'

window.addEventListener('load', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any)._game = new Game(GameConfig)
})
