const contentful = require("contentful");
const client = contentful.createClient({
  space: "490ezzr1f96l",
  accessToken:
    "8e9529f53ad5d25dfe6af8cf4541e10358877acb64a2945cc9898851b36696bb"
});

// Removes item from array
export function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

export function getImage(imageID) {
  const asset = client.getAsset(imageID).then(asset => {
    asset = asset.fields.file.url;
    console.log(asset);
  });
  return asset;
}
