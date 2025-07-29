#!/usr/bin/env python3

""" The module """
import asyncio
from time import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_time() -> float:
    """ Measure the total runtime for 4 tasks """
    start_time = time()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )

    end_time = time()
    return end_time - start_time
