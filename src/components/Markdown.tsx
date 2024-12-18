import ReactMarkdown from "react-markdown"

 interface MarkDownProps{
    children: string
}
export default function Markdown({children} : MarkDownProps){
    return(
        <ReactMarkdown>
            {children}
        </ReactMarkdown>
    )

}