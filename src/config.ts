import Phaser from "phaser";

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 528;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Hello, Phaser",
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#33A5E7",
  scale: {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
