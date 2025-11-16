@echo off
echo ====================================
echo Starting HRIS Frontend
echo ====================================
echo.

echo Checking if .env file exists...
if not exist .env (
    echo Creating .env file from .env.example...
    copy .env.example .env
)

echo.
echo Starting frontend server...
npm run dev

