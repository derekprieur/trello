"use client";

import { unsplash } from "@/lib/unsplash";
import { useEffect, useState } from "react";

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

const FormPicker = ({ id, errors }: FormPickerProps) => {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });

        if (result && result.response) {
          const images = result.response as Array<Record<string, any>>;
          setImages(images);
        }
      } catch (error) {
        console.log(error);
        setImages([]);
      }
    };
  }, []);

  return <div>FormPicker</div>;
};

export default FormPicker;
