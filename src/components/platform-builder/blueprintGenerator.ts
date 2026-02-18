import type { WizardState, Feature } from './types';
import {
  businessTypeLabels, platformLabels, painPointLabels,
  featureLabels, scaleLabels, timelineLabels, recommendTier,
} from './wizardData';

const W = 58; // box inner width

function pad(text: string, width: number): string {
  return text + ' '.repeat(Math.max(0, width - text.length));
}

function boxTop(label: string): string {
  const inner = `─ ${label} `;
  return `┌${inner}${'─'.repeat(W - inner.length)}┐`;
}

function boxBottom(): string {
  return `└${'─'.repeat(W)}┘`;
}

function boxLine(text: string): string {
  return `│  ${pad(text, W - 2)}│`;
}

function boxEmpty(): string {
  return `│${' '.repeat(W)}│`;
}

function headerBlock(): string[] {
  const date = new Date().toISOString().split('T')[0];
  return [
    `╔${'═'.repeat(W)}╗`,
    `║  ${pad('ASTRAL INTEGRATION — PLATFORM BLUEPRINT', W - 2)}║`,
    `║  ${pad(`Generated ${date}`, W - 2)}║`,
    `╚${'═'.repeat(W)}╝`,
  ];
}

function clientBlock(state: WizardState): string[] {
  const platforms = state.currentPlatforms.map((p) => platformLabels[p]).join(', ') || 'None specified';
  return [
    boxTop('CLIENT'),
    boxLine(`Name:      ${state.contactInfo.name || '—'}`),
    boxLine(`Email:     ${state.contactInfo.email || '—'}`),
    boxLine(`Type:      ${state.businessType ? businessTypeLabels[state.businessType] : '—'}`),
    boxLine(`Current:   ${platforms}`),
    boxBottom(),
  ];
}

function painBlock(state: WizardState): string[] {
  if (state.painPoints.length === 0) return [];
  return [
    boxTop('PAIN POINTS'),
    ...state.painPoints.map((p) => boxLine(`✗  ${painPointLabels[p]}`)),
    boxBottom(),
  ];
}

// Architecture diagram — dynamically composed from selected features
function architectureBlock(state: WizardState): string[] {
  const feats = state.features;
  if (feats.length === 0) return [];

  // Map features to diagram boxes
  const boxes: { label: string; short: string }[] = [];
  const featureBoxMap: Record<Feature, { label: string; short: string }> = {
    'custom-platform': { label: 'PLATFORM', short: 'Custom' },
    'website': { label: 'WEBSITE', short: 'Custom' },
    'membership-courses': { label: 'MEMBERSHIP', short: 'Courses' },
    'community': { label: 'COMMUNITY', short: 'Forums' },
    'certification-system': { label: 'CERTIFIC.', short: 'Tracking' },
    'stays-booking': { label: 'BOOKING', short: 'Calendar' },
    'shop': { label: 'SHOP', short: 'Stripe' },
    'ai-assistant': { label: 'AI ASST.', short: 'Your voice' },
    'email-crm': { label: 'EMAIL', short: 'CRM' },
    'cross-platform-app': { label: 'MOBILE', short: 'iOS+And' },
  };

  feats.forEach((f) => {
    if (featureBoxMap[f]) boxes.push(featureBoxMap[f]);
  });

  if (boxes.length === 0) return [];

  const lines: string[] = [boxTop('PLATFORM ARCHITECTURE'), boxEmpty()];

  // Render boxes in rows of 3
  for (let i = 0; i < boxes.length; i += 3) {
    const row = boxes.slice(i, i + 3);
    const boxWidth = 12;

    // Top border of boxes
    let topLine = '  ';
    let midLine = '  ';
    let botLine = '  ';
    const connectors: string[] = [];

    row.forEach((box, j) => {
      const lbl = box.label.substring(0, boxWidth - 2);
      topLine += `┌${'─'.repeat(boxWidth)}┐`;
      midLine += `│${pad(` ${lbl}`, boxWidth)}│`;
      botLine += `└${'─'.repeat(boxWidth)}┘`;
      if (j < row.length - 1) {
        topLine += '  ';
        midLine += '─▸';
        botLine += '  ';
      }
      connectors.push(' '.repeat(boxWidth / 2));
    });

    lines.push(boxLine(topLine.trimEnd()));
    lines.push(boxLine(midLine.trimEnd()));
    lines.push(boxLine(botLine.trimEnd()));

    // Add vertical connectors between rows
    if (i + 3 < boxes.length) {
      let connLine = '  ';
      row.forEach((_, j) => {
        connLine += ' '.repeat(Math.floor(boxWidth / 2) + 1) + '│' + ' '.repeat(Math.ceil(boxWidth / 2));
        if (j < row.length - 1) connLine += '  ';
      });
      lines.push(boxLine(connLine.trimEnd()));
      let arrowLine = '  ';
      row.forEach((_, j) => {
        arrowLine += ' '.repeat(Math.floor(boxWidth / 2) + 1) + '▼' + ' '.repeat(Math.ceil(boxWidth / 2));
        if (j < row.length - 1) arrowLine += '  ';
      });
      lines.push(boxLine(arrowLine.trimEnd()));
    }
  }

  lines.push(boxEmpty());
  lines.push(boxBottom());
  return lines;
}

