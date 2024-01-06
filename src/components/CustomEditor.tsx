import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import { useState } from "react";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
};

function CustomEditor() {
  const [value, setValue] = useState<string>("");
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={value}
      onChange={(_event, editor) => {
        const data = editor.getData();
        setValue(data);
      }}
    />
  );
}

export default CustomEditor;
