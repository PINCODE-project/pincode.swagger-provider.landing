import Script from 'next/script';
import { JSX } from 'react';

import { YANDEX_METRICS_PROD_ID } from './constants';

/**
 * Компонент для интеграции Яндекс.Метрики.

 * Этот компонент вставляет скрипт Яндекс.Метрики на страницу для отслеживания пользовательского поведения и сбора аналитики.
 * Скрипт загружается асинхронно после того, как страница будет готова для взаимодействия.
 * Яндекс.Метрика предоставляет подробную аналитику по посещаемости сайта, включая карты кликов, отслеживание переходов и вебвизор.
 *
 * @returns {JSX.Element} Компонент Script, который внедряет скрипт Яндекс.Метрики на страницу.
 *
 * @example
 * // Использование компонента YandexMetricsScript в вашем проекте:
 * <YandexMetricsScript />*
 */
export const YandexMetricsScript = (): JSX.Element => (
  <Script
    id="yandex_metrika_script"
    strategy="afterInteractive" // Гарантирует, что скрипт будет загружен после рендеринга страницы
    dangerouslySetInnerHTML={{
      __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
                    ym(${YANDEX_METRICS_PROD_ID}, "init", {
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true,
                          webvisor:true
                    });`,
    }}
  />
);
