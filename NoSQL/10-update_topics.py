#!/usr/bin/env python3

""" The module """


def update_topics(mongo_collection, name, topics):
    """ Insert a new document """

    mongo_collection.update_many(
        { 'name': name },
        { '$set': { 'topics': topics } }
    )
