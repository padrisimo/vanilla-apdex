const getHostList = data => {
  const rowList = [];
  data.map(item => rowList.push(...item.host));
  return [...new Set(rowList)];
};

export default getHostList;
