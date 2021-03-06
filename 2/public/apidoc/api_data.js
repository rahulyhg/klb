define({ "api": [
  {
    "type": "post",
    "url": "/contact/:person_id/create",
    "title": "Add one contact to person",
    "version": "1.0.0",
    "name": "Create",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_id",
            "description": "<p>id of the person</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "Contact",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "1-E-mail",
              "2-Whatsapp",
              "3-Phone",
              "4-Cellphone",
              "5-Others"
            ],
            "optional": false,
            "field": "contact.type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.value",
            "description": ""
          }
        ]
      }
    },
    "filename": "application/controllers/Contact.php",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/contact/:person_id",
    "title": "List all contacts of a person",
    "version": "1.0.0",
    "name": "Get",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_id",
            "description": "<p>id of person</p>"
          }
        ]
      }
    },
    "filename": "application/controllers/Contact.php",
    "groupTitle": "Contact"
  },
  {
    "type": "put",
    "url": "/contact/:id/update/:person_id",
    "title": "Update a contact of a person",
    "version": "1.0.0",
    "name": "Update",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_id",
            "description": "<p>id of the person</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "Contact",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "1-E-mail",
              "2-Whatsapp",
              "3-Phone",
              "4-Cellphone",
              "5-Others"
            ],
            "optional": false,
            "field": "contact.type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.value",
            "description": ""
          }
        ]
      }
    },
    "filename": "application/controllers/Contact.php",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/person",
    "title": "List all people",
    "version": "1.0.0",
    "name": "Get",
    "group": "People",
    "filename": "application/controllers/Person.php",
    "groupTitle": "People"
  },
  {
    "type": "post",
    "url": "/person/create",
    "title": "Create a new Person",
    "version": "1.0.0",
    "name": "Create",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "Person",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Person.name",
            "description": "<p>Name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Person.last_name",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Person.date_birth",
            "description": "<p>date of the birth yyyy-mm-dd</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "Contact",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "1-E-mail",
              "2-Whatsapp",
              "3-Phone",
              "4-Cellphone",
              "5-Others"
            ],
            "optional": false,
            "field": "Contact.type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.value",
            "description": ""
          }
        ]
      }
    },
    "filename": "application/controllers/Person.php",
    "groupTitle": "Person"
  },
  {
    "type": "delete",
    "url": "/contact/:id/delete/:person_id",
    "title": "Delete a contact of a person",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "person_id",
            "description": "<p>id of the person</p>"
          }
        ]
      }
    },
    "filename": "application/controllers/Contact.php",
    "groupTitle": "Person"
  },
  {
    "type": "delete",
    "url": "/person/:id/delete",
    "title": "Delete a person",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user</p>"
          }
        ]
      }
    },
    "filename": "application/controllers/Person.php",
    "groupTitle": "Person"
  },
  {
    "type": "put",
    "url": "/person/:id/update",
    "title": "Updata a person",
    "version": "1.0.0",
    "name": "Update",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "Person",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Person.name",
            "description": "<p>Name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Person.last_name",
            "description": "<p>Last name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Person.date_birth",
            "description": "<p>date of the birth yyyy-mm-dd</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "Contact",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "1-E-mail",
              "2-Whatsapp",
              "3-Phone",
              "4-Cellphone",
              "5-Others"
            ],
            "optional": false,
            "field": "Contact.type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.value",
            "description": ""
          }
        ]
      }
    },
    "filename": "application/controllers/Person.php",
    "groupTitle": "Person"
  }
] });
