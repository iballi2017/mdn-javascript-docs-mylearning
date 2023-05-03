
export function displayContent(title, content, label = "") {
    const para = document.createElement("p");
    const node = document.createTextNode(label + ": " + content);
    para.appendChild(node);
    const element = document.getElementById(title);
    element.appendChild(para);
  }
  