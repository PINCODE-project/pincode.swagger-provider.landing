import { YANDEX_METRICS_PROD_ID, YMGoalNamesEnum } from './constants';

/** Трекаем достижение цели в Яндекс метрику
 *
 * Все цели: https://confluence.pcbltools.ru/confluence/pages/viewpage.action?pageId=183317051
 *
 * Инициализация метрики происходит тут: `app/layout.tsx`
 */
export const ymReachGoal = (goalName: YMGoalNamesEnum, payload?: object) => {
  if (window.ym) {
    const goalPayload: Record<string, object> = {};

    if (payload) {
      // Событие с пейлоадом всегда пишет в ключ goalName внутри себя, автоматизируем это чтобы не копипастить
      goalPayload[goalName] = payload;
    }

    window.ym(YANDEX_METRICS_PROD_ID, 'reachGoal', goalName, goalPayload);
  } else {
    // console.warn потому, что ошибки аналитики в консоли заставляют людей создавать BUG задачи и паниковать, когда этого делать не обязательно: сообщения несут только информативный характер и не влияют на работу приложения.
    console.warn('ymReachGoal: Яндекс метрика не инициирована, не удалось собрать событие.');
  }
};
