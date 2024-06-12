import ENV from "./ENV";
import COUNTRY from "./COUNTRY";
import { CWINGS_DEV, CWINGS_TEST } from "../lib/envHelper";

export const WINGS_SERVICES = [
  {
    name: "cwings-uae",
    env: ENV.DEV,
    country: COUNTRY.AE,
    url: CWINGS_DEV.AE,
  },
  {
    name: "cwings-ksa",
    env: ENV.DEV,
    country: COUNTRY.SA,
    url: CWINGS_DEV.SA,
  },
  {
    name: "cwings-pak",
    env: ENV.TEST,
    country: COUNTRY.PK,
    url: CWINGS_TEST.PK,
  },
  {
    name: "cwings-kwt",
    env: ENV.TEST,
    country: COUNTRY.KW,
    url: CWINGS_TEST.KW,
  },
];
