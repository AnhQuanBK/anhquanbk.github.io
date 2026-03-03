#!/usr/bin/env python3

import hashlib
import os
import sys
import subprocess


def get_hash():
    hash_string = hashlib.md5()
    hash_string.update(os.urandom(128))
    return hash_string.hexdigest()[:16]


def run_command(command, description):
    """Run a shell command and handle errors."""
    print(f"\n{description}...")
    try:
        result = subprocess.run(
            command,
            shell=True,
            check=True,
            capture_output=True,
            text=True
        )
        if result.stdout:
            print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        if e.stderr:
            print(f"Error details: {e.stderr}")
        return False


def main():
    print("Starting auto-deploy process...")
    
    if not run_command("git add --all", "Adding all changes"):
        sys.exit(1)
    
    hash_string = get_hash()
    commit_message = f"AutoDeploy: {hash_string}"
    if not run_command(f'git commit -m "{commit_message}"', f"Committing with message: {commit_message}"):
        print("Note: No changes to commit or commit failed")
    
    if not run_command("git push", "Pushing to remote"):
        sys.exit(1)
    
    print("\n✅ Auto-deploy completed successfully!")


if __name__ == "__main__":
    main()
