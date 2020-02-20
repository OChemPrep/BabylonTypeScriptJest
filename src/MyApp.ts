import { Engine } from "@babylonjs/core/Engines/engine";
import { NullEngine } from "@babylonjs/core/Engines/nullEngine";

export default class MyApp {

  private engine: Engine;

  constructor() {

    this.engine = new NullEngine();

  }
}