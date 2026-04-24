import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

// 1. Свойства, отвечающие за раскладку (layout)
const layoutProperties = defineProperties({
  properties: {
    display: ["block", "inline-block", "flex", "inline-flex", "none"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    alignItems: ["flex-start", "flex-end", "center", "stretch"],
    gap: {
      sm: "8px", // или var(--spacing-sm)
      md: "16px",
      lg: "24px",
    },
    padding: {
      sm: "8px",
      md: "16px",
      lg: "24px",
    },
    width: {
      auto: "auto",
      "fit-content": "fit-content",
      "min-content": "min-content",
      "100%": "100%",
    },
    height: {
      auto: "auto",
      "fit-content": "fit-content",
      "min-content": "min-content",
      "100%": "100%",
    },
  },
  shorthands: {
    justify: ["justifyContent"],
    align: ["alignItems"],
    w: ["width"],
    h: ["height"],
    p: ["padding"],
  },
});

// 2. Свойства, отвечающие за цвета (используем твои токены)
const colorProperties = defineProperties({
  properties: {
    color: {
      primary: "var(--kumi-colors-primary)",
      "on-primary": "var(--kumi-colors-on-primary)",
      surface: "var(--kumi-colors-surface)",
      text: "var(--kumi-colors-text)",
      // ... добавь остальные токены
    },
    backgroundColor: {
      primary: "var(--kumi-colors-primary)",
      surface: "var(--kumi-colors-surface)",
      "surface-low": "var(--kumi-colors-surface-low)",
      "surface-high": "var(--kumi-colors-surface-high)",
      // ... добавь остальные токены
    },
  },
  shorthands: {
    bg: ["backgroundColor"],
  },
});

// Создаем функцию, которая будет конвертировать пропсы в классы
export const boxSprinkles = createSprinkles(layoutProperties, colorProperties);

// Вытаскиваем типы пропсов напрямую из Sprinkles, чтобы не писать их вручную в Box.tsx
export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
