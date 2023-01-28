import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { FaBold, FaItalic, FaUnderline, FaCode, FaParagraph, FaHeading, FaHighlighter, FaLink, FaImage } from "react-icons/fa";
import { ImUndo2, ImRedo2 } from "react-icons/im";
import { BiCodeBlock } from "react-icons/bi";
import { useCallback } from "react";

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);
        if (url === null) {
            return;
        }
        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }, [editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className="mr-4 mb-4 flex justify-end gap-2">
            <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()}>
                <ImUndo2 />
            </button>
            <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()}>
                <ImRedo2 />
            </button>
            <div className="icon-divide"></div>
            <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive("paragraph") ? "" : "opacity-50"}>
                <FaParagraph />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive("heading", { level: 2 }) ? "" : "opacity-50"}
            >
                <FaHeading />
            </button>
            <div className="icon-divide"></div>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "" : "opacity-50"}
            >
                <FaBold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "" : "opacity-50"}
            >
                <FaItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={editor.isActive("underline") ? "" : "opacity-50"}
            >
                <FaUnderline />
            </button>
            <button onClick={setLink} className={editor.isActive("link") ? "" : "opacity-50"}>
                <FaLink />
            </button>
            <div className="icon-divide"></div>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={editor.isActive("code") ? "" : "opacity-50"}
            >
                <FaCode />
            </button>
            <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive("codeBlock") ? "" : "opacity-50"}>
                <BiCodeBlock />
            </button>
        </div>
    );
};

const TextEditor = ({ editor }) => {
    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default TextEditor;
