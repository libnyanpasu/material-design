export function insertStyle(id: string, styleString: string) {
  removeStyle(id);

  const style = document.createElement("style");

  style.id = id;
  style.innerHTML = styleString;

  document.head.appendChild(style);

  return style;
}

export function removeStyle(id: string) {
  const remove = document.getElementById(id);

  if (remove) {
    document.head.removeChild(remove);
  }

  return remove;
}
