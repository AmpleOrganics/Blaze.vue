export function filterClasses (classes) {
  return Object.keys(classes).filter(className => classes[className])
}
