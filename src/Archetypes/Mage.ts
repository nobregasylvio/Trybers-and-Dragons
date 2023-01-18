import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  private _energyType: EnergyType = 'mana';
  private static _archetypeInstances = 0;

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances() {
    this._archetypeInstances += 1;
    return this._archetypeInstances;
  }
}