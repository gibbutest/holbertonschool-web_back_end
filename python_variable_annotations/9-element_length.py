#!/usr/bin/env python3

""" The module """
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """ Returns a list of tuples """
    return [(i, len(i)) for i in lst]
