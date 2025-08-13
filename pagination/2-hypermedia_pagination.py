#!/usr/bin/env python3

""" The module """
import csv
import math
from typing import List


def index_range(page, page_size):
    """ Returns a tuple of the starting and end indexes """

    start = (page - 1) * page_size
    end = page * page_size

    return (start, end)


class Server:
    """ Server class to paginate a database of popular baby names. """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """ Cached dataset """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Get the page from the data """

        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        if not self.__dataset:
            return []

        idx = index_range(page, page_size)

        return self.__dataset[idx[0]:idx[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Gets the page, and addional info """

        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        self.dataset()
        total_items = len(self.__dataset) if self.__dataset else 0
        total_pages = (total_items + page_size - 1) // page_size

        return {
            "page_size": page_size,
            "page": page,
            "data": self.get_page(page, page_size),
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages,
            "total_items": total_items
        }
