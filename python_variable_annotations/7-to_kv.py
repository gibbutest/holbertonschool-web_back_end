#!/usr/bin/env python3

""" The module """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Returns a tuple of k and sqaured v """
    return (k, v ** 2)
