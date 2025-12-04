import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from utils.rule_based_recommendation import rule_based_recommend, is_eligible

def test_is_eligible_basic():
    assert is_eligible("1st year", "1") is True
    assert is_eligible("3rd year", "1") is False
    assert is_eligible("UG", "UG") is True
    assert is_eligible("2", "UG") is True  # UG accepts 1-4


def test_rule_based_recommend():
    user = {
        "Skills": ["python", "machine learning"]
    }

    internships = [
        {"Title": "ML Intern", "Required Skills": ["python", "sql"]},
        {"Title": "Chef Intern", "Required Skills": ["cooking"]}
    ]

    results = rule_based_recommend(user, internships)

    assert len(results) == 1  # only python internship
    assert results[0]["Title"] == "ML Intern"
    assert "python" in results[0]["Skills_matched"]
