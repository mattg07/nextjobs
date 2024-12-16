"use client";

import { forwardRef } from "react";
import { Editor, EditorProps } from "react-draft-wysiwyg";

export default forwardRef<object, EditorProps>(function TextEditor(
    props,ref
){
    return <Editor {...props} />
})