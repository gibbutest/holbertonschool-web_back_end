#!/usr/bin/env python3

""" The module """
from pymongo import MongoClient


if __name__ == '__main__':
    client = MongoClient('mongodb://localhost:27017/')
    db = client.logs
    nginx_collection = db.nginx

    print(f"{nginx_collection.count_documents({})} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_get_count = nginx_collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_get_count} status check")
