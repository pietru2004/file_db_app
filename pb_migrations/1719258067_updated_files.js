/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u6nunqddkjhg8kw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k5p1rids",
    "name": "password",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u6nunqddkjhg8kw")

  // remove
  collection.schema.removeField("k5p1rids")

  return dao.saveCollection(collection)
})
