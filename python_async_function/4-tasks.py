#!/usr/bin/env python3

""" The module """
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ Spawns tasks n times with max_delay """
    delays = []
    tasks = []

    for _ in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        tasks.append(task)

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
