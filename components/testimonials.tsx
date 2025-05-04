"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";
import LogoIcon from "@/public/images/logo.svg";
import { useInView } from "@/components/utils/useInView";

const testimonials = [
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация обработки заявок с сайта",
    company: "Автоматизация",
    content:
      "Интегрировали сайт с Битрикс24. Все заявки теперь автоматически попадают в CRM, распределяются по менеджерам, не теряются. Результат: время обработки заявки сократилось в 2 раза, увеличилась конверсия в продажу.",
    categories: [1, 2],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Контроль и учет всех обращений клиентов",
    company: "Контроль",
    content:
      "Внедрили единое окно для всех каналов: сайт, мессенджеры, телефония. История общения с каждым клиентом всегда под рукой. Результат: сократились потери клиентов, повысился уровень сервиса.",
    categories: [1, 3],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация рассылок и напоминаний",
    company: "Маркетинг",
    content:
      "Настроили автоматические email и SMS-рассылки, напоминания о встречах и задачах. Результат: увеличилось количество повторных продаж, снизилось количество забытых задач.",
    categories: [1, 4],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Аналитика и отчеты для руководства",
    company: "Аналитика",
    content:
      "Реализовали автоматические отчеты по продажам, эффективности сотрудников, каналам привлечения. Результат: руководство принимает решения на основе данных, а не интуиции.",
    categories: [1, 5],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Интеграция с телефонией и мессенджерами",
    company: "Автоматизация",
    content:
      "Подключили телефонию и мессенджеры к CRM. Все звонки и сообщения теперь фиксируются в Битрикс24, история общения не теряется. Результат: повысился контроль и скорость обработки обращений.",
    categories: [1, 2, 3],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Внедрение бизнес-процессов согласования",
    company: "Автоматизация",
    content:
      "Настроили автоматические маршруты согласования заявок и документов. Результат: ускорилось принятие решений, снизилось количество ошибок и задержек.",
    categories: [1, 2],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Обучение сотрудников работе с CRM",
    company: "Контроль",
    content:
      "Провели обучение для команды клиента по работе с Битрикс24. Результат: сотрудники быстро освоили систему, повысилась дисциплина и прозрачность работы.",
    categories: [1, 3],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация повторных продаж",
    company: "Маркетинг",
    content:
      "Настроили автоматические напоминания и триггерные рассылки для повторных продаж. Результат: увеличилась доля возвратных клиентов и средний чек.",
    categories: [1, 4],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Контроль выполнения задач и KPI",
    company: "Контроль",
    content:
      "Внедрили систему контроля задач и автоматические отчеты по KPI сотрудников. Результат: повысилась исполнительская дисциплина и управляемость команды.",
    categories: [1, 3, 5],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Интеграция с 1С и обмен данными",
    company: "Автоматизация",
    content:
      "Реализовали двусторонний обмен данными между Битрикс24 и 1С. Результат: исключены дубли, ускорен документооборот, минимизированы ошибки.",
    categories: [1, 2],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация учета заявок на сервис",
    company: "Автоматизация",
    content:
      "Внедрили автоматический учет и распределение сервисных заявок. Результат: заявки не теряются, клиенты довольны скоростью обслуживания.",
    categories: [1, 2, 3],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация маркетинговых акций",
    company: "Маркетинг",
    content:
      "Настроили автоматические сценарии для проведения акций и распродаж. Результат: увеличился отклик клиентов и эффективность маркетинга.",
    categories: [1, 4],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация документооборота",
    company: "Автоматизация",
    content:
      "Внедрили электронный документооборот в CRM. Результат: ускорено согласование, минимизированы бумажные процессы.",
    categories: [1, 2],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация контроля оплат",
    company: "Контроль",
    content:
      "Настроили автоматические напоминания и контроль по неоплаченным счетам. Результат: уменьшилось количество просроченных оплат, улучшился денежный поток.",
    categories: [1, 3],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация сбора обратной связи",
    company: "Маркетинг",
    content:
      "Внедрили автоматические опросы и сбор отзывов после покупки. Результат: повысился уровень сервиса и лояльность клиентов.",
    categories: [1, 4],
  },
  {
    img: LogoIcon,
    clientImg: LogoIcon,
    name: "Автоматизация отчетности для руководства",
    company: "Аналитика",
    content:
      "Настроили автоматическую генерацию отчетов для руководства. Результат: экономия времени на подготовку отчетности, быстрый доступ к аналитике.",
    categories: [1, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Решённые задачи с помощью Битрикс24
          </h2>
          <p className="text-lg text-indigo-200/65">
            Примеры реальных задач, которые мы решали для клиентов:
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 1 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 1}
                onClick={() => setCategory(1)}
              >
                <svg
                  className={`fill-current ${category === 1 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <span>Все</span>
              </button>
              {/* Button #2 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 2 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 2}
                onClick={() => setCategory(2)}
              >
                <svg
                  className={`fill-current ${category === 2 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <rect x="3" y="3" width="10" height="10" rx="2" />
                </svg>
                <span>Автоматизация</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 3 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
                <svg
                  className={`fill-current ${category === 3 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Контроль</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 4 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <svg
                  className={`fill-current ${category === 4 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <span>Маркетинг</span>
              </button>
              {/* Button #5 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 5 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 5}
                onClick={() => setCategory(5)}
              >
                <svg
                  className={`fill-current ${category === 5 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <rect x="2" y="2" width="12" height="12" rx="6" />
                </svg>
                <span>Аналитика</span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials
              .filter((testimonial) => testimonial.categories.includes(category))
              .map((testimonial, index) => (
                <div key={index} className="group">
                  <Testimonial testimonial={testimonial} category={category}>
                    {testimonial.content}
                  </Testimonial>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-all duration-700 ease-out before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image src={testimonial.clientImg} height={36} alt="Case icon" />
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="text-sm font-medium text-gray-200">
          <span>{testimonial.name}</span>
          <span className="text-gray-700"> — </span>
          <span className="text-indigo-200/65">{testimonial.company}</span>
        </div>
      </div>
    </article>
  );
}
