import { Scene } from  '@/scenes/Scene'

const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200
      }
    }
  },
  scene: [Scene()] as Phaser.Types.Scenes.SettingsConfig[]
}

export default GameConfig
