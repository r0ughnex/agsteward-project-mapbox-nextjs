import customTailwindConfig, { CustomColor } from "@/tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

function getTheme() {
  return resolveConfig(customTailwindConfig).theme;
}

function getThemeColor(name: CustomColor, removeHash = false) {
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
  // Destructured keys in custom color should exist in the 'tailwind.config.ts'.
  const { DEFAULT, light, dark } = getThemeColor(
    CustomColor.ThemeGrey,
    removeHash
  );

  return {
    DEFAULT,
    light,
    dark,
  };
}

export function getColorThemeGreen(removeHash = false) {
  // Destructured keys in custom color should exist in the 'tailwind.config.ts'.
  const { DEFAULT, light } = getThemeColor(CustomColor.ThemeGreen, removeHash);

  return {
    DEFAULT,
    light,
  };
}

export function getColorThemeOrange(removeHash = false) {
  // Destructured keys in custom color should exist in the 'tailwind.config.ts'.
  const { DEFAULT, light } = getThemeColor(CustomColor.ThemeOrange, removeHash);

  return {
    DEFAULT,
    light,
  };
}
