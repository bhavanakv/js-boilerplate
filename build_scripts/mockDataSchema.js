export const schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "unique": true,
                        "minimum": 1
                    },
                    "name": {
                        "type": "string",
                        "faker": "name.findName"
                    },
                    "email": {
                        "type": "string",
                        "format": "email",
                        "faker": "internet.email"
                    }
                },
                "required": ["id", "name", "email"]
            }
        }
    },
    "required": ["users"]
};
