/* eslint-disable prettier/prettier */
import { TitleBox, FooterItem, Markdown } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as theme } from "react-syntax-highlighter/dist/esm/styles/prism"; // atomDark  nord
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const markdown = `**Programming languages all have built-in data structures, but these often differ from one language to another**. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

[Dynamic typing](https://github.com/carvalhosamu/rocketseat-challenge-github-blog/issues/new)
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

~~~js
let foo = 42; // foo is now a number 
foo = ‘bar’; // foo is now a string 
foo = true; // foo is now a boolean
~~~
`;

export function IssueDetail() {
  return (
    <>
      <TitleBox>
        <header>
          <a href="#">
            <FontAwesomeIcon icon={faChevronLeft} /> voltar
          </a>
          <a href="#teste">
            ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <h2>JavaScript data types and data structures</h2>
        <footer>
          <FooterItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>samuel96carvalho</span>
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </FooterItem>
          <FooterItem>
            <FontAwesomeIcon icon={faComment} />
            <span>5 Comentários</span>
          </FooterItem>
        </footer>
      </TitleBox>
      <Markdown
        components={{
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={theme}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
      {markdown}
      </Markdown>
    </>
  );
}
