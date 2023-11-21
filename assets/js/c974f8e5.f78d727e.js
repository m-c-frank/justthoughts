"use strict";(self.webpackChunkjustthoughts=self.webpackChunkjustthoughts||[]).push([[1263],{7343:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"/2023/11/21/07-45-00-note","metadata":{"permalink":"/justthoughts/blog/2023/11/21/07-45-00-note","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-21-07-45-00-note.md","source":"@site/blog/2023-11-21-07-45-00-note.md","title":"New Note 2023-11-21 07:45:00","description":"good morning","date":"2023-11-21T00:00:00.000Z","formattedDate":"November 21, 2023","tags":[{"label":"note","permalink":"/justthoughts/blog/tags/note"}],"readingTime":0.28,"hasTruncateMarker":false,"authors":[{"name":"Martin Christoph Frank","title":"Contributor at GitHub","url":"https://github.com/m-c-frank","imageURL":"https://github.com/m-c-frank.png"}],"frontMatter":{"title":"New Note 2023-11-21 07:45:00","author":"Martin Christoph Frank","author_title":"Contributor at GitHub","author_url":"https://github.com/m-c-frank","author_image_url":"https://github.com/m-c-frank.png","tags":["note"]},"unlisted":false,"nextItem":{"title":"Custom Domain for GitHub Pages","permalink":"/justthoughts/blog/2023/11/21/07-50-40-note"}},"content":"good morning\\n\\ni\'ve added a few new issues. im hoping that i will soon find an easy way to import them into this website\\n\\nso i can more easily integrate my ideas in just this one place where everything is in a very nice structure!\\n\\nbut sometimes you just need a little chaos to really thrive."},{"id":"/2023/11/21/07-50-40-note","metadata":{"permalink":"/justthoughts/blog/2023/11/21/07-50-40-note","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-21-07-50-40-note.md","source":"@site/blog/2023-11-21-07-50-40-note.md","title":"Custom Domain for GitHub Pages","description":"in most cases you probably mean to set an apex domain to be the one that presents the github page.","date":"2023-11-21T00:00:00.000Z","formattedDate":"November 21, 2023","tags":[{"label":"note","permalink":"/justthoughts/blog/tags/note"},{"label":"namecheap","permalink":"/justthoughts/blog/tags/namecheap"},{"label":"domain","permalink":"/justthoughts/blog/tags/domain"},{"label":"custom","permalink":"/justthoughts/blog/tags/custom"},{"label":"github","permalink":"/justthoughts/blog/tags/github"},{"label":"pages","permalink":"/justthoughts/blog/tags/pages"}],"readingTime":1.41,"hasTruncateMarker":false,"authors":[{"name":"Martin Christoph Frank","title":"Contributor at GitHub","url":"https://github.com/m-c-frank","imageURL":"https://github.com/m-c-frank.png"}],"frontMatter":{"title":"Custom Domain for GitHub Pages","author":"Martin Christoph Frank","author_title":"Contributor at GitHub","author_url":"https://github.com/m-c-frank","author_image_url":"https://github.com/m-c-frank.png","tags":["note","namecheap","domain","custom","github","pages"]},"unlisted":false,"prevItem":{"title":"New Note 2023-11-21 07:45:00","permalink":"/justthoughts/blog/2023/11/21/07-45-00-note"},"nextItem":{"title":"New Note 2023-11-20 21:13:00","permalink":"/justthoughts/blog/2023/11/20/21-13-00-note"}},"content":"in most cases you probably mean to set an apex domain to be the one that presents the github page.\\n\\nthe apex domain is just literally your subdomain.domain.topleveldomain without the subdomain part.\\n\\ni.e. justthoughts.xyz in my case\\n\\nto do that you need to configure the dns settings.\\n\\ni am using namecheap so i have to add the following:\\n\\n1. as of today you can use this url template and replace the domain with yours:\\n  -> https://ap.www.namecheap.com/Domains/DomainControlPanel/YOURDOMAIN.TLD/advancedns \\n  -> remember the \\".tld\\" is just the .com or .xyz or .io, aka top level domain\\n2. then just delete all dns settings in the host records section. we will learn it from the ground up\\n  -> now we need to add new records and you can find even more information directly at the [github documentation on configuring the records](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#dns-records-for-your-custom-domain)\\nso to keep it short just create new records with the following content:\\n\\n| Record Type  | Domain | IP Address          | Settings  |\\n|--------------|--------|---------------------|-----------|\\n| A Record     | @      | 185.199.108.153     | Automatic |\\n| A Record     | @      | 185.199.111.153     | Automatic |\\n| A Record     | @      | 185.199.109.153     | Automatic |\\n| A Record     | @      | 185.199.110.153     | Automatic |\\n| CNAME Record | *      | m-c-frank.github.io | Automatic |\\n\\n\\nthen in the github project you have to manually enter the domain name you want to use\\n\\nand i would suggest setting the enforce https option\\n\\n## new things to do now:\\n- learn about dns and how to test this\\n- write the script that does this setup automatically\\n- learn more about the `dig` command\\n- verifying custom domain for github pages -> MOST IMPORTANT TO MAKE LIFE EASY"},{"id":"/2023/11/20/21-13-00-note","metadata":{"permalink":"/justthoughts/blog/2023/11/20/21-13-00-note","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-20-21-13-00-note.md","source":"@site/blog/2023-11-20-21-13-00-note.md","title":"New Note 2023-11-20 21:13:00","description":"i will create a system that publishes simple notes.","date":"2023-11-20T00:00:00.000Z","formattedDate":"November 20, 2023","tags":[{"label":"note","permalink":"/justthoughts/blog/tags/note"},{"label":"kickoff","permalink":"/justthoughts/blog/tags/kickoff"}],"readingTime":1.6,"hasTruncateMarker":false,"authors":[{"name":"Martin Christoph Frank","title":"Starting This Project Officially","url":"https://github.com/m-c-frank","imageURL":"https://github.com/m-c-frank.png"}],"frontMatter":{"title":"New Note 2023-11-20 21:13:00","author":"Martin Christoph Frank","author_title":"Starting This Project Officially","author_url":"https://github.com/m-c-frank","author_image_url":"https://github.com/m-c-frank.png","tags":["note","kickoff"]},"unlisted":false,"prevItem":{"title":"Custom Domain for GitHub Pages","permalink":"/justthoughts/blog/2023/11/21/07-50-40-note"},"nextItem":{"title":"Welcome","permalink":"/justthoughts/blog/welcome"}},"content":"i will create a system that publishes simple notes.\\ni have bigger plans with this but this is the start to externalize my ideas.\\n\\nthe next step is to create the script that lets me develop this tool more effectively.\\nthat will be the case when i can automatically add this repo itself as a submodule and use the different branches to act as the directories.\\nthis way the structure stays very flat.\\n\\nbut each branch itself will have its own README.md when a new change in the repo happens a workflow will move this branches readme to the documentation pages in the main branch and publish the newest version.\\nhere is the draft: [ChatGPT conversation](https://chat.openai.com/share/cc85351b-750b-45bf-a837-1c854d791f4b)\\n\\ni also need to change the note name to something more meaningful and maybe start it with an incrementing index.\\n\\nmaybe thats what i need to do:\\nhelp people define what their problems are\\n\\nuse the zero assumptions approach\\n- just ask if anything is unclear\\n- we can bot just assume neither of us knows anyhting\\n- if somethings is not clear justask (tm) lol\\n- i think this needs to be integrated in vimwiki or the other way around. but i actually like this as a better note taking tool\\n- i guess i just need a way to have shortcuts in nvim itself to do the linking stuff easier and to do everything.\\n- i guess its just a nvim issue to find out how to do all this and this repo is just for publishing these notes.\\n- i could have one instance for my private notes aswell.\\n- and i can add a script in the scripts branch to create a new blog entry in the default private notes location. and so on\\n\\nim going to bed now but so far i am still able to get in the flow to do them. lets see when that stops happening."},{"id":"welcome","metadata":{"permalink":"/justthoughts/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/justthoughts/blog/tags/facebook"},{"label":"hello","permalink":"/justthoughts/blog/tags/hello"},{"label":"docusaurus","permalink":"/justthoughts/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"New Note 2023-11-20 21:13:00","permalink":"/justthoughts/blog/2023/11/20/21-13-00-note"},"nextItem":{"title":"MDX Blog Post","permalink":"/justthoughts/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/justthoughts/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/justthoughts/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/justthoughts/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/justthoughts/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/justthoughts/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/justthoughts/blog/tags/hello"},{"label":"docusaurus","permalink":"/justthoughts/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/justthoughts/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/justthoughts/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/justthoughts/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/justthoughts/blog/tags/hola"},{"label":"docusaurus","permalink":"/justthoughts/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/justthoughts/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);