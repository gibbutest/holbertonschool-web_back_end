#!/usr/bin/env python3

""" The module """
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """ Waits 1 second then yeilds random float """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
