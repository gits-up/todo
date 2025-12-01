# Internship Recommendation System -
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

`git clone https://github.com/traitor09/todo.git
cd todo`

## Create a new Branch
Always make changes in a separate branch instead of main.

`git checkout -b feature/my-new-feature`


Use clear branch names:

feature/... for new features
fix/... for bug fixes
docs/... for documentation
refactor/... for improvements

## Setting Up Project Locally 
### Frontend

Navigate to the frontend folder:

`cd frontend`

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

The frontend should now be running locally.

### Backend

Navigate to the backend folder:

`cd backend`

(Optional) Create a virtual environment:

`python -m venv venv
source venv/bin/activate   # Linux/macOS
venv\Scripts\activate      # Windows`

Install Python dependencies:

`pip install -r requirements.txt`

Set up the database:

`python setup_database.py`

Run the backend server:

`python app.py`

## Ensure
While contributing, please:

- Keep code clean and well-commented
- Follow existing coding style
- Test your changes locally
- Make commits small and meaningful

Example commit message:

`Add skill preprocessing step to recommendation logic`

## Commit and Push
`git add .
git commit -m "Clear and descriptive message"
git push origin feature/my-new-feature
`
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
