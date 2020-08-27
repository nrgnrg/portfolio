import { theme } from "@root/tailwind.config";

type Screens = { sm: string; md: string; lg: string; xl: string };

export const screens = (key: keyof Screens | null = null) => {
  if (key) return theme.screens[key];
  else {
    return Object.entries(theme.screens)
      .sort(([, a], [, b]) => (parseInt(a) > parseInt(b) ? 1 : -1))
      .map(([key, value]) => ({ handle: key, width: value }));
  }
};

export const colors = theme.colors;
