export default async function smartPush(collection, iteree, key, obj) {
  const index = this[collection].findIndex(x => x[iteree] === key);
  if (index > -1) {
    this[collection][index] = obj;
  } else {
    this[collection].push(obj);
  }
}
