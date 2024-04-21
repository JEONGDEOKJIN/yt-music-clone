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


export function chunkArray(arr: unknown[], chunkSize: number) {
  // 나와야 하는 결과
  // const resultArray = [ [], [], [] ]

  const resultArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }

  return resultArray;
}


export function generateRandomHex(){
  return "#" + (Math.random() * 0xffffff << 0).toString(16).padStart(6, "0")
    // Math.random() * 0xffffff << 0 : 랜덤 수 만들고, 소수점은 버림 
    // toString : '16진수'를 '문자열'로 변환 | ex) 16777215는 "ffffff"로, 255는 "ff"로 변환 -> 그러면, ff는 6자리가 안 되니, padStart써서 0 으로 채워야 함 
    // padStart(6, "0") : string 이 6자리 여야 하고, 6자리가 부족하면 0으로 채워줌 
    // padStart = padding at the start 를 의미함
}
