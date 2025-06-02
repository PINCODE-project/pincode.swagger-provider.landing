"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  FileText,
  GitBranch,
  MousePointer2,
  Play,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeatureNotification } from "@/components/blocks/feature-notification";

export default function FeaturesBento() {
  const [activeNode, setActiveNode] = useState(0);
  const [hoveredSnippet, setHoveredSnippet] = useState<string | null>(null);
  const [draggedValue, setDraggedValue] = useState<string | null>(null);
  const [cursorPositions, setCursorPositions] = useState([
    { x: 20, y: 40, id: 1 },
    { x: 60, y: 80, id: 2 },
    { x: 40, y: 120, id: 3 },
  ]);
  const [documentContent, setDocumentContent] = useState({
    title: "# API Документация",
    description: "Описание основных методов API...",
    endpoint: "GET /api/users",
    endpointDesc: "Получить список пользователей",
  });

  // Graph animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Cursor animation with content changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPositions((prev) =>
        prev.map((pos) => ({
          ...pos,
          x: Math.random() * 70 + 15,
          y: Math.random() * 50 + 25,
        })),
      );

      // Change document content
      const contents = [
        {
          title: "# API Документация",
          description: "Описание основных методов API...",
          endpoint: "GET /api/users",
          endpointDesc: "Получить список пользователей",
        },
        {
          title: "# Аутентификация",
          description: "Методы для работы с токенами...",
          endpoint: "POST /api/auth/login",
          endpointDesc: "Авторизация пользователя",
        },
        {
          title: "# Управление данными",
          description: "CRUD операции для ресурсов...",
          endpoint: "PUT /api/data/{id}",
          endpointDesc: "Обновить запись по ID",
        },
      ];
      setDocumentContent(contents[Math.floor(Math.random() * contents.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const snippetData = {
    name: "John Doe",
    email: "john@example.com",
    id: 12345,
    status: "active",
  };

  const nodes = [
    {
      id: 1,
      type: "data",
      title: "Input Data",
      data: { userId: 123, filter: "active" },
      outputs: ["userId", "filter"],
    },
    {
      id: 2,
      type: "request",
      title: "GET /users",
      url: "/api/users/{userId}",
      inputs: ["userId"],
      outputs: ["userData", "status"],
    },
    {
      id: 3,
      type: "request",
      title: "POST /logs",
      url: "/api/logs",
      inputs: ["userData", "status"],
      outputs: ["logId"],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 top-3/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-green-500/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Vignette overlay */}
      <div className="bg-gradient-radial pointer-events-none absolute inset-0 from-transparent via-transparent to-black/60" />

      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Возможности
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              Мощные инструменты для работы с API и документацией
            </p>
          </div>

          <div className="grid h-[700px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Блики на карточках */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"
                animate={{
                  x: ["-50%", "150%"],
                  y: ["30%", "40%", "25%"],
                  scale: [1, 1.2, 0.9],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"
                animate={{
                  x: ["80%", "30%", "70%"],
                  y: ["70%", "40%", "60%"],
                  scale: [1, 1.3, 0.8],
                }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 2,
                }}
              />
            </div>

            {/* FeatureNotification */}
            <FeatureNotification />
            {/* Snippets Card - Large */}
            <Card className="relative overflow-hidden border-gray-800/70 bg-gray-950/90 p-6 shadow-lg shadow-purple-500/10 backdrop-blur-sm lg:col-span-3">
              {/* Цветное световое пятно на карточке */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                  className="absolute right-0 top-0 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.2, 0.3, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"
                  animate={{
                    scale: [0.9, 1.1, 1, 0.9],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>

              <div className="relative z-10 mb-4 flex items-center gap-2">
                <Database className="h-6 w-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">
                  Сниппеты данных
                </h3>
                <Badge
                  variant="secondary"
                  className="ml-auto border-purple-500/50 bg-purple-500/30 text-purple-300"
                >
                  Drag & Drop
                </Badge>
              </div>

              <p className="relative z-10 mb-6 text-sm text-gray-400">
                Сохраняйте и переиспользуйте данные из запросов
              </p>

              <div className="relative z-10 grid h-48 grid-cols-2 gap-4">
                {/* JSON Input Field */}
                <div className="relative overflow-hidden rounded-lg border border-gray-700/70 bg-gray-900/90 p-4 shadow-md">
                  {/* Световое пятно в JSON панели */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                      className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
                      animate={{
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <div className="relative z-10 mb-2 text-xs text-gray-400">
                    JSON Input
                  </div>
                  <div className="relative z-10 space-y-1 font-mono text-xs text-gray-300">
                    <div>{"{"}</div>
                    <div className="pl-2">
                      <motion.div
                        animate={{
                          opacity: draggedValue === "name" ? [0.5, 1, 0.5] : 1,
                        }}
                        transition={{
                          duration: 1,
                          repeat:
                            draggedValue === "name"
                              ? Number.POSITIVE_INFINITY
                              : 0,
                        }}
                        className="text-blue-400"
                      >
                        &#34;name&#34;: &#34;
                        {draggedValue === "name" ? "John Doe" : ""}&#34;,
                      </motion.div>
                    </div>
                    <div className="pl-2 text-green-400">
                      &#34;email&#34;: &#34;
                      {draggedValue === "email" ? "john@example.com" : ""}&#34;
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>

                {/* Snippets Panel */}
                <div className="relative overflow-hidden rounded-lg border border-gray-700/70 bg-gray-900/90 p-4 shadow-md">
                  {/* Световое пятно в панели сниппетов */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  <div className="relative z-10 mb-2 text-xs text-gray-400">
                    User Data Snippet
                  </div>
                  <div className="relative z-10 space-y-1 font-mono text-xs">
                    <div>{"{"}</div>
                    {Object.entries(snippetData).map(([key, value]) => (
                      <motion.div
                        key={key}
                        className="cursor-pointer pl-2"
                        onMouseEnter={() => setHoveredSnippet(key)}
                        onMouseLeave={() => setHoveredSnippet(null)}
                        onClick={() => setDraggedValue(key)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.span
                          className={`rounded px-1 transition-colors ${
                            hoveredSnippet === key
                              ? "bg-purple-500/30 text-purple-300"
                              : "text-gray-300"
                          }`}
                          animate={
                            hoveredSnippet === key
                              ? { backgroundColor: "rgba(168, 85, 247, 0.3)" }
                              : {}
                          }
                        >
                          &#34;{key}&#34;:{" "}
                          {typeof value === "string" ? `"${value}"` : value},
                        </motion.span>
                      </motion.div>
                    ))}
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Collections Card - Large */}
            <Card className="relative overflow-hidden border-gray-800/70 bg-gray-950/90 p-6 shadow-lg shadow-green-500/10 backdrop-blur-sm lg:col-span-3">
              {/* Цветное световое пятно на карточке */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-60 w-60 rounded-full bg-green-500/20 blur-3xl"
                  animate={{
                    scale: [1.1, 0.9, 1.2, 1.1],
                    opacity: [0.2, 0.3, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-emerald-500/15 blur-3xl"
                  animate={{
                    scale: [0.8, 1, 0.9, 0.8],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                />
              </div>

              <div className="relative z-10 mb-4 flex items-center gap-2">
                <GitBranch className="h-6 w-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white">
                  Коллекции запросов
                </h3>
                <Badge
                  variant="secondary"
                  className="ml-auto border-green-500/50 bg-green-500/30 text-green-300"
                >
                  Граф
                </Badge>
              </div>

              <p className="relative z-10 mb-6 text-sm text-gray-400">
                Визуальный редактор связанных API запросов
              </p>

              <div className="relative z-10 h-48 overflow-hidden rounded-lg border border-gray-700/70 bg-gray-900/90 p-4 shadow-md">
                <div className="flex h-full items-start justify-between">
                  {nodes.map((node, index) => (
                    <div key={node.id} className="relative">
                      {/* Connection lines */}
                      {index < nodes.length - 1 && (
                        <>
                          {/* Основная линия от выхода к следующей ноде */}
                          <motion.div
                            className="absolute left-full top-[55%] h-0.5 w-16 bg-gradient-to-r from-green-500 to-blue-500"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: activeNode > index ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ transformOrigin: "left" }}
                          >
                            <motion.div
                              className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-500"
                              animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.2, 0.8],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>

                          {/* Анимированные частицы на линии */}
                          {activeNode > index && (
                            <motion.div
                              className="absolute left-full top-[55%] h-1.5 w-1.5 rounded-full bg-green-400"
                              animate={{
                                x: [0, 64],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                            />
                          )}
                        </>
                      )}

                      {/* Node card */}
                      <motion.div
                        className={`w-32 rounded-lg border ${
                          activeNode >= index
                            ? "border-green-500/70 bg-green-500/20"
                            : "border-gray-600/70"
                        } relative overflow-hidden bg-gray-800/90 p-3 shadow-md`}
                        animate={{
                          scale: activeNode === index ? 1.05 : 1,
                          borderColor:
                            activeNode >= index
                              ? "rgba(34, 197, 94, 0.7)"
                              : "rgba(75, 85, 99, 0.7)",
                        }}
                      >
                        {/* Световое пятно в ноде */}
                        {activeNode >= index && (
                          <div className="absolute inset-0 z-0 overflow-hidden">
                            <motion.div
                              className={`absolute ${
                                index === 0
                                  ? "bottom-0 right-0 h-40 w-40 bg-blue-500/30"
                                  : index === 1
                                    ? "left-0 top-0 h-40 w-40 bg-green-500/30"
                                    : "right-0 top-0 h-40 w-40 bg-yellow-500/30"
                              } rounded-full blur-2xl`}
                              animate={{
                                scale: [0.8, 1, 0.9, 0.8],
                                opacity: [0.4, 0.6, 0.4],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        )}

                        {/* Эффект свечения внутри ноды */}
                        {activeNode >= index && (
                          <motion.div
                            className="absolute inset-0 z-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        )}

                        <div className="relative z-10 mb-1 truncate text-xs font-medium text-white">
                          {node.title}
                        </div>

                        {node.type === "request" && (
                          <div className="relative z-10 mb-2 truncate rounded bg-gray-700/50 px-1.5 py-1 font-mono text-[10px] text-green-300">
                            {node.url}
                          </div>
                        )}

                        {node.type === "data" && node.data && (
                          <div className="relative z-10 mb-2 space-y-1">
                            {Object.entries(
                              node.data as Record<string, string | number>,
                            ).map(([key, value]) => (
                              <div
                                key={key}
                                className="flex text-[10px] text-gray-300"
                              >
                                <span className="text-blue-400">{key}:</span>
                                <span className="ml-1 truncate">
                                  {String(value)}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Input parameters */}
                        {node.inputs && node.inputs.length > 0 && (
                          <div className="relative z-10 mb-1">
                            <div className="text-[9px] text-gray-400">
                              Inputs:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {node.inputs.map((input) => (
                                <div
                                  key={input}
                                  className="relative flex items-center"
                                >
                                  <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 transform rounded-full border border-blue-500/50 bg-blue-500/30" />
                                  <span className="ml-2 text-[9px] text-blue-300">
                                    {input}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Output parameters */}
                        {node.outputs && node.outputs.length > 0 && (
                          <div className="relative z-10">
                            <div className="text-[9px] text-gray-400">
                              Outputs:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {node.outputs.map((output) => (
                                <div
                                  key={output}
                                  className="relative flex items-center"
                                >
                                  <span className="mr-2 text-[9px] text-green-300">
                                    {output}
                                  </span>
                                  <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 transform rounded-full border border-green-500/50 bg-green-500/30" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-2 right-2 flex items-center gap-2 text-xs text-gray-400">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Play className="h-3 w-3" />
                  </motion.div>
                  Выполнение...
                </div>
              </div>
            </Card>

            {/* Documentation Card */}
            <Card className="relative overflow-hidden border-gray-800/70 bg-gray-950/90 p-6 shadow-lg shadow-orange-500/10 backdrop-blur-sm lg:col-span-2">
              {/* Цветное световое пятно на карточке */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                  className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl"
                  animate={{
                    scale: [0.9, 1.1, 0.8, 0.9],
                    opacity: [0.2, 0.3, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute left-10 top-10 h-40 w-40 rounded-full bg-yellow-500/15 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>

              <div className="relative z-10 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-orange-400" />
                <h3 className="text-lg font-semibold text-white">
                  Документация
                </h3>
              </div>

              <p className="relative z-10 mb-4 text-sm text-gray-400">
                Интерактивная документация с встроенными REST блоками
              </p>

              <div className="relative z-10 h-48 overflow-hidden rounded-lg border border-gray-700/70 bg-gray-900/90 p-4 shadow-md">
                {/* Цветное световое пятно в документации */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.div
                    className="absolute right-5 top-5 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl"
                    animate={{
                      scale: [0.8, 1, 0.8],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-5 left-10 h-32 w-32 rounded-full bg-green-500/20 blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </div>

                {/* Animated cursors */}
                {cursorPositions.map((pos) => (
                  <motion.div
                    key={pos.id}
                    className="pointer-events-none absolute z-10"
                    animate={{ x: `${pos.x}%`, y: `${pos.y}%` }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    <MousePointer2
                      className={`h-4 w-4 ${
                        pos.id === 1
                          ? "text-blue-400"
                          : pos.id === 2
                            ? "text-purple-400"
                            : "text-green-400"
                      }`}
                    />
                  </motion.div>
                ))}

                {/* Document content */}
                <div className="relative z-10 space-y-3 text-xs">
                  <motion.div
                    key={documentContent.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium text-white"
                  >
                    {documentContent.title}
                  </motion.div>

                  <motion.div
                    key={documentContent.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400"
                  >
                    {documentContent.description}
                  </motion.div>

                  <motion.div
                    key={documentContent.endpoint}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="rounded border border-gray-600/50 bg-gray-800/80 p-2"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="h-5 border-green-700/50 bg-green-950/50 px-1.5 py-0 font-mono text-[10px] text-green-400"
                      >
                        GET
                      </Badge>
                      <span className="font-mono text-[11px] text-green-400">
                        {documentContent.endpoint}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {documentContent.endpointDesc}
                    </div>

                    {/* Пример кнопок документации */}
                    <div className="mt-2 flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="rounded-sm bg-gray-700/50 px-2 py-0.5 text-[10px] text-gray-300 hover:bg-gray-700"
                      >
                        Пример
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="rounded-sm bg-gray-700/50 px-2 py-0.5 text-[10px] text-gray-300 hover:bg-gray-700"
                      >
                        Схема
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="rounded-sm bg-blue-700/30 px-2 py-0.5 text-[10px] text-blue-300 hover:bg-blue-700/50"
                      >
                        Выполнить
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
