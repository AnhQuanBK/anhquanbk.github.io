# Generate a random hash of 16 characters for the commit

import hashlib
import os
import sys
import gc
import atexit


def cleanup():
    gc.collect()
    print("Garbage collection done")


def get_hash():
    hashString = hashlib.md5()
    hashString.update(os.urandom(128))
    return hashString.hexdigest()[:16]


def main():
    # Run cmd command git add --all
    os.system("git add --all")

    # Run cmd command git commit -m "AutoDeploy: <hash>"
    hashString = get_hash()
    os.system("git commit -m \"AutoDeploy: " + hashString + "\"")

    # Run cmd command git push origin master
    os.system("git push")


gc.enable()

main()
