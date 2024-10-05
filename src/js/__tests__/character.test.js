
import orderByProps from '../sort'
import { test } from "@jest/globals";

test('should be true dict', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }

  expect(orderByProps(obj, ["name", "level"])).toEqual({
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
    health: 10,
  });

  const newObj = {
    health: 10,
    name: 'мечник',
    level: 2,
    defence: 40,
    attack: 80,
  }

  expect(orderByProps(newObj, ["name", "level"])).toEqual({
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
    health: 10,
  });
})
