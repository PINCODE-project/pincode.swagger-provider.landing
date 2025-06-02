import { AnimatePresence, motion } from "framer-motion";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const FeatureNotification = () => {
  const [changelogNotification, setChangelogNotification] = useState(false);

  // Changelog animation
  useEffect(() => {
    const interval = setInterval(() => {
      setChangelogNotification(true);
      setTimeout(() => setChangelogNotification(false), 3000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="relative flex flex-col overflow-hidden border-gray-800/50 bg-gray-950/80 p-6 backdrop-blur-sm lg:col-span-2">
      <div className="mb-4 flex items-center justify-between">
        <div className="relative">
          <motion.div
            animate={
              changelogNotification
                ? {
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.1, 1],
                }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <Bell className="h-6 w-6 text-blue-400" />
          </motion.div>
          <AnimatePresence>
            {changelogNotification && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500"
              />
            )}
          </AnimatePresence>
        </div>
        <Badge
          variant="secondary"
          className="border-blue-500/30 bg-blue-500/20 text-blue-400"
        >
          Авто
        </Badge>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">
        Ченджлог
      </h3>
      <p className="mb-4 flex-1 text-sm text-gray-400">
        Автоматическое отслеживание изменений в схемах API
      </p>

      <div className="space-y-2">
        <AnimatePresence>
          {changelogNotification && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-lg border border-gray-700/50 bg-gray-900/80 p-3"
            >
              <div className="mb-1 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs text-green-400">v2.1.0</span>
              </div>
              <p className="text-xs text-gray-300">
                Добавлено поле &#34;status&#34; в User схему
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="rounded-lg border border-gray-700/30 bg-gray-900/50 p-3">
          <div className="mb-1 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-xs text-blue-400">v2.0.5</span>
          </div>
          <p className="text-xs text-gray-400">
            Обновлен endpoint /api/users
          </p>
        </div>
      </div>
    </Card>
  )
}