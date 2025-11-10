import en from "@/locales/en.json";
import es from "@/locales/es.json";

export function getDictionary(locale: string) {
  switch (locale) {
    case "es":
      return es;
    default:
      return en;
  }
}
