#!/usr/bin/env python3

""" The module """


def insert_school(mongo_collection, **kwargs):
    """ Insert a new document """

    data = mongo_collection.insert_one(kwargs)
    return data.inserted_id
