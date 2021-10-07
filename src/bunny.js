import gsap from 'gsap/all';
import * as PIXI from 'pixi.js';

export class Bunny extends PIXI.Container {
  constructor(renderer) {
    super();

    this._renderer = renderer;
    this._buildBunny();
  }

  _buildBunny() {
    const texture = PIXI.Texture.from('assets/bunny.png');
    this._bunny = new PIXI.Sprite(texture);

    this._bunny.x = this._renderer.width * 0.5;
    this._bunny.y = this._renderer.height * 0.5;
    this._bunny.anchor.x = 0.5;
    this._bunny.anchor.y = 0.5;
    this._bunny.scale.set(3);

    this.addChild(this._bunny);

    gsap.to(this._bunny, { rotation: Math.PI * 2, duration: 2, ease: 'none', repeat: -1 });
  }
}
