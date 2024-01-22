'use client';

import { useState } from 'react';

export const useImageUpload = (initialState = []) => {
  const [imageFiles, setImageFiles] = useState(initialState);

  const uploadedImageManager = (event) => {
    const files = event.target.files;
    setImageFiles(files);
  };

  return {
    imageFiles,
    uploadedImageManager
  };
};
