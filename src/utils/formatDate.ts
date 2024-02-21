export const formatDate = (isoDate: string | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", options);
  }
  return undefined;
};
