import customTailwindConfig, { CustomColor } from "@/tailwind.config";
import {
  getColorThemeGreen,
  getColorThemeGrey,
  getColorThemeOrange,
} from "../tailwind";

describe("utils/tailwind", () => {
  const removeHashFromColor = (color: unknown) => {
    return Object.entries(color as any).reduce(
      (color = {}, [key, value]: [string, unknown]) => {
        return { ...color, [key]: (value as string)?.replaceAll("#", "") };
      },
      {} as any
    );
  };

  describe("getColorThemeGrey()", () => {
    const { colors } = customTailwindConfig?.theme?.extend ?? {};
    const colorThemeGreyDefault = (colors as any)?.[CustomColor.ThemeGrey];
    const colorThemeGreyNoHash = removeHashFromColor(colorThemeGreyDefault);

    test("it should return the configured custom 'theme-grey' color ('removeHash' is 'false')", () => {
      // By default 'removeHash' is set to be 'false'.
      expect(getColorThemeGrey(/* false */)).toEqual({
        DEFAULT: colorThemeGreyDefault.DEFAULT,
        light: colorThemeGreyDefault.light,
        dark: colorThemeGreyDefault.dark,
      });
    });

    test("it should return the configured custom 'theme-grey' color ('removeHash' is 'true')", () => {
      expect(getColorThemeGrey(true)).toEqual({
        DEFAULT: colorThemeGreyNoHash.DEFAULT,
        light: colorThemeGreyNoHash.light,
        dark: colorThemeGreyNoHash.dark,
      });
    });
  });

  describe("getColorThemeGreen()", () => {
    const { colors } = customTailwindConfig?.theme?.extend ?? {};
    const colorThemeGreenDefault = (colors as any)?.[CustomColor.ThemeGreen];
    const colorThemeGreenNoHash = removeHashFromColor(colorThemeGreenDefault);

    test("it should return the configured custom 'theme-green' color ('removeHash' is 'false')", () => {
      // By default 'removeHash' is set to be 'false'.
      expect(getColorThemeGreen(/* false */)).toEqual({
        DEFAULT: colorThemeGreenDefault.DEFAULT,
        light: colorThemeGreenDefault.light,
      });
    });

    test("it should return the configured custom 'theme-green' color ('removeHash' is 'true')", () => {
      expect(getColorThemeGreen(true)).toEqual({
        DEFAULT: colorThemeGreenNoHash.DEFAULT,
        light: colorThemeGreenNoHash.light,
      });
    });
  });

  describe("getColorThemeOrange()", () => {
    const { colors } = customTailwindConfig?.theme?.extend ?? {};
    const colorThemeOrangeDefault = (colors as any)?.[CustomColor.ThemeOrange];
    const colorThemeOrangeNoHash = removeHashFromColor(colorThemeOrangeDefault);

    test("it should return the configured custom 'theme-orange' color ('removeHash' is 'false')", () => {
      // By default 'removeHash' is set to be 'false'.
      expect(getColorThemeOrange(/* false */)).toEqual({
        DEFAULT: colorThemeOrangeDefault.DEFAULT,
        light: colorThemeOrangeDefault.light,
      });
    });

    test("it should return the configured custom 'theme-orange' color ('removeHash' is 'true')", () => {
      expect(getColorThemeOrange(true)).toEqual({
        DEFAULT: colorThemeOrangeNoHash.DEFAULT,
        light: colorThemeOrangeNoHash.light,
      });
    });
  });
});
