import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useEffect, useState } from "react";

import { Image } from "../styles/globalStyles";
const getColor = ({ isDragAccept, isDragReject, isFocused }) => {
  if (isDragAccept) {
    return "#00e676";
  }
  if (isDragReject) {
    return "#ff1744";
  }
  if (isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const DropImage = ({ setFile }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

  useEffect(() => {
    setFile(files[0]);
  }, [files]);

  return (
    <>
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select file</p>
      </Container>
      {files.map((file) => (
        <div key={file.name}>
          <div>
            <Image
              src={file.preview}
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default DropImage;
