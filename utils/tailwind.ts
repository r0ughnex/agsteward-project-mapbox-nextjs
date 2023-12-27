import customTailwindConfig from "@/tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

function getTheme() {
  return resolveConfig(customTailwindConfig).theme;
}

function getThemeColor(name: string, removeHash = false) {
  const color = {
    ...(getTheme()?.colors?.[name] as Record<string, string>),
  };

  if (removeHash) {
    Object.entries(color).forEach(([key, value]) => {
      color[key] = value.replaceAll("#", "");
    });
  }

  return color;
}

export function getColorThemeGrey(removeHash = false) {
  // Destructured custom colors should exist in the 'tailwind.config.ts'.
  const { DEFAULT, light, dark } = getThemeColor("theme-grey", removeHash);
  return {
    DEFAULT,
    light,
    dark,
  };
}

export function getColorThemeOrange(removeHash = false) {
  // Destructured custom colors should exist in the 'tailwind.config.ts'.
  const { DEFAULT, light } = getThemeColor("theme-orange", removeHash);
  return {
    DEFAULT,
    light,
  };
}

export function getColorThemeGreen(removeHash = false) {
  // Destructured custom colors should exist in the 'tailwind.config.ts'.
  const { DEFAULT, light } = getThemeColor("theme-green", removeHash);
  return {
    DEFAULT,
    light,
  };
}
