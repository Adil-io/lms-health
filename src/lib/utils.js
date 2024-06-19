import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const fetchServiceInfo = async (service) => {
  try {
    const res = await fetch(service.healthUrl);

    if (res.status != 200) {
      const json = await res.json();
      return {
        ...service,
        health: false,
        healthMessage: json.message,
      };
    }

    const message = await res.text();
    return {
      ...service,
      health: true,
      healthMessage: message,
    };
  } catch (error) {
    return {
      ...service,
      health: false,
      healthMessage: error.message,
    };
  }
};
