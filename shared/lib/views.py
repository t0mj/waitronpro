"""Views for shared functions."""
import json
import uuid
import datetime


def underscore_to_camelcase(value):
    def camelcase():
        yield str.lower
        while True:
            yield str.capitalize

    c = camelcase()
    return "".join(c.next()(x) if x else '_' for x in value.split("_"))


def to_json(query):
    """Convert a django model into a json string."""
    json_list = []
    for query_dict in query:
        obj_dict = {}
        for key, value in query_dict.iteritems():
            var_type = type(value)
            if var_type is uuid.UUID:
                value = str(value)
            elif var_type is datetime.datetime:
                value = value.isoformat()

            new_key = underscore_to_camelcase(str(key))
            obj_dict[new_key] = value

        json_list.append(obj_dict)

    return json.dumps(json_list)


def to_dict(json_dict):
    """Return a list of dicts."""
    dict_list = []
    obj_list = json.loads(json_dict)
    for obj in obj_list:
        dict_list.append(json.loads(obj))

    return dict_list
