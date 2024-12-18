import ReactMarkdown from "react-markdown"

 interface MarkDownProps{
    children: string
}
export default function Markdown({children} : MarkDownProps){
    return(
        <ReactMarkdown className="space-y-3"
        components={{
            ul: (props) => <ul className="list-inside list-disc" {...props}/>,
            a: (props) => <a className="text-blue-500 underline" target="_blank" {...props} />
        }}>
            {children}
        </ReactMarkdown>
    )

}