function featureTreeBlock(state: WizardState): string[] {
  const feats = state.features;
  if (feats.length === 0) return [];

  const coreFeatures: { name: string; note: string }[] = [];
  const modules: { name: string; note: string }[] = [];
  const integrations: { name: string; note: string }[] = [];

  // Categorize features
  feats.forEach((f) => {
    switch (f) {
      case 'website':
        coreFeatures.push({ name: 'custom-website', note: 'SEO, your brand' });
        break;
      case 'custom-platform':
        coreFeatures.push({ name: 'admin-dashboard', note: 'manage everything' });
        break;
      case 'cross-platform-app':
        coreFeatures.push({ name: 'mobile-app', note: 'iOS + Android' });
        break;
      case 'certification-system':
        modules.push({ name: 'certification-system', note: deepDiveNote(state, 'cert') });
        break;
      case 'membership-courses':
        modules.push({ name: 'membership-portal', note: 'gated content' });
        break;
      case 'community':
        modules.push({ name: 'community-hub', note: 'forums, discussions' });
        break;
      case 'stays-booking':
        modules.push({ name: 'stays-booking', note: 'calendar, availability' });
        break;
      case 'shop':
        modules.push({ name: 'shop', note: 'products, Stripe' });
        break;
      case 'ai-assistant':
        integrations.push({ name: 'ai-assistant', note: 'your methodology' });
        break;
      case 'email-crm':
        integrations.push({ name: 'email-crm', note: 'sequences, contacts' });
        break;
    }
  });

  // Always add mobile-responsive to core
  if (!coreFeatures.find((f) => f.name === 'mobile-app')) {
    coreFeatures.push({ name: 'mobile-responsive', note: 'all devices' });
  }

  // Add Stripe to integrations if shop or membership
  if (feats.includes('shop') || feats.includes('membership-courses')) {
    integrations.push({ name: 'stripe-payments', note: 'subs + one-time' });
  }

  const lines: string[] = [boxTop('FEATURE TREE'), boxEmpty()];

  lines.push(boxLine('platform/'));

  const addSection = (name: string, items: { name: string; note: string }[], isLast: boolean) => {
    const prefix = isLast ? '└── ' : '├── ';
    const childPrefix = isLast ? '    ' : '│   ';
    lines.push(boxLine(`${prefix}${name}/`));
    items.forEach((item, i) => {
      const itemPrefix = i === items.length - 1 ? '└── ' : '├── ';
      const noteStr = item.note ? ` ← ${item.note}` : '';
      lines.push(boxLine(`${childPrefix}${itemPrefix}${item.name}${noteStr}`));
    });
  };

  if (coreFeatures.length > 0) addSection('core', coreFeatures, modules.length === 0 && integrations.length === 0);
  if (modules.length > 0) addSection('modules', modules, integrations.length === 0);
  if (integrations.length > 0) addSection('integrations', integrations, true);

  lines.push(boxEmpty());
  lines.push(boxBottom());
  return lines;
}

function deepDiveNote(state: WizardState, type: string): string {
  if (!state.deepDive) return '';
  if (type === 'cert' && state.deepDive.variant === 'school') {
    const d = state.deepDive.data;
    const parts: string[] = [];
    if (d.certLevels) parts.push(`${d.certLevels} levels`);
    if (d.hasPrerequisites) parts.push('prereqs');
    return parts.join(', ') || 'tracking';
  }
  return '';
}

