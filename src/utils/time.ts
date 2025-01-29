const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getPublishedDate = (createdAt: string) => {
  const date = new Date(createdAt);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const publishedDate = `${day} ${month} ${year}`;
  return publishedDate;
};

export const checkIsUpdated = (createdAt: string, updateAt: string) => {
  const created = new Date(createdAt);
  const updated = new Date(updateAt);

  const isUpdated = created.getTime() - updated.getTime() !== 0;
  return isUpdated;
};

export const parseReadingTimeDuration = (readingTime: number) => {
  const isPlural = readingTime !== 1;
  return isPlural ? `${readingTime} mins` : `${readingTime} min`;
};
