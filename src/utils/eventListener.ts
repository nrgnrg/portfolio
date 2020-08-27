const bindingHandler = (
  el: (Window & typeof globalThis) | Element,
  event: string,
  handler: () => void,
  action: boolean
) => {
  const events = Array.isArray(event) ? event : String(event).split(" ");
  events.forEach(e => {
    el[action ? "addEventListener" : "removeEventListener"](e, handler, false);
  });
};

export const bind = (
  el: (Window & typeof globalThis) | Element,
  event: string,
  handler: () => void
) => bindingHandler(el, event, handler, true);

export const unbind = (
  el: (Window & typeof globalThis) | Element,
  event: string,
  handler: () => void
) => bindingHandler(el, event, handler, false);
