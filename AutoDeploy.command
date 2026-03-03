#!/bin/bash

# Change to the script's directory
cd "$(dirname "$0")"

echo "========================================="
echo "   Auto Deploy Script for macOS"
echo "========================================="
echo ""

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is not installed"
    echo "Please install Python 3 and try again"
    read -p "Press any key to exit..."
    exit 1
fi

# Run the Python script
python3 AutoDeploy.py

# Keep terminal open to see results
echo ""
read -p "Press any key to exit..."
