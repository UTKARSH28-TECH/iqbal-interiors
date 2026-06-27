/** A button in the contact CTA. */
export interface ContactCtaButton {
  label: string;
  href: string;
}

/** Content for the final Contact CTA section. */
export interface ContactCtaContent {
  eyebrow: string;
  heading: string;
  paragraph: string;
  /** Short reassurance line beneath the buttons. */
  reassurance: string;
  /** Primary action label (WhatsApp href is resolved by the component). */
  primaryLabel: string;
  secondary: ContactCtaButton;
}
