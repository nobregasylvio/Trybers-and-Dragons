import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _playerOne: Fighter;
  private _playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  public fight(): number {
    let winner = 0;
    const NO_LIFE_POINTS = -1;

    while (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
    }

    if (this._playerOne.lifePoints === NO_LIFE_POINTS) winner = -1;
    if (this._playerTwo.lifePoints === NO_LIFE_POINTS) winner = 1;

    return winner;
  }
}