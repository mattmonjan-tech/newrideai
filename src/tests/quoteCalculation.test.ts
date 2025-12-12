import { calculateQuote } from '../utils/pricing';
import { SubscriptionTier } from '../types';

describe('calculateQuote', () => {
    const baseParams = {
        districtName: 'Test District',
        contactName: 'Jane Doe',
        contactRole: 'Director',
        email: 'jane@example.com',
        studentCount: 5000,
        busCount: 120,
        legacyBusCount: 20,
        newBusCount: 100,
        tier: 'BASIC' as SubscriptionTier,
    };

    test('BASIC tier total includes setup fee and hardware', () => {
        const quote = calculateQuote({ ...baseParams, tier: 'BASIC' });
        // BASIC per‑bus price = 150, discount for 120 buses = 2.5 (since >100)
        const perBus = 150 - 2.5;
        const expected = 3000 + 120 * perBus + 20 * 200 + 3000; // base + buses + hardware + setup
        expect(quote.amount).toBe(expected);
    });

    test('PROFESSIONAL tier total', () => {
        const quote = calculateQuote({ ...baseParams, tier: 'PROFESSIONAL' });
        const perBus = 310 - 2.5; // same discount tier
        const expected = 5000 + 120 * perBus + 20 * 200 + 3000;
        expect(quote.amount).toBe(expected);
    });

    test('ENTERPRISE tier total', () => {
        const quote = calculateQuote({ ...baseParams, tier: 'ENTERPRISE' });
        const perBus = 460 - 2.5;
        const expected = 10000 + 120 * perBus + 20 * 200 + 3000;
        expect(quote.amount).toBe(expected);
    });
});
