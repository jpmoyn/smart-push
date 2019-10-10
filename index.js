export default async function smartPush(collection, iteree, key, obj) {
  const index = collection.findIndex(x => x[iteree] === key);
  if (index > -1) {
    return (collection[index] = obj);
  } else {
    return collection.push(obj);
  }
}
