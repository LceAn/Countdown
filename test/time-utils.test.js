const test = require('node:test');
const assert = require('node:assert/strict');

const {
    calculateProgress,
    calculateRemaining,
    createYearConfig
} = require('../js/time-utils.js');

test('annual config always targets the next calendar year', () => {
    const config = createYearConfig(new Date('2026-07-31T12:00:00'));
    assert.equal(config.title, '2027 新年倒计时');
    assert.equal(config.targetDate, '2027-01-01T00:00:00');
    assert.equal(config.yearProgress.startDate, '2026-01-01T00:00:00');
});

test('remaining time is split into calendar display units', () => {
    const remaining = calculateRemaining(
        '2026-12-30T22:58:57',
        '2027-01-01T00:00:00'
    );
    assert.deepEqual(remaining, {
        completed: false,
        days: 1,
        hours: 1,
        minutes: 1,
        seconds: 3
    });
});

test('progress is clamped to the visible range', () => {
    assert.equal(calculateProgress('2025-01-01', '2026-01-01', '2027-01-01'), 0);
    assert.equal(calculateProgress('2028-01-01', '2026-01-01', '2027-01-01'), 100);
});
