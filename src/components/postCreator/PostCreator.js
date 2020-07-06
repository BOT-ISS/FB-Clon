import React, { useState, useEffect } from "react";
import CardWithTitle from "../cards/CardWithTitle";
import PostContentForm from "./PostContentForm";
import Button from "../Button";

const PostCreator = () => {
  const [text, setText] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);

  const formId = "post-creator-form";

  const isNotDone = ({ uploadProgress }) => uploadProgress < 100;
  const isUploadingFiles = mediaFiles.length > 0 && mediaFiles.some(isNotDone);
  const canSendThePost = text !== "" && !isUploadingFiles;

  return (
    <CardWithTitle title="Crear publicación">
      <PostContentForm
        {...{ formId, text, setText, mediaFiles, setMediaFiles }}
      />
      <footer>
        <Button primary fullWidth formId={formId} isDisabled={!canSendThePost}>
          Publicar
        </Button>
      </footer>
    </CardWithTitle>
  );
};

export default PostCreator;