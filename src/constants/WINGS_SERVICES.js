import ENV from "./ENV";
import COUNTRY from "./COUNTRY";
import { CWINGS } from "@/lib/envHelper";

export default function getWingsServices() {
  return Object.keys(COUNTRY).flatMap((country) => [
    {
      env: ENV.DEV,
      name: COUNTRY[country],
      url: CWINGS.DEV[country],
    },
    {
      env: ENV.TEST,
      name: COUNTRY[country],
      url: CWINGS.TEST[country],
    },
    {
      env: ENV.PROD,
      name: COUNTRY[country],
      url: CWINGS.PROD[country],
    },
  ]);
}
