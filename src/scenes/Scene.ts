import skyUrl from '@assets/skies/space3.png'
import logoUrl from '@assets/sprites/phaser3-logo.png'
import redUrl from '@assets/particles/red.png'

export function Scene(): Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig {
  return {
    preload() {
      this.load.image('sky', skyUrl)
      this.load.image('logo', logoUrl)
      this.load.image('red', redUrl)
    },
    create() {
      this.add.image(400, 300, 'sky')

      const particles: Phaser.GameObjects.Particles.ParticleEmitterManager = this.add.particles('red')

      const emitter: Phaser.GameObjects.Particles.ParticleEmitter = particles.createEmitter({
          speed: 100,
          scale: { start: 1, end: 0 },
          blendMode: 'ADD'
      })

      const logo: Phaser.Types.Physics.Arcade.ImageWithDynamicBody = this.physics.add.image(400, 100, 'logo')

      logo.setVelocity(100, 200)
      logo.setBounce(1, 1)
      logo.setCollideWorldBounds(true)

      emitter.startFollow(logo)
    }
  }
}
