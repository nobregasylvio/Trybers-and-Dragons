import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monster: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, monster: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._monster = monster;
  }

  public fight(): number {
    let winner = 0;
    const NO_LIFE_POINTS = -1;

    this._monster.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });

    winner = this._player.lifePoints === NO_LIFE_POINTS ? -1 : 1;
    return winner;
  }
}