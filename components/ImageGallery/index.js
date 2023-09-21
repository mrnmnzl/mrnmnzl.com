"use client";
import PhotoAlbum from "react-photo-album";
import { NextJsImage } from "./NextJsImage";

function ImageGallery({ photos }) {
  return <PhotoAlbum layout="rows" photos={photos} renderPhoto={NextJsImage} />;
}

export { ImageGallery };
