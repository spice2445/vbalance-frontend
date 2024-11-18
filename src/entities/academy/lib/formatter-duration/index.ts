
export const formatterDuration = (duration: string) => {
    const [hours, minutes] = duration.split(':').map(Number);

    const totalSeconds = hours * 3600 + minutes * 60;

    return totalSeconds;
};