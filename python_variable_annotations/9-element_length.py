#!/usr/bin/env python3

""" The module """
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ Returns a list of tuples """
    return [(i, len(i)) for i in lst]
