import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import getRandomInt from './utils';
import Fighter, { SimpleFighter } from './Fighter';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetypes;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._name = name;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetypes {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { type_: this._archetype.energyType, amount: this._energy.amount };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    const MIN_DAMAGE = 1;
    const NO_LIFE_POINTS = -1;

    if (damage > 0) this._lifePoints -= damage;
    if (damage <= 0) this._lifePoints -= MIN_DAMAGE;
    if (this._lifePoints <= 0) this._lifePoints = NO_LIFE_POINTS;

    return this._lifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    const MULTIPLE_OF_THE_SPECIAL = getRandomInt(1, 4);
    enemy.receiveDamage(this._strength * MULTIPLE_OF_THE_SPECIAL);
  }
}