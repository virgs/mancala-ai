import type { BoardConfig } from "./BoardConfig";
import { PlayerIdentifier } from "./PlayerIdentifier";

export class BoardPlayer {
  readonly identifier: PlayerIdentifier;
  private readonly boardLength: number;

  public constructor(identifier: PlayerIdentifier, boardLength: number) {
    this.identifier = identifier;
    this.boardLength = boardLength;
  }

  public getOppositePlayerIdentifier(): PlayerIdentifier {
    return this.identifier === PlayerIdentifier.BOTTOM
      ? PlayerIdentifier.TOP
      : PlayerIdentifier.BOTTOM;
  }

  public checkPocketOwnership(pocketId: number): boolean {
    if (pocketId < 0 || pocketId > this.boardLength - 1) {
      throw new Error(
        `Invalid pocketId (${pocketId}) for this board length: ${this.boardLength}`,
      );
    }
    if (
      this.identifier === PlayerIdentifier.TOP &&
      pocketId < this.boardLength / 2
    ) {
      return true;
    }
    if (
      this.identifier === PlayerIdentifier.BOTTOM &&
      pocketId >= this.boardLength / 2
    ) {
      return true;
    }
    return false;
  }

  public checkPlayerInternalPocketsAreEmpty(boardConfig: BoardConfig): boolean {
    return boardConfig
      .filter((_, index) => this.checkPocketOwnership(index))
      .every((pocket) => pocket === 0);
  }

  public getPlayerStorePocketIndex(): number {
    return this.identifier === PlayerIdentifier.TOP
      ? this.boardLength / 2 - 1
      : this.boardLength - 1;
  }

  public getOpponentStorePocketIndex(): number {
    return this.identifier === PlayerIdentifier.BOTTOM
      ? this.boardLength / 2 - 1
      : this.boardLength - 1;
  }

  public getAvailablePlays(boardConfig: BoardConfig): number[] {
    return boardConfig.reduce((acc, stones, index) => {
      if (
        this.checkPocketOwnership(index) &&
        !this.isPocketStore(index) &&
        stones > 0
      ) {
        acc.push(index);
      }
      return acc;
    }, [] as number[]);
  }

  private isPocketStore(pocketId: number): boolean {
    return (
      pocketId === this.boardLength / 2 - 1 || pocketId === this.boardLength - 1
    );
  }
}
