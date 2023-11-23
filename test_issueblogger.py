import json
import os
import dotenv
from issueblogger import generate_blog_post

dotenv.load_dotenv()

def test_generate_blog_post():
    # Mock data simulating issue data and comments
    mock_issue_data = {
        "issue_data": {
            "number": "123",
            "title": "Test Issue Title",
            "body": "This is a test issue body."
        },
        "comments": [
            {"body": "First test comment."},
            {"body": "Second test comment."}
        ]
    }

    # Path for the mock issue data file
    test_json_path = "test_issue_data.json"

    # Write mock data to a JSON file
    with open(test_json_path, 'w') as file:
        json.dump(mock_issue_data, file)

    # Call the function to test
    try:
        generate_blog_post(test_json_path, os.environ['OPENAI_API_KEY'])
        print("Test passed: Blog post generated successfully.")
    except Exception as e:
        print(f"Test failed: {e}")

    # Cleanup: Remove the test JSON file
    os.remove(test_json_path)

if __name__ == "__main__":
    test_generate_blog_post()

