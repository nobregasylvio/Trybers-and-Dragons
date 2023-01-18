import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _raceInstances = 0;

  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Elf._raceInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._raceInstances;
  }
}