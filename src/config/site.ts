export const SLOTS_AVAILABLE = 3; // Update manually when slots change
// Delivery server URL — set PUBLIC_DELIVERY_URL env var at deploy time
// Default to localhost:3000 for local dev; note container maps to 3001 if 3000 is taken
export const DELIVERY_URL = import.meta.env.PUBLIC_DELIVERY_URL ?? 'http://localhost:3000';
export const STRIPE_KICKSTART_LINK = "https://buy.stripe.com/PLACEHOLDER"; // Replace with real Stripe payment link — set success URL to https://brainkit.so/onboard?email={CUSTOMER_EMAIL}
export const CAL_LINK = "johannesbk/discovery"; // Cal.com username/event — used for Concierge + Full Stack discovery, and Kickstart setup call
export const CAL_SETUP_LINK = "johannesbk/kickstart-setup"; // Cal.com event for post-purchase Kickstart onboarding — create this event at cal.com
export const SITE_URL = "https://brainkit.so";
export const INTRO_PRICE = 197;
export const REGULAR_PRICE = 297;
