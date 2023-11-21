import sys
from datetime import datetime
from langchain.llms import OpenAI
from langchain.chains import Chain
from langchain.postprocessors import LengthLimiter

def generate_blog_post(issue_title, api_key):
    llm = OpenAI(api_key)
    chain = Chain([llm], postprocessors=[LengthLimiter(840)])  # Limit to ~840 characters

    # Initial content generation
    initial_prompt = f"Explain the topic '{issue_title}' clearly and concisely."
    initial_response = chain.run(initial_prompt)

    # Add frontmatter for tagging (modify as per your tagging logic)
    date = datetime.now().strftime('%Y-%m-%d')
    frontmatter = f"---\ntitle: {issue_title}\ndate: {date}\nauthor: Generated\n---\n\n"

    with open(f'blog/{sys.argv[2]}-new-post.md', 'w') as file:
        file.write(frontmatter + initial_response)

if __name__ == "__main__":
    generate_blog_post(sys.argv[1], 'your_openai_api_key')  # Replace with your actual API key

