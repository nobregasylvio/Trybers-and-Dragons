import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  private _energyType: EnergyType = 'stamina';
  private static _archetypeInstances = 0;

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances() {
    this._archetypeInstances += 1;
    return this._archetypeInstances;
  }
}