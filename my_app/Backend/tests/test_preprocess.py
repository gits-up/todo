import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from utils.preprocess import (
    preprocess_degree,
    normalize_eligibility,
    preprocess_internship_data,
)

def test_preprocess_degree():
    result = preprocess_degree("B.Tech / CSE, M.Tech (AI)")
    assert isinstance(result, list)
    assert "btech" in result
    assert "cse" in result
    assert "mtech" in result


def test_normalize_eligibility():
    assert normalize_eligibility("1st year") == "1"
    assert normalize_eligibility("Second YEAR") == "2"
    assert normalize_eligibility("PG") == "PG"
    assert normalize_eligibility("ug") == "UG"
    assert normalize_eligibility("unknown value") == "unknown value"


def test_preprocess_internship_data():
    internship = {
        "Title": "Software Intern",
        "Description": "Work on Python & ML.",
        "Eligibility Degree": "B.Tech / CSE",
        "Sector": "IT",
        "Required Skills": ["Python", " ML "],
        "Location": "Delhi, Mumbai"
    }

    processed = preprocess_internship_data(internship)

    assert "Description_as_string" in processed
    assert "Eligibility Degree_processed" in processed
    assert "Required Skills_processed" in processed
    assert "Location_processed" in processed
    assert "combined_text" in processed
    assert isinstance(processed["combined_text"], str)
