#!/bin/bash

echo "===================================="
echo "Starting HRIS Frontend"
echo "===================================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
fi

echo ""
echo "Starting frontend server..."
npm run dev