function deepDiveBlock(state: WizardState): string[] {
  if (!state.deepDive) return [];

  const { variant, data } = state.deepDive;

  if (variant === 'school') {
    const d = data;
    return [
      boxTop('DEEP DIVE: CERTIFICATION SCHOOL'),
      boxLine(`Levels:          ${d.certLevels || '—'} certification levels`),
      boxLine(`Students:        ${d.studentCount ? scaleLabels[d.studentCount] : '—'}`),
      boxLine(`Structure:       ${d.cohortStructure || '—'}`),
      boxLine(`Prerequisites:   ${d.hasPrerequisites === null ? '—' : d.hasPrerequisites ? 'Yes' : 'No'}`),
      boxLine(`Practice Hours:  ${d.needsPracticeTracking === null ? '—' : d.needsPracticeTracking ? 'Yes' : 'No'}`),
      boxBottom(),
    ];
  }

  if (variant === 'retreat') {
    const d = data;
    return [
      boxTop('DEEP DIVE: RETREAT CENTER'),
      boxLine(`Booking:         ${d.hasBooking === null ? '—' : d.hasBooking ? 'Yes' : 'No'}`),
      boxLine(`Accommodations:  ${d.hasAccommodations === null ? '—' : d.hasAccommodations ? 'Yes' : 'No'}`),
      boxLine(`Events:          ${d.hasEvents === null ? '—' : d.hasEvents ? 'Yes' : 'No'}`),
      boxLine(`Capacity:        ${d.capacity || '—'}`),
      boxLine(`Seasonality:     ${d.seasonality || '—'}`),
      boxBottom(),
    ];
  }

  if (variant === 'coach') {
    const d = data;
    return [
      boxTop('DEEP DIVE: PRACTITIONER'),
      boxLine(`Sessions:        ${d.sessionTypes.join(', ') || '—'}`),
      boxLine(`Client count:    ${d.clientCount ? scaleLabels[d.clientCount] : '—'}`),
      boxLine(`Content needs:   ${d.contentNeeds.join(', ') || '—'}`),
      boxBottom(),
    ];
  }

  if (variant === 'creator') {
    const d = data;
    return [
      boxTop('DEEP DIVE: CREATOR'),
      boxLine(`Audience:        ${d.audienceSize ? scaleLabels[d.audienceSize] : '—'}`),
      boxLine(`Content types:   ${d.contentTypes.join(', ') || '—'}`),
      boxLine(`Revenue model:   ${d.monetization.join(', ') || '—'}`),
      boxBottom(),
    ];
  }

  return [];
}

function recommendationBlock(state: WizardState): string[] {
  const rec = recommendTier(state.businessType, state.features);
  return [
    boxTop('RECOMMENDED'),
    boxLine(`Tier:      ${rec.tier} (${rec.price})`),
    boxLine(`Timeline:  ${rec.timeline}`),
    boxLine(`Model:     Partnership available (8–12% rev share)`),
    boxBottom(),
    '',
    '  ─── end of blueprint ───',
  ];
}

function scaleBlock(state: WizardState): string[] {
  return [
    boxTop('SCALE & TIMELINE'),
    boxLine(`Scale:     ${state.scale ? scaleLabels[state.scale] : '—'}`),
    boxLine(`Timeline:  ${state.timeline ? timelineLabels[state.timeline] : '—'}`),
    boxBottom(),
  ];
}

function notesBlock(state: WizardState): string[] {
  if (!state.contactInfo.notes.trim()) return [];
  return [
    boxTop('NOTES'),
    ...state.contactInfo.notes.split('\n').map((line) => boxLine(line)),
    boxBottom(),
  ];
}

export function generateBlueprint(state: WizardState): string {
  const sections = [
    ...headerBlock(),
    '',
    ...clientBlock(state),
    '',
    ...painBlock(state),
    '',
    ...architectureBlock(state),
    '',
    ...featureTreeBlock(state),
    '',
    ...deepDiveBlock(state),
    '',
    ...scaleBlock(state),
    '',
    ...notesBlock(state),
    '',
    ...recommendationBlock(state),
  ];

  return sections.join('\n');
}

// Plain text email summary (structured, no ASCII art)
export function generateEmailSummary(state: WizardState): string {
  const lines = [
    '=== PLATFORM BUILDER SUBMISSION ===',
    '',
    `Name: ${state.contactInfo.name}`,
    `Email: ${state.contactInfo.email}`,
    `Business Type: ${state.businessType ? businessTypeLabels[state.businessType] : '—'}`,
    `Current Setup: ${state.currentPlatforms.map((p) => platformLabels[p]).join(', ') || 'None'}`,
    '',
    'Pain Points:',
    ...state.painPoints.map((p) => `  - ${painPointLabels[p]}`),
    '',
    'Requested Features:',
    ...state.features.map((f) => `  - ${featureLabels[f]}`),
    '',
    `Scale: ${state.scale ? scaleLabels[state.scale] : '—'}`,
    `Timeline: ${state.timeline ? timelineLabels[state.timeline] : '—'}`,
    '',
    `Recommended Tier: ${recommendTier(state.businessType, state.features).tier}`,
    `Estimated Price: ${recommendTier(state.businessType, state.features).price}`,
    `Estimated Timeline: ${recommendTier(state.businessType, state.features).timeline}`,
    '',
    `Additional Notes: ${state.contactInfo.notes || 'None'}`,
  ];

  return lines.join('\n');
}
