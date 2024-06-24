/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u6nunqddkjhg8kw",
    "created": "2024-06-24 19:39:10.790Z",
    "updated": "2024-06-24 19:39:10.790Z",
    "name": "files",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1mlvuysb",
        "name": "filename",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "qnsplmik",
        "name": "tittle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "urnzf193",
        "name": "desc",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tj3SJDs` ON `files` (`filename`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u6nunqddkjhg8kw");

  return dao.deleteCollection(collection);
})
