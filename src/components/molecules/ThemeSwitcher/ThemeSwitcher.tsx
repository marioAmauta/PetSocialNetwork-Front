"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ComponentType, SVGProps } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, Skeleton } from "@/components";

interface ThemesType {
  label: string;
  value: "light" | "dark" | "system";
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const themes: ThemesType[] = [
  {
    label: "Sistema",
    value: "system",
    Icon: Monitor
  },
  {
    label: "Claro",
    value: "light",
    Icon: Sun
  },
  {
    label: "Oscuro",
    value: "dark",
    Icon: Moon
  }
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if( !mounted ){
    return <Skeleton className="h-10" />;
  }

  return (
    <Select defaultValue={theme} onValueChange={setTheme}>
      <SelectTrigger className="mx-auto h-10 w-fit gap-2 border-none shadow-none">
				Color
        {themes.map(({ value, Icon, label }) =>
          theme === value ? (
            <div key={value} className="flex items-center gap-2">
              <Icon className="size-4" />
              <span>{label}</span>
            </div>
          ) : null
        )}
      </SelectTrigger>

      <SelectContent align="center" className="dark:bg-[#10061d]">
        {themes.map(({ Icon, value, label }) => (
          <SelectItem key={value} value={value} className=" hover:bg-purple-100 dark:hover:bg-purple-950/20">
            <div className="flex w-full items-center justify-center gap-2">
              <Icon className="size-4" />
              <span>{label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default ThemeSwitcher;
