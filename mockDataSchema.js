let schema = {
  "type": "object",
  "properties": {
    "orders": {
      "type": "array",
      "minItems": 10,
      "maxItems": 15,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "department": {
            "type": "string",
            "faker": "commerce.department"
          },
          "product": {
            "type": "string",
            "faker": "commerce.productName"
          },
          "price": {
            "minimum": 0,
            "maximum": 20000,
            "type": "number",
            "faker": "commerce.price"
          },
          "destination": {
            "type": "object",
            "properties": {
              "state": {
                "type": "string",
                "faker": "address.state"
              },
              "city": {
                "type": "string",
                "faker": "address.city"
              },
              "zipCode": {
                "type": "string",
                "faker": "address.zipCode"
              }
            },
            "required": ["state", "city", "zipCode"]
          }
        },
        "required": ["id", "product", "department", "price", "destination"]
      }
    }
  },
  "required": ["orders"]
};

module.exports = schema;