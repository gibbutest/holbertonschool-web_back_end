#!/usr/bin/env python3

""" The module """


def list_all(mongo_collection):
    """ List all mongo collection """

    if not mongo_collection:
        return []

    return list(mongo_collection.find())
