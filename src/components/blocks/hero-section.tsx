"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Menu, RocketIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";
import { HeroHeader } from "@/components/blocks/header";


const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 isolate z-[2] hidden opacity-50 contain-strict lg:block"
        >
          <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute left-0 top-0 h-[80rem] w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="absolute left-0 top-0 h-[80rem] w-56 -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        {/*<div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 ">*/}
        {/*  <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>*/}
        {/*  <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>*/}
        {/*  <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>*/}
        {/*</div>*/}
        {/*<div className="absolute inset-0 z-0 bg-noise opacity-30"></div>*/}
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="/images/background1.png"
                alt="background"
                className="absolute inset-x-0 -z-20 hidden dark:!block"
                width={3276}
                height={4095}
              />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
                  >
                    <RocketIcon width="16" className="stroke-blue-400" />
                    <span className="text-sm text-foreground">
                      Новое поколение API документации
                    </span>
                    <span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700"></span>

                    <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-bold sm:text-6xl md:text-7xl lg:mt-16">
                    API документация — без хаоса
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Централизованное управление Swagger-схемами с автоматическим
                    контролем версий и оповещениями.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="rounded-[14px] border bg-foreground/10 p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Начать бесплатно</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Документация</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-background"
                />
                <div className="inset-shadow-2xs dark:inset-shadow-white/20 relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background">
                  <img
                    className="aspect-15/8 relative hidden rounded-2xl bg-background dark:block"
                    src="/images/demo.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 aspect-15/8 relative rounded-2xl border border-border/25 dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        {/*<section className="bg-background pb-16 pt-16 md:pb-32">*/}
        {/*  <div className="group relative m-auto max-w-5xl px-6">*/}
        {/*    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">*/}
        {/*      <Link*/}
        {/*        href="/"*/}
        {/*        className="block text-sm duration-150 hover:opacity-75"*/}
        {/*      >*/}
        {/*        <span> Meet Our Customers</span>*/}

        {/*        <ChevronRight className="ml-1 inline-block size-3" />*/}
        {/*      </Link>*/}
        {/*    </div>*/}
        {/*    <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">*/}
        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-5 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/nvidia.svg"*/}
        {/*          alt="Nvidia Logo"*/}
        {/*          height="20"*/}
        {/*          width="auto"*/}
        {/*        />*/}
        {/*      </div>*/}

        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-4 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/column.svg"*/}
        {/*          alt="Column Logo"*/}
        {/*          height="16"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-4 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/github.svg"*/}
        {/*          alt="GitHub Logo"*/}
        {/*          height="16"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-5 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/nike.svg"*/}
        {/*          alt="Nike Logo"*/}
        {/*          height="20"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-5 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"*/}
        {/*          alt="Lemon Squeezy Logo"*/}
        {/*          height="20"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-4 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/laravel.svg"*/}
        {/*          alt="Laravel Logo"*/}
        {/*          height="16"*/}
        {/*          width="auto"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-7 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/lilly.svg"*/}
        {/*          alt="Lilly Logo"*/}
        {/*          height="28"*/}
        {/*          width="auto"*/}
        {/*        />*/}
        {/*      </div>*/}

        {/*      <div className="flex">*/}
        {/*        <img*/}
        {/*          className="mx-auto h-6 w-fit dark:invert"*/}
        {/*          src="https://html.tailus.io/blocks/customers/openai.svg"*/}
        {/*          alt="OpenAI Logo"*/}
        {/*          height="24"*/}
        {/*          width="auto"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>
    </>
  );
}