const getTopAppsByHost = function(data, host) {
  return data
    .filter(item => item.host.includes(host))
    .sort(function(a, b) {
      return a.apdex - b.apdex;
    })
    .slice(-25)
    .reverse();
};

export default getTopAppsByHost;
