// Хелп-функция для генерации моков
export const skeletonGeneration = (count:number) => (new Array(count)).fill(1).map((a, i) => i);