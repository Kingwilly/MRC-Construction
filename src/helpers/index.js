// Removes item from array
export function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}
