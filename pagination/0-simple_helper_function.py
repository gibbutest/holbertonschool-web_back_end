#!/usr/bin/env python3

""" The module """

def index_range(page, page_size):
    """ Returns a tuple of the starting and end indexes """

    start = (page - 1) * page_size
    end = page * page_size

    return (start, end)
