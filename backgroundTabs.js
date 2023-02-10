chrome.tabs.onRemoved.addListener((info, removeInfo) => onTabRemoved(info, removeInfo));

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

var windowClosedId = NaN
var windowClosed = false
async function onTabRemoved(e, info) {
  try {
    windowClosedId = info.windowId
    windowClosed = true

    await chrome.windows.update(windowClosedId, { focused: true, drawAttention: true })
  } catch (error) {
    console.log(error)
  }
}

