import { QuoteRequest, SubscriptionTier } from '../types';

interface PricingParams {
    districtName: string;
    contactName: string;
    contactRole: string;
    email: string;
    studentCount: number;
    busCount: number;
    legacyBusCount: number;
    newBusCount: number;
    tier: SubscriptionTier;
}

export const calculateQuote = (params: PricingParams): QuoteRequest => {
    const { districtName, contactName, contactRole, email, studentCount, busCount, legacyBusCount, newBusCount, tier } = params;

    // Base pricing per tier (these match the values in LandingPage)
    let basePrice = 3000;
    let perBusPrice = 200;
    switch (tier) {
        case 'BASIC':
            basePrice = 3000;
            perBusPrice = 150;
            break;
        case 'PROFESSIONAL':
            basePrice = 5000;
            perBusPrice = 310;
            break;
        case 'ENTERPRISE':
            basePrice = 10000;
            perBusPrice = 460;
            break;
    }

    // Discount logic (same as UI)
    let discountPerBus = 0;
    if (busCount > 1000) discountPerBus = 5.0;
    else if (busCount > 750) discountPerBus = 4.0;
    else if (busCount > 500) discountPerBus = 3.5;
    else if (busCount > 250) discountPerBus = 3.0;
    else if (busCount > 100) discountPerBus = 2.5;

    const adjustedPerBusPrice = perBusPrice - discountPerBus;
    const hardwareCost = legacyBusCount * 200; // updated hardware kit price
    const setupFee = 3000; // one‑time fee
    const totalAnnual = basePrice + busCount * adjustedPerBusPrice;
    const grandTotal = totalAnnual + hardwareCost + setupFee;

    return {
        id: `Q-${Date.now()}`,
        districtName,
        contactName,
        contactRole,
        email,
        studentCount,
        busCount,
        legacyBusCount,
        newBusCount,
        tier,
        amount: grandTotal,
        hardwareCost,
        setupFee,
        status: 'PENDING',
        submittedDate: new Date().toLocaleDateString(),
    };
};
