export const COLORS = {
  primary: "text-[var(--color-primary)]",
  primaryBg: "bg-[var(--color-primary)]",
  primaryDarkBg: "bg-[var(--color-primary-dark)]",
  accent: "text-[var(--color-accent)]",
  accentBg: "bg-[var(--color-accent)]",
  accentHover: "hover:bg-[var(--color-accent-dark)]",
  textHeading: "text-[var(--color-text-heading)]",
  textBody: "text-[var(--color-text-body)]",
  textMuted: "text-[var(--color-text-muted)]",
  textInverted: "text-[var(--color-text-inverted)]",
  surface: "bg-[var(--color-surface)]",
  surfaceAlt: "bg-[var(--color-surface-alt)]",
  border: "border-[var(--color-border)]",
};

export const TYPOGRAPHY = {
  h1: "text-4xl font-bold leading-tight",
  h2: "text-3xl font-bold leading-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  body: "text-base font-normal leading-relaxed",
  bodySmall: "text-sm font-normal leading-relaxed",
  label: "text-sm font-medium",
  muted: "text-sm text-[var(--color-text-muted)]",
};

export const LAYOUT = {
  section: "py-16 px-6",
  sectionAlt: "py-16 px-6 bg-[var(--color-surface-alt)]",
  container: "max-w-7xl mx-auto",
  card: "bg-[var(--color-surface)] rounded-lg shadow-md p-6 border border-[var(--color-border)]",
};

export const BUTTONS = {
  primary:
    "bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary-dark)] font-semibold px-6 py-3 rounded-md transition-colors duration-200",
  secondary:
    "border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)] font-semibold px-6 py-3 rounded-md transition-colors duration-200",
  ghost:
    "text-[var(--color-text-muted)] hover:text-[var(--color-primary)] font-medium px-4 py-2 transition-colors duration-200",
};
