# Internship Recommendation System -
A full-stack web application to collect, manage, and recommend internships.
# Contributing Guidelines 

Thank you for your interest in contributing!  
This project welcomes developers of all skill levels, and this guide will help you get started smoothly

## Prerequisites 

Before contributing, please ensure you have:

- Git installed

- Node.js + npm installed (for the frontend)

- Python 3.x installed (for the backend)

- A GitHub account

If you're new to any of these, don’t worry -the steps below walk you through everything.

## Fork The Repository 

Click the Fork button at the top of the repository.  
This creates your copy that you can safely experiment with.

## Clone Your Fork

```bash
git clone https://github.com/traitor09/todo.git
cd todo
```
## Create a new Branch
Always make changes in a separate branch instead of main.

```bash
git checkout -b feature/my-new-feature
```


Use clear branch names:

`feature/...` for new features  
`fix/...` for bug fixes  
`docs/...` for documentation  
`refactor/...` for improvements

## Setting Up Project Locally 
### Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend should now be running locally.

### Backend

Navigate to the backend folder:

```bash
cd backend
```

(Optional) Create a virtual environment:

- **Linux/macOS**
  ```bash
  python -m venv venv
  source venv/bin/activate
  ```

- **Windows (PowerShell)**
  ```powershell
  python -m venv venv
  .\venv\Scripts\Activate.ps1
  ```

- **Windows (CMD)**
  ```cmd
  python -m venv venv
  venv\Scripts\activate.bat
  ```

## Install Python dependencies:

```bash
pip install -r requirements.txt
```

## Setup Environment Variables

```bash
MONGO_CONNECTION_STRING=<your_mongodb_connection_string>
MONGO_DB_NAME=<your_database_name>
```
#### *Replace <your_mongodb_connection_string> and <your_database_name> with your actual MongoDB URI and database name.
## Set up the database:

```bash
python setup_database.py
```

## Run the backend server:

```bash
python app.py
```

## Ensure
While contributing, please:

- Keep code clean and well-commented
- Follow existing coding style
- Test your changes locally
- Make commits small and meaningful

Example commit message:

`Add skill preprocessing step to recommendation logic`

## Commit and Push
```bash
git add .
git commit -m "Clear and descriptive message"
git push origin feature/my-new-feature
```
## Open a Pull Request
Go to your fork on GitHub.
Click Compare & pull request.
Write a clear description of what you changed and why.
Submit the PR.

PR Tips:

- Be polite and collaborative
- Explain the reasoning behind your changes
- Screenshots are helpful if UI-related
- A maintainer will review your PR and give feedback or approve it.


# STRUCTURE

## Project Structure

- **backend/**
  - `app.py` – Main Flask application
  - `setup_DB.py` – Script to populate MongoDB
  - `requirements.txt` – Python dependencies
  - **utils/**
    - `utils.py` – MongoDB connection helper
    - `preprocess.py` – Data preprocessing functions
    - `rule_recommendation.py` – Rule-based recommendation logic
    - `ml_recommendation.py` – ML-based recommendation logic

- **frontend/**
  - `package.json` – NPM dependencies
  - `tsconfig.json` – TypeScript configuration
  - **src/**
    - `App.tsx` – Main React component
    - `index.tsx` – React entry point
    - **components/** – React components folder

- **Data/**
  - `dataset.json` – Sample internship listings
