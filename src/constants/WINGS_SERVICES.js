import { CWINGS } from '@/lib/envHelper';
import COUNTRY from './COUNTRY';
import ENV from './ENV';

export default function getWingsServices() {
  return Object.keys(COUNTRY).flatMap((country) => [
    {
      env: ENV.DEV,
      serviceName: COUNTRY[country].serviceName,
      country: COUNTRY[country].countryName,
      healthUrl: CWINGS.DEV[country],
    },
    // {
    //   env: ENV.TEST,
    //   serviceName: COUNTRY[country].serviceName,
    //   country: COUNTRY[country].countryName,
    //   healthUrl: CWINGS.TEST[country],
    // },
    // {
    //   env: ENV.PROD,
    //   serviceName: COUNTRY[country].serviceName,
    //   country: COUNTRY[country].countryName,
    //   healthUrl: CWINGS.PROD[country],
    // },
  ]);
}
