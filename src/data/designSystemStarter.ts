export const designSystemStarter = {
  name: 'Design System Starter',
  kicker: 'Starter kit · Design systems',
  repo: 'https://github.com/hulksmashmouth/design-system-starter',
  tagline:
    'A pnpm monorepo starter kit for standing up a themeable, multi-brand design system — tokens, icons, illustrations, and web components in one place.',
  overview:
    'A starter kit for teams building a design system from scratch. It is a pnpm workspace of four packages — design tokens, icons, illustrations, and UI components — wired together so one set of token names drives every component and swapping themes is a data change, not a code change. Style Dictionary compiles tokens to CSS custom properties and JSON; components are Stencil web components wrapping Material Web Components, so they inherit whichever theme is active with no per-component branching. It ships with a generic default theme plus a fully worked example theme (a dark, glassy look) to show the multi-theme system in use.',
  packages: [
    {
      label: 'design-tokens',
      value:
        'Style Dictionary build. A theme-agnostic core (spacing, type, elevation, border width) plus swappable themes that own color, radius, gradient, blur, and shadow — emitted as CSS custom properties and flat/nested JSON per theme.',
    },
    {
      label: 'icons',
      value: 'Material Design icon set compiled to a single SVG sprite.',
    },
    {
      label: 'illustrations',
      value: 'Shared illustration assets published as their own package.',
    },
    {
      label: 'ui-components',
      value:
        'Stencil web components (button, input, checkbox, select) built on Material Web Components, documented in Storybook.',
    },
  ],
  highlights: [
    {
      title: 'One vocabulary, many looks',
      caption:
        'Every theme defines the same token names. A theme that doesn’t want an effect still defines it with an inert value (0px blur, a flat “gradient”), so components never carry theme-conditional code.',
    },
    {
      title: 'Shape is a brand decision',
      caption:
        'Corner radius lives per-theme, not in the core, because two brands can disagree on rounding as much as they disagree on color.',
    },
    {
      title: 'Add a theme in three steps',
      caption:
        'Drop in a JSON file with the same token names, add it to the build list, and rebuild — you get CSS scoped to [data-theme="…"] plus per-theme JSON exports.',
    },
    {
      title: 'Material Web, re-themed',
      caption:
        'The Stencil components wrap Material Web Components and remap MWC’s system colors onto the token layer, so wrapped Material components re-theme along with everything else.',
    },
    {
      title: 'Change the prefix once',
      caption:
        'The company token prefix is a single config value; every CSS variable and JSON key rebuilds with it.',
    },
  ],
  stack: [
    'pnpm workspaces',
    'Style Dictionary',
    'Stencil',
    'Material Web Components',
    'Storybook',
    'TypeScript',
  ],
}
