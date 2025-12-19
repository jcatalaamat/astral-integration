# Decisions Log

This file records significant architectural and strategic decisions for the Astral Integration project.

---

## 2024-12-19: Voice Architecture Refactor

### Decision
Separate the two voices (Systems Architect vs Oracle/Healer) into distinct layers with clear boundaries.

### Context
The site had two incompatible brand identities running in parallel:
1. **Systems Architect** (HomePage): Calm, precise, professional, B2B positioning
2. **Mystical Oracle** (OnePagerBackup): Spiritual, transformational, intimate healing positioning

This created:
- Conceptual incoherence
- Professional distrust
- Audience confusion
- Internal shame from overexposure

### Architecture

**Layer 1 — PUBLIC / PRIMARY** (what most people see)
- Mode: Systems Architect
- Voice: Master Voice (calm, precise, grounded)
- Audience: founders, creators, operators
- Surfaces: Homepage, Instagram, LinkedIn, Links page, any page reachable in ≤2 clicks

**Layer 2 — PRIVATE / CONTEXTUAL** (invitation-only)
- Mode: Oracle / Depth Work
- Voice: OnePagerBackup content (restrained)
- Audience: people already in relationship
- Surfaces: Hidden URL (`/private/oracle`), sent 1:1 after trust exists
- Not discoverable, not indexed, not linked publicly

### Implementation
- `/about` route removed (was pointing to OnePagerBackup)
- OnePagerBackup moved to `/private/oracle`
- No public navigation links to oracle content
- HomePage remains the primary public face

### Rationale
> "I'm not hiding my depth. I'm placing it where it belongs."

Each voice operates in the correct layer. The oracle capacity is real but contextual — shared only when trust already exists, not as a public-facing brand.

### What NOT to do
- Don't merge the two voices into one surface identity
- Don't add mystical/spiritual language to public pages
- Don't link to `/private/oracle` from navigation or footer
- Don't reopen this decision emotionally

---
