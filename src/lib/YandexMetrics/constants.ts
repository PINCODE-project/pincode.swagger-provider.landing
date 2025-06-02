export const YANDEX_METRICS_PROD_ID = 102325152;

// Добавляем нужные события
export const YMGoalNames = {} as const;

export type YMGoalNamesEnum = (typeof YMGoalNames)[keyof typeof YMGoalNames];
