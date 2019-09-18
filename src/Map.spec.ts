import { Map } from './Map';
import test from 'ava';

test('generates correct amount of tiles', t => {
  const m = new Map({
    width: 3,
    length: 4,
  });

  m.getTiles().forEach(tiles => {
    console.log(tiles.length);
  });
});
