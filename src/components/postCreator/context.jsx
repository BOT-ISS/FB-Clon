import React, { createContext, useContext, useState } from "react";
import getUniqueId from "uuid/v4";
import PropTypes from "prop-types";

const PostCreatorContext = createContext();

const usePostCreatorContext = () => {
  const context = useContext(PostCreatorContext);
  if (!context) {
    throw new Error(
      "usePostCreatorContext can only be used within a PostCreatorProvider"
    );
  }
  return context;
};

const toFilesWithId = file => Object.assign(file, { id: getUniqueId() });

const defaultState = {
  text: "",
  mediaFiles: []
};

const PostCreatorProvider = ({ children }) => {
  const [text, setText] = useState(defaultState.text);
  const [mediaFiles, setMediaFiles] = useState(defaultState.mediaFiles);

  const addMediaFiles = newFiles => {
    const newFilesWithId = Array.from(newFiles).map(toFilesWithId);
    setMediaFiles(mediaFiles => [...mediaFiles, ...newFilesWithId]);
  };

  const removeMediaFile = mediaFileId => {
    const newMediaFiles = mediaFiles.filter(
      mediaFile => mediaFile.id !== mediaFileId
    );
    setMediaFiles(newMediaFiles);
  };

  const clearPostCreator = () => {
    setText(defaultState.text);
    setMediaFiles(defaultState.mediaFiles);
  };

  const providerValue = {
    text,
    setText,
    mediaFiles,
    addMediaFiles,
    removeMediaFile,
    clearPostCreator
  };

  return (
    <PostCreatorContext.Provider value={providerValue}>
      {children}
    </PostCreatorContext.Provider>
  );
};

PostCreatorProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const PostCreatorConsumer = PostCreatorContext.Consumer;

export { usePostCreatorContext, PostCreatorProvider, PostCreatorConsumer };
