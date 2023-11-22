import os
import sys
from datetime import datetime
from langchain.llms import OpenAI
from langchain.lcel import LCEL  # Import LCEL

def generate_blog_post(issue_title, issue_number, api_key):
    llm = OpenAI(api_key)
    lcel = LCEL(llm=llm)

    initial_response = lcel.run(f"Explain the topic '{issue_title}' clearly and concisely.", max_length=840)  # Limit to ~840 characters

    date = datetime.now().strftime('%Y-%m-%d')
    frontmatter = f"---\ntitle: {issue_title}\ndate: {date}\nauthor: Generated\n---\n\n"

    with open(f'blog/{issue_number}-new-post.md', 'w') as file:
        file.write(frontmatter + initial_response)

if __name__ == "__main__":
    issue_title = sys.argv[1]
    issue_number = sys.argv[2]
    api_key = os.environ.get('OPENAI_API_KEY')
    generate_blog_post(issue_title, issue_number, api_key)

