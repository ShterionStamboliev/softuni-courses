function browserHistory(objInput, stringArr) {
  let obj = {
    "Browser Name": objInput["Browser Name"],
    "Open Tabs": [...objInput["Open Tabs"]],
    "Recently Closed": [...objInput["Recently Closed"]],
    "Browser Logs": [...objInput["Browser Logs"]],
  };

  for (let info of stringArr) {
    let text = info.split(" ");
    let command = text[0];
    let pageName = text[1];

    if (command === "Open") {
      obj["Open Tabs"].push(pageName);
      obj["Browser Logs"].push(command + ' ' + pageName);
    }
    if (command === "Close") {
      if (obj["Open Tabs"].includes(pageName)) {
        let pageIndex = obj["Open Tabs"].indexOf(pageName);
        let removed = obj["Open Tabs"].splice(pageIndex, 1);
        obj["Recently Closed"].push(removed);
        obj["Browser Logs"].push(command + ' ' + pageName);
      }
    }
    if (command === "Clear") {
      obj["Open Tabs"] = [];
      obj["Recently Closed"] = [];
      obj["Browser Logs"] = [];
    }
  }
  console.log(obj["Browser Name"]);
  console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
  console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);
browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"])
