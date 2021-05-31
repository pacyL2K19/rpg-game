import 'jest-canvas-mock';
import BootScene from '../src/scenes/boot';
import EndGameScene from '../src/scenes/endGame';
import ScoresScene from '../src/scenes/score';
import GameScene from '../src/scenes/game';
import Option from '../src/scenes/option';

describe('Scenes are functions test', () => {
  it('The Boot scene is a function', () => {
    expect(typeof BootScene).toBe('function');
  });
  it('EndGame Scene is a function', () => {
    expect(typeof EndGameScene).toBe('function');
  });
  it('Scores Scene is a function', () => {
    expect(typeof ScoresScene).toBe('function');
  });
  it('Game Scene is a function', () => {
    expect(typeof GameScene).toBe('function');
  });
  it('Options Scene is a function', () => {
    expect(typeof Option).toBe('function');
  });
});
