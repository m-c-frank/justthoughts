import os
import sys
import json
from datetime import datetime
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Constants for prompts
SUMMARY_PROMPT = """
Summarize the following GitHub issue in a style akin to an engaging, informative tweet. The summary should be concise, neutral, and non-clickbaity, yet compelling enough to capture attention and convey the essence of what transpired in the discussion. Aim for brevity and clarity, using the fewest words to communicate the most significant points of the issue:

Title: {issue_title}
Description: {issue_body}
Comments: {issue_comments}

Concise Summary:
"""

TAGGING_PROMPT = """
Given the following summary of a GitHub issue, suggest 5-10 relevant tags for categorization in a Docusaurus blog. The tags should reflect key topics, technologies, and themes discussed in the issue:

Summary: {summary}

Suggested Tags:
"""

DISCUSSION_POINTS_PROMPT = """
Based on the following GitHub issue summary and the discussion, identify key discussion points that might interest readers. Focus on unique insights, critical questions raised, and any conclusions drawn:

Summary: {summary}

Key Discussion Points:
"""


def create_and_run_chain(model, prompt_text, input_text):
    prompt = PromptTemplate.from_template(prompt_text)
    chain = LLMChain(llm=model, prompt=prompt)
    return chain.invoke({'text': input_text}).content

def generate_blog_post(issue_file, api_key):
    llm = OpenAI(api_key)

    with open(issue_file, 'r') as file:
        issue_data = json.load(file)

    summary = create_and_run_chain(llm, SUMMARY_PROMPT, issue_data['body'])
    tags = create_and_run_chain(llm, TAGGING_PROMPT, summary)
    discussion_points = create_and_run_chain(llm, DISCUSSION_POINTS_PROMPT, issue_data['body'])

    date = datetime.now().strftime('%Y-%m-%d')
    frontmatter = f"---\ntitle: {issue_data['title']}\ndate: {date}\nauthor: Generated\n---\n\n"

    post_content = f"{frontmatter}## Summary\n{summary}\n\n## Tags\n{tags}\n\n## New Discussion Points\n{discussion_points}"

    with open(f"blog/{issue_data['number']}-new-post.md", 'w') as file:
        file.write(post_content)

if __name__ == "__main__":
    issue_file = sys.argv[1]
    api_key = os.environ.get('OPENAI_API_KEY')
    generate_blog_post(issue_file, api_key)
