import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Хотите узнать, как CRM поможет вашему бизнесу?
            </h2>
            <p className="mb-8 text-lg text-indigo-200/65">
              Оставьте заявку — мы бесплатно проконсультируем, подберём оптимальное решение и расскажем, как CRM Битрикс24 поможет вашему бизнесу расти и экономить ресурсы.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white hover:bg-[length:100%_150%] sm:w-auto"
                  href="https://t.me/axbuild"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Оставить заявку
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="https://t.me/axbuild"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Позвонить нам
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
