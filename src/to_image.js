export const parseImageHandler = (line) => {
  const imageRegex = /^!\[(.*)\]\((.*)\)/;
  const imageGroups = line.match(imageRegex);

  const alt = imageGroups[1];
  const href = imageGroups[2];

  return {
    type: "image",
    data: { alt, href },
  };
};
