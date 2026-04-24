import type { ButtonState } from "@base-ui/react";
import { css } from "@emotion/css";
import type { CSSObject, CSSProperties } from "@emotion/serialize";
import clsx from "clsx";

const COLOR_KEYS = [
  "primary",
  "primary-hover",
  "secondary",
  "secondary-hover",
  "secondary-ghost-hover",
  "tertiary",
  "tertiary-hover",
  "ghost",
  "ghost-hover",
  "on-primary",
  "on-secondary",
  "on-tertiary",
  "surface",
  "surface-high",
  "surface-highest",
  "text-low",
  "text",
  "text-high",
  "accent",
] as const;
const SPACING_KEYS = ["sm", "md", "lg"] as const;

export type ColorToken = (typeof COLOR_KEYS)[number];
export type SpacingToken = (typeof SPACING_KEYS)[number];

export const TOKEN_MAP: Record<string, string> = Object.create(null);

COLOR_KEYS.forEach((key) => {
  TOKEN_MAP[key] = `var(--kumi-colors-${key})`;
});

SPACING_KEYS.forEach((key) => {
  TOKEN_MAP[key] = `var(--kumi-spacing-${key})`;
});

export const improveEmotionStyles = (input: Record<string, any>): CSSObject => {
  const output: any = {};

  for (const key in input) {
    const value = input[key];

    if (typeof value === "object" && value !== null) {
      output[key] = improveEmotionStyles(value);
    } else if (typeof value === "string" && TOKEN_MAP[value]) {
      output[key] = TOKEN_MAP[value];
    } else {
      output[key] = value;
    }
  }

  return output;
};

// Исправлено: вместо typeof COLOR_KEYS (который является типом массива),
// используем ColorToken/SpacingToken.
// Omit нужен, чтобы не было конфликтов со стандартными типами CSSObject.
export interface KumiEnhancedStyles extends CSSObject {
  color?: CSSProperties["color"] | ColorToken;
  backgroundColor?: CSSProperties["backgroundColor"] | ColorToken;
  padding?: CSSProperties["padding"] | SpacingToken;
  gap?: CSSProperties["gap"] | SpacingToken;
  width?: CSSProperties["width"] | SpacingToken;
  height?: CSSProperties["height"] | SpacingToken;
}

export type KumiStyles = KumiEnhancedStyles;

export const kumi = (
  styles: KumiStyles,
  className?: string | string[] | ((state: ButtonState) => string | undefined),
) => {
  const result = css(improveEmotionStyles(styles as Record<string, any>));
  return clsx(result, className);
};
