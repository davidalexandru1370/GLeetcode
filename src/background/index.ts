chrome.action.onClicked.addListener((tab) => {
  console.log(tab);
  if (tab.url?.startsWith("chrome://")) return undefined;
  chrome.scripting
    .executeScript({
      func: () => {},
      target: {
        tabId: tab.id || 0,
      },
    })
    .then(() => {
      console.log("aici");
    })
    .catch(() => {
      console.log("error");
    });
});
