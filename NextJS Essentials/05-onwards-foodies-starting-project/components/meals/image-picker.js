"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const input = useRef();

  const handlePickerButton=()=>{
    input.current.click();
  } 

  const handleImageChange=(e)=>{
    const file= e.target.files[0];

    if(!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
      
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <div className={classes.preview}>
        {!pickedImage ? (
          <p>No image picked yet.</p>
        ) : (
          <Image src={pickedImage} alt="The Image selected by user." fill/>
        )}
      </div>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input ref={input} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} onChange={handleImageChange}/>
        <button className={classes.button} type="button" onClick={handlePickerButton}>Pick an Image</button>
      </div>
    </div>
  );
}