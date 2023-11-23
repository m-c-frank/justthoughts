import os
import sys
import json
from datetime import datetime
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Define prompt templates using str.format syntax
SUMMARY_TEMPLATE = """
Summarize the following GitHub issue in a style akin to an engaging, informative tweet:
Title: {issue_title}
Description: {issue_body}
Comments: {issue_comments}
Concise Summary:
"""

TAGGING_TEMPLATE = """
Given the following summary of a GitHub issue, suggest 5-10 relevant tags for categorization in a blog:
Summary: {summary}
Suggested Tags:
"""

DISCUSSION_POINTS_TEMPLATE = """
Based on the following GitHub issue summary, identify key discussion points:
Summary: {summary}
Key Discussion Points:
"""

def create_and_run_chain(api_key, template, input_data):
    llm = OpenAI()
    prompt_template = PromptTemplate.from_template(template)
    chain = LLMChain(llm=llm, prompt=prompt_template)
    return chain.invoke(input_data)["text"]

def generate_blog_post(issue_file, api_key):
    with open(issue_file, 'r') as file:
        data = json.load(file)
        issue_data = data['issue_data']
        comments = data['comments']

    # Prepare input data
    input_for_summary = {
        'issue_title': issue_data['title'],
        'issue_body': issue_data['body'],
        'issue_comments': ' '.join([comment['body'] for comment in comments])
    }

    # Generate content using the templates
    summary = create_and_run_chain(api_key, SUMMARY_TEMPLATE, input_for_summary)
    tags = create_and_run_chain(api_key, TAGGING_TEMPLATE, {'summary': summary})
    discussion_points = create_and_run_chain(api_key, DISCUSSION_POINTS_TEMPLATE, {'summary': summary})

    # Prepare blog post content
    date = datetime.now().strftime('%Y-%m-%d')
    frontmatter = f"---\ntitle: {issue_data['title']}\ndate: {date}\nauthor: Generated\n---\n\n"
    post_content = f"{frontmatter}## Summary\n{summary}\n\n## Tags\n{tags}\n\n## Key Discussion Points\n{discussion_points}"

    # Write to a Markdown file
    with open(f"blog/{issue_data['number']}-new-post.md", 'w') as file:
        file.write(post_content)

if __name__ == "__main__":
    issue_file = sys.argv[1]
    api_key = os.environ.get('OPENAI_API_KEY')
    generate_blog_post(issue_file, api_key)
