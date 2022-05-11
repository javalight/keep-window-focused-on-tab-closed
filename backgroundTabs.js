chrome.tabs.onRemoved.addListener((info, removeInfo) => onTabRemoved(info, removeInfo));
// chrome.tabs.onActivated.addListener((info) => onAc(info))

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
    chrome.windows.update(windowClosedId, { focused: true, drawAttention: true })
  } catch (error) {
    console.log(error)
  }
}

// async function onTabCloseUnfocus(current){
//   if(windowClosed){
//     windowClosed = false
//     let currentTab = await getCurrentTab()
//     if (currentTab.windowId != windowClosedId){
//       chrome.windows.update(windowClosedId, {focused: true, drawAttention:true})
//     }
//   }
// }
