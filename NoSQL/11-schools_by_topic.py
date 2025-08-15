#!/usr/bin/env python3

""" The module """


def schools_by_topic(mongo_collection, topic):
    """ Get all schools with a specific topic """

    return list(mongo_collection.find({ 'topics': topic }))
