
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

  expect(orderByProps(obj, ["name", "level"])).toEqual([
    {"key": "name", "value": "мечник"}, 
    {"key": "level", "value": 2}, 
    {"key": "attack", "value": 80}, 
    {"key": "defence", "value": 40}, 
    {"key": "health", "value": 10}
  ]);

  const newObj = {
    health: 10,
    name: 'мечник',
    level: 2,
    defence: 40,
    attack: 80,
  }

  expect(orderByProps(newObj, ["name", "level"])).toEqual([
    {"key": "name", "value": "мечник"}, 
    {"key": "level", "value": 2}, 
    {"key": "attack", "value": 80}, 
    {"key": "defence", "value": 40}, 
    {"key": "health", "value": 10}
  ]);
})
