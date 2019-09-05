import React from 'react';
import * as rtl from '@testing-library/react';
import {callBall, callStrike, callHit, callFoul} from './Dashboard'



test('callBall should add 1 to ball count, then go from 3 back to 0', () => {
    expect(callBall(1)).toBe(2)
    expect(callBall(3)).toBe(0)
})

test('callStrike should add 1 to strike count, then go from 2 back to 0', () => {
    expect(callStrike(1)).toBe(2)
    expect(callStrike(2)).toBe(0)
})

test('callHit should add 1 to hit count', () => {
    expect(callHit(1)).toBe(2)
    expect(callHit(5)).toBe(6)
})

test('callFoul should add 1 to strike count, then it at 2 should stay there', () => {
    expect(callFoul(0)).toBe(1)
    expect(callFoul(2)).toBe(2)
})


