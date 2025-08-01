#!/usr/bin/env python3

""" The module """
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """ Measure the runtime stuff """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    return ((end - start) / n)
