import os
import sys
from datetime import datetime
from langchain.llms import OpenAI
from langchain.chains import Chain
from langchain.postprocessors import LengthLimiter

def generate_blog_post(issue_title, issue_number, api_key):
    llm = OpenAI(api_key)
    chain = Chain([llm], postprocessors=[LengthLimiter(840)])  # Limit to ~840 characters

    initial_prompt = f"Explain the topic '{issue_title}' clearly and concisely."
    initial_response = chain.run(initial_prompt)

    date = datetime.now().strftime('%Y-%m-%d')
    frontmatter = f"---\ntitle: {issue_title}\ndate: {date}\nauthor: Generated\n---\n\n"

    with open(f'blog/{issue_number}-new-post.md', 'w') as file:
        file.write(frontmatter + initial_response)

if __name__ == "__main__":
    issue_title = sys.argv[1]
    issue_number = sys.argv[2]
    api_key = os.environ.get('OPENAI_API_KEY')
    generate_blog_post(issue_title, issue_number, api_key)

