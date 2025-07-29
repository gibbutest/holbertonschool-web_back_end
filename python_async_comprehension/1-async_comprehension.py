#!/usr/bin/env python3

""" The module """
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """ Yeields 10 random floats """
    return [value async for value in async_generator()]
