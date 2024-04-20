import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

// sleep 함수는 ms 시간이 흐른 후 - setTimeout 에 의해, resolve 콜백 함수가 실행됨
// sleep(1000) : 10초 동안 기다리는 함수

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min); // 올림
  max = Math.floor(max); // 버림

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomElementFromArray(arr: any[]) {
  const len = arr?.length;
  return arr[getRandomInt(0, len - 1)];
}
