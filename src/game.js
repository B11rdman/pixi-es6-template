import * as PIXI from 'pixi.js';
import { Bunny } from './bunny';

export class Game extends PIXI.Application {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xc3c3c3,
    });
    document.body.appendChild(this.view);

    this.loader.add([{ name: 'bunny', url: 'assets/bunny.png' }]);

    this.loader.onComplete.add(this._onLoadComplete, this);
    this.loader.onLoad.add(this._onLoad, this);
    this.loader.onProgress.add(this._onLoadProgress, this);
    this.loader.onError.add(this._onLoadError, this);
    this.loader.load();
  }

  _onLoad(loader, resource) {
    //
  }

  _onLoadProgress(loader, resource) {
    console.log(`progress  |  ${loader.progress} | ${resource.name}`);
  }

  _onLoadError(error, loader, resource) {
    throw new Error(error);
  }

  _onLoadComplete(loader, resources) {
    // const texture = PIXI.Texture.from('assets/bunny.png');
    // this.bunny = new PIXI.Sprite(texture);
    this.bunny = new Bunny(this.renderer);

    // this.bunny.x = this.renderer.width * 0.5;
    // this.bunny.y = this.renderer.height * 0.5;
    // this.bunny.anchor.x = 0.5;
    // this.bunny.anchor.y = 0.5;

    // this.ticker.add(this._animate, this);
    // this.ticker.start();

    this.stage.addChild(this.bunny);
    // gsap.to(this.bunny, { rotation: 180, duration: 10, ease: 'sine' });
  }

  _animate() {
    // this.bunny.rotation += 0.1;
    this.renderer.render(this.stage);
  }
}
