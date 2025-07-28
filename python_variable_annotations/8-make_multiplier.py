#!/usr/bin/env python3

""" The module """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Returns a function """
    return lambda a_float: a_float * multiplier
