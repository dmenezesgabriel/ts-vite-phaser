import Phaser from "phaser";
import { gameConfig } from "./config";
import GameScene from "./scenes/Game";

export const game = new Phaser.Game(
  Object.assign(gameConfig, {
    scene: [GameScene],
  })
);
