const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function getCurrentYear() {
  return new Date().getFullYear();
}

export const getPublishedDate = (createdAt: string) => {
  const date = new Date(createdAt);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = getCurrentYear();

  return `${day} ${month} ${year}`;
};

export const checkIsUpdated = (createdAt: string, updateAt: string) => {
  const created = new Date(createdAt);
  const updated = new Date(updateAt);

  return created.getTime() - updated.getTime() !== 0;
};

export const parseReadingTimeDuration = (readingTime: number) => {
  const isPlural = readingTime !== 1;
  return isPlural ? `${readingTime} mins` : `${readingTime} min`;
};
