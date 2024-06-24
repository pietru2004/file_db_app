/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u6nunqddkjhg8kw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tl5hk5kt",
    "name": "data",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u6nunqddkjhg8kw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tl5hk5kt",
    "name": "field",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
})
