const clipboard = color => navigator.clipboard.writeText(color);
const popoverTriggerList = [].slice.call(document.querySelectorAll(`[data-bs-toggle="popover"]`));
const popoverList = popoverTriggerList.map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));