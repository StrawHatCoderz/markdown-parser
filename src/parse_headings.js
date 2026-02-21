export  const parseHeader = (line) => {
  const regex = /^(#{1,6})\s+(.*)/;

  const parseInfo = line.match(regex);
  const hashes = parseInfo[1];
  const content = parseInfo[2];

  return {
    type: "header",
    data: {
      level: hashes.length,
      content,
    },
  };
};
