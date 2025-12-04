import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from utils.ml_based_recommendation import ml_based_recommend_mongo

def test_ml_based_recommendation():
    user = {
        "Skills": ["python", "ml"],
        "Sector": "IT",
        "Location_preference": "delhi"
    }

    internships = [
        {
            "Title": "Python Developer",
            "combined_text": "python backend developer delhi"
        },
        {
            "Title": "Chef",
            "combined_text": "cooking food kitchen"
        }
    ]

    results = ml_based_recommend_mongo(user, internships)

    assert len(results) == 2
    assert results[0]["Title"] == "Python Developer"
    assert results[0]["Similarity"] >= results[1]["Similarity"]